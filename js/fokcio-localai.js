// ==========================================================
// js/fokcio-localai.js - LOKALNY SILNIK AI (Transformers.js)
// Silnik generacji wzięty z dostarczonego kodu Fokcio AI:
//   import { pipeline, TextStreamer } from ".../@huggingface/transformers@4.0.0"
//   MODEL sunxanadu/Qwen3-1.7B-ONNX-web, webgpu/q4f16,
//   temperature 0.7, top_p 0.8, do_sample, repetition_penalty 1.05,
//   enable_thinking false + czyszczenie <think>/tokenów specjalnych.
// Różnice vs wklejony kod: (1) limit tokenów 384 zamiast 256, bo model
// musi też zwracać bloki JSON z akcjami (!gen); (2) brak własnego UI -
// pasek statusu to istniejący mały box czatu (#chatMessages).
//
// ODPORNOŚĆ na blad WebGPU:
//   "failed to call OrtRun() ... Failed to download data from buffer:
//    Failed to execute 'mapAsync' on 'GPUBuffer': [Invalid Buffer]"
// Powód: Qwen3-1.7B trzyma KV cache w pamieci GPU (~112 KB na token), a
// prompt systemowy asystenta (katalog akcji !help + kod strony na zywo) jest
// dlugi, wiec bufor przekracza limit WebGPU i karta wywala sesje. Dlatego:
//   1. PRZYCINAMY WEJSCIE do bezpiecznego budzetu znakow (mniejszy KV cache),
//   2. mamy LANCUCH KONFIGURACJI: webgpu/q4f16 -> webgpu/q4 -> wasm/q4 (CPU),
//      a q4f16 tylko wtedy, gdy karta ma "shader-f16",
//   3. gdy generowanie padnie, silnik sam przelacza sie na kolejny tryb
//      (bez powtarzania zepsutej konfiguracji do konca sesji),
//   4. uzytkownik moze wymusic tryb komendami !cpu / !gpu / !ai auto.
// ==========================================================
import {
  pipeline,
  TextStreamer
} from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.0.0";

const MODEL = "sunxanadu/Qwen3-1.7B-ONNX-web";

// ===== BUDZETY PAMIECI / KONTEKSTU =====
// Prompt systemowy asystenta jest bardzo dlugi, a kazdy token to pamiec GPU.
// Te limity chronia przed bledem "Invalid Buffer" na WebGPU i przed
// przekroczeniem okna kontekstu modelu.
const MAX_ZNAKOW_SYSTEMU = 6000;   // ~2000 tokenow na sam prompt systemowy
const MAX_OGON_SYSTEMU = 2000;     // ile znakow koncowki promptu zostawiamy
const MAX_ZNAKOW_WEJSCIA = 8000;   // ~2700 tokenow na cala rozmowe
const MAX_ODPOWIEDZI = 384;        // ile tokenow moze wygenerowac model

// ===== KONFIGURACJE SILNIKA (kolejne proby, w tej kolejnosci) =====
const KONFIGURACJE = [
  { id: 'gpu-f16', device: 'webgpu', dtype: 'q4f16', opis: 'WebGPU (q4f16)', wymaga: 'f16' },
  { id: 'gpu-q4', device: 'webgpu', dtype: 'q4', opis: 'WebGPU (q4)', wymaga: 'gpu' },
  { id: 'cpu-q4', device: 'wasm', dtype: 'q4', opis: 'CPU (q4)', wymaga: 'brak' }
];

let generator = null;
let aktywnaKonfiguracja = null;
let trybWymuszony = 'auto';        // 'auto' | 'gpu' | 'cpu'
let mozliwosci = null;             // { gpu, f16 } - co potrafi ta przegladarka
const zepsuteKonfiguracje = {};    // id -> true (ta konfiguracja padla w tej sesji)
let trwaGenerowanie = false;
let loadError = null;
let loadProgress = 0;

function chatInputEl() {
  try { return document.getElementById('chatInput'); } catch (e) { return null; }
}

function chatMessagesEl() {
  try { return document.getElementById('chatMessages'); } catch (e) { return null; }
}

let statusEl = null;
function pokazStatus(tekst) {
  try {
    const box = chatMessagesEl();
    if (!box) return;
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.className = 'aiMsg';
      box.appendChild(statusEl);
    }
    statusEl.textContent = tekst;
    box.scrollTop = box.scrollHeight;
  } catch (e) {}
}

function usunStatus() {
  try { if (statusEl && statusEl.parentNode) statusEl.parentNode.removeChild(statusEl); } catch (e) {}
  statusEl = null;
}

function ustawPlaceholder(tekst) {
  try {
    const inp = chatInputEl();
    if (inp) inp.placeholder = tekst;
  } catch (e) {}
}

// ===== CO POTRAFI TA PRZEGLADARKA =====
async function sprawdzMozliwosci() {
  if (mozliwosci) return mozliwosci;
  const wynik = { gpu: false, f16: false };
  try {
    if (navigator.gpu && typeof navigator.gpu.requestAdapter === 'function') {
      // requestAdapter() potrafi sie zaciac (albo dlugo czekac na sterownik) -
      // nigdy nie blokujemy przez to czatu, dlatego twardy limit czasu.
      const adapter = await Promise.race([
        navigator.gpu.requestAdapter(),
        new Promise((r) => setTimeout(() => r(null), 1500))
      ]);
      if (adapter) {
        wynik.gpu = true;
        try {
          wynik.f16 = !!(adapter.features && typeof adapter.features.has === 'function' && adapter.features.has('shader-f16'));
        } catch (e) {}
      }
    }
  } catch (e) { console.warn('[FokcioLocalAI] nie udalo sie sprawdzic WebGPU:', e && e.message); }
  mozliwosci = wynik;
  console.log('[FokcioLocalAI] WebGPU:', wynik.gpu ? 'tak' : 'nie', '| fp16:', wynik.f16 ? 'tak' : 'nie');
  return wynik;
}

// Lista trybow do sprobowania w tej sesji (malejaco - od najszybszego)
async function listaKonfiguracji() {
  const moz = await sprawdzMozliwosci();
  const gpu = KONFIGURACJE.filter((k) => k.device === 'webgpu');
  const cpu = KONFIGURACJE.filter((k) => k.device === 'wasm');

  if (trybWymuszony === 'cpu') return cpu.slice();

  // !gpu = probujemy kazde WebGPU nawet jesli wykrywanie zawiodlo; w razie
  // problemu i tak spadamy na CPU, zeby czat zawsze odpowiedzial.
  if (trybWymuszony === 'gpu') return gpu.concat(cpu);

  const gpuMozliwe = gpu.filter((k) => (k.wymaga === 'f16' ? (moz.gpu && moz.f16) : moz.gpu));
  return gpuMozliwe.concat(cpu);
}

function zwolnijModel() {
  try {
    if (generator && typeof generator.dispose === 'function') generator.dispose();
  } catch (e) {}
  generator = null;
  aktywnaKonfiguracja = null;
}

function skrot(tekst, limit) {
  const t = String(tekst == null ? '' : tekst).replace(/\s+/g, ' ').trim();
  const max = limit || 140;
  return t.length > max ? t.slice(0, max) + '...' : t;
}

// Wczytuje model wg podanej konfiguracji (jedna sesja na raz - 1.7B to duzo pamieci)
async function wczytajKonfiguracje(konf) {
  if (generator && aktywnaKonfiguracja && aktywnaKonfiguracja.id === konf.id) return generator;

  zwolnijModel();
  pokazStatus('Ładuję lokalne AI: ' + konf.opis + '… (pierwsze uruchomienie pobiera model)');

  generator = await pipeline('text-generation', MODEL, {
    device: konf.device,
    dtype: konf.dtype,
    progress_callback: (info) => {
      try {
        if (info && info.status === 'progress' && typeof info.progress === 'number') {
          loadProgress = Math.min(info.progress, 100);
          ustawPlaceholder('Pobieranie AI... ' + Math.round(loadProgress) + '%');
          if (statusEl) statusEl.textContent = 'Pobieram lokalne AI (' + konf.opis + ')... ' + Math.round(loadProgress) + '%';
        }
      } catch (e) {}
    }
  });

  aktywnaKonfiguracja = konf;
  loadProgress = 100;
  usunStatus();
  ustawPlaceholder('Napisz wiadomość...');
  console.log('[FokcioLocalAI] gotowe, tryb:', konf.opis);
  return generator;
}

// Pierwsza dzialajaca konfiguracja z listy (uzywana tez przy starcie strony)
async function ladujModel() {
  if (generator) return generator;

  const lista = await listaKonfiguracji();
  let ostatniBlad = null;

  for (const konf of lista) {
    if (zepsuteKonfiguracje[konf.id]) continue;
    try {
      return await wczytajKonfiguracje(konf);
    } catch (e) {
      ostatniBlad = e;
      zepsuteKonfiguracje[konf.id] = true;
      console.warn('[FokcioLocalAI] nie udalo sie wczytac ' + konf.opis + ':', e && e.message);
    }
  }

  loadError = ostatniBlad;
  pokazStatus('Nie udało się uruchomić lokalnego AI' +
    (ostatniBlad && ostatniBlad.message ? ' (' + skrot(ostatniBlad.message) + ')' : '') +
    '. Spróbuj Chrome/Edge na komputerze albo wpisz !cpu.');
  throw ostatniBlad || new Error('lokalne AI nie wystartowalo');
}

try {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { ladujModel().catch(() => {}); }, { once: true });
  } else {
    ladujModel().catch(() => {});
  }
} catch (e) {}

function wyczyscOdpowiedz(text) {
  if (!text) return '';
  try {
    text = String(text);
    text = text.replace(/<think>[\s\S]*?<\/think>/gi, '');
    text = text.replace(/<think>[\s\S]*/gi, '');
    text = text.replace(/<\|im_end\|>/g, '');
    text = text.replace(/<\|endoftext\|>/g, '');
    return text.trim();
  } catch (e) { return String(text || '').trim(); }
}

// ===== OCHRONA PAMIECI: przycinamy prompt przed wyslaniem do modelu =====
// Bez tego dlugi system prompt (katalog akcji + kod strony na zywo) zjada
// caly bufor WebGPU i generowanie pada na "Invalid Buffer".
function przytnijWejscie(messages) {
  const wejscie = (Array.isArray(messages) ? messages : []).map((m) => ({
    role: (m && m.role) ? m.role : 'user',
    content: String((m && m.content) || '')
  }));

  const system = wejscie.find((m) => m.role === 'system');
  let budzet = MAX_ZNAKOW_WEJSCIA;

  if (system) {
    if (system.content.length > MAX_ZNAKOW_SYSTEMU) {
      // Prompt asystenta ma 3 czesci: (1) zasady + format akcji JSON,
      // (2) dlugi katalog akcji + kod strony na zywo, (3) zasady generowania.
      // Wycinamy SRODEK (najobszerniejszy i najmniej krytyczny), a zostawiamy
      // poczatek i koniec - inaczej model zgubilby zasady dzialania (!gen).
      const ogon = MAX_OGON_SYSTEMU;
      const glowa = MAX_ZNAKOW_SYSTEMU - ogon;
      system.content = system.content.slice(0, glowa) +
        '\n\n[...srodek instrukcji (katalog akcji + kod strony na zywo) skrocony, zeby AI zmiescilo sie w pamieci karty graficznej. Po dokladny kod strony siegnij akcja {"akcja":"kodStrony","co":"css"}.]' +
        '\n\n' +
        system.content.slice(system.content.length - ogon);
    }
    budzet -= system.content.length;
  }

  // Historia: bierzemy od konca (najswiezsze wiadomosci sa najwazniejsze)
  const reszta = wejscie.filter((m) => m !== system);
  const wybrane = [];
  for (let i = reszta.length - 1; i >= 0 && budzet > 0; i--) {
    let tresc = reszta[i].content;
    if (tresc.length > budzet) {
      if (wybrane.length) break;                        // starsze wiadomosci pomijamy
      tresc = tresc.slice(tresc.length - budzet);       // ostatnia wiadomosc: koniec jest wazniejszy
    }
    budzet -= tresc.length;
    wybrane.unshift({ role: reszta[i].role, content: tresc });
  }

  const wynik = system ? [system].concat(wybrane) : wybrane;
  return wynik.length ? wynik : [{ role: 'user', content: 'Czesc!' }];
}

// Jedno wywolanie modelu (te same parametry co w oryginalnym kodzie Fokcio AI)
async function generuj(wejscie, opts) {
  const maxTokens = opts.max_new_tokens || MAX_ODPOWIEDZI;
  const onToken = (typeof opts.onToken === 'function') ? opts.onToken : null;
  let answer = '';
  let streamer = null;

  try {
    streamer = new TextStreamer(generator.tokenizer, {
      skip_prompt: true,
      skip_special_tokens: true,
      callback_function: (token) => {
        answer += token;
        if (onToken) { try { onToken(wyczyscOdpowiedz(answer)); } catch (e) {} }
      }
    });
  } catch (e) { streamer = null; }

  const out = await generator(wejscie, {
    max_new_tokens: maxTokens,
    temperature: 0.7,
    top_p: 0.8,
    do_sample: true,
    repetition_penalty: 1.05,
    enable_thinking: false,
    streamer: streamer || undefined
  });

  if (!streamer || !answer) {
    try {
      if (Array.isArray(out) && out[0] && out[0].generated_text) {
        const gt = out[0].generated_text;
        if (typeof gt === 'string') answer = gt;
        else if (Array.isArray(gt) && gt.length) {
          const last = gt[gt.length - 1];
          answer = (last && last.content) ? last.content : answer;
        }
      } else if (typeof out === 'string') { answer = out; }
    } catch (e) {}
  }

  answer = wyczyscOdpowiedz(answer);
  return answer || 'Nie udało mi się wygenerować odpowiedzi.';
}

// ===== ODPOWIEDZ CZATU (z automatycznym ratunkiem trybu) =====
async function chat(messages, opts) {
  opts = opts || {};
  const wejscie = przytnijWejscie(messages);
  const lista = await listaKonfiguracji();
  let ostatniBlad = null;

  for (let i = 0; i < lista.length; i++) {
    const konf = lista[i];
    if (zepsuteKonfiguracje[konf.id]) continue;

    trwaGenerowanie = true;
    try {
      await wczytajKonfiguracje(konf);
      const wynik = await generuj(wejscie, opts);
      trwaGenerowanie = false;
      return wynik;
    } catch (e) {
      trwaGenerowanie = false;
      ostatniBlad = e;
      const komunikat = String((e && e.message) || e);
      console.warn('[FokcioLocalAI] ' + konf.opis + ' padl przy generowaniu:', komunikat);

      // Ta konfiguracja jest zepsuta w tej sesji - nie meczymy jej wiecej
      zepsuteKonfiguracje[konf.id] = true;
      zwolnijModel();

      const nastepna = lista.slice(i + 1).find((k) => !zepsuteKonfiguracje[k.id]);
      if (nastepna) {
        pokazStatus('Tryb ' + konf.opis + ' nie działa na tej karcie (' + skrot(komunikat, 90) +
          ') - przełączam na ' + nastepna.opis + '…');
      }
    }
  }

  pokazStatus('Lokalne AI nie odpowiedziało' +
    (ostatniBlad && ostatniBlad.message ? ' (' + skrot(ostatniBlad.message, 90) + ')' : '') +
    '. Wpisz !cpu, żeby wymusić tryb na procesorze.');
  throw ostatniBlad || new Error('lokalne AI nie odpowiada');
}

// ===== RECZNE PRZELACZANIE TRYBU (komendy !cpu / !gpu / !tryb auto) =====
// Ratunek, gdy karta graficzna rzuca bledem OrtRun/GPUBuffer.
async function ustawTryb(tryb) {
  const nowy = String(tryb == null ? '' : tryb).trim().toLowerCase();
  if (['auto', 'gpu', 'cpu'].indexOf(nowy) === -1) throw new Error('tryb musi byc: auto, gpu albo cpu');
  if (trwaGenerowanie) throw new Error('lokalne AI wlasnie generuje odpowiedz - sprobuj za chwile');

  trybWymuszony = nowy;
  Object.keys(zepsuteKonfiguracje).forEach((k) => { delete zepsuteKonfiguracje[k]; });
  mozliwosci = null;
  zwolnijModel();

  const lista = await listaKonfiguracji();
  await ladujModel();

  return {
    tryb: nowy,
    opis: aktywnaKonfiguracja ? aktywnaKonfiguracja.opis : '?',
    mozliwe: lista.map((k) => k.opis)
  };
}

try {
  window.FokcioLocalAI = {
    chat: chat,
    ready: ladujModel,
    MODEL: MODEL,
    ustawTryb: ustawTryb,
    tryb: function () { return trybWymuszony; },
    stan: function () {
      return 'tryb: ' + trybWymuszony +
        ', aktywny: ' + (aktywnaKonfiguracja ? aktywnaKonfiguracja.opis : 'jeszcze nie wczytany') +
        (Object.keys(zepsuteKonfiguracje).length ? ', pominięte: ' + Object.keys(zepsuteKonfiguracje).join(', ') : '');
    }
  };
} catch (e) {}

