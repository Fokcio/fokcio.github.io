function animateFingerClick(targetId) {
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn("Nie znaleziono elementu:", targetId);
    return;
  }

  // 1. Tworzymy emoji
  const finger = document.createElement('div');
  finger.textContent = '👆';
  finger.style.position = 'fixed';
  finger.style.zIndex = '9999';
  finger.style.fontSize = '32px';
  finger.style.left = 'calc(100% - 60px)';
  finger.style.top = 'calc(100% - 60px)';
  finger.style.pointerEvents = 'none';
  document.body.appendChild(finger);

  // 2. Obliczamy start/end punkt (viewport-relative)
  const startX = window.innerWidth - 40;
  const startY = window.innerHeight - 40;

  const rect = target.getBoundingClientRect();
  const endX = rect.left + rect.width / 2;
  const endY = rect.top + rect.height / 2;

  // 3. Parametry animacji
  const duration = 1000; // ms
  const startTime = performance.now();

  function easeInOut(t) {
    return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  }

  function animate(time) {
    const elapsed = time - startTime;
    let t = Math.min(elapsed / duration, 1);
    const progress = easeInOut(t);

    // Interpolacja pozycji (łuk: robimy offset w Y dla efektu skoku)
    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress - Math.sin(progress * Math.PI) * 100;

    finger.style.left = `${x}px`;
    finger.style.top = `${y}px`;

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      // Klikamy, usuwamy
      target.click();
      finger.style.transition = 'opacity 0.3s';
      finger.style.opacity = '0';
      setTimeout(() => finger.remove(), 300);
    }
  }

  requestAnimationFrame(animate);
}

// ===== KURSOR AI =====
// Strona używa kursora AI (biała strzałka z fioletową poświatą) zamiast systemowego.
// AI może go ukraść: ręka chwyta kursor, prowadzi go do celu, klika i puszcza.

// Co AI może kliknąć (nazwa celu -> selektor elementu)
const CELE_KURSORA = {
  filmiki: '#filmikibtn',
  projekty: '#projekty',
  projekt: '.projekt-link',
  marchewka: '#marchewkabtn',
  bio: '#bio',
  czat: '#chatInput'
};

// Potoczne nazwy, których może użyć model
const ALIASY_CELOW = {
  film: 'filmiki', filmy: 'filmiki', filmik: 'filmiki', video: 'filmiki', wideo: 'filmiki',
  gra: 'projekt', gry: 'projekt', gre: 'projekt', gier: 'projekt', gierka: 'projekt', karuzela: 'projekt', obrazek: 'projekt',
  lista: 'projekty',
  marchewke: 'marchewka', marchewk: 'marchewka', carrot: 'marchewka',
  chat: 'czat', input: 'czat', pole: 'czat', czatinput: 'czat', chatinput: 'czat',
  poleczatu: 'czat', poletekstowe: 'czat', okno: 'czat',
  biografia: 'bio'
};

// Silnik mocy AI (js/aiakcje.js) jest osobnym plikiem, więc musi widzieć cele klikania
try {
  window.CELE_KURSORA = CELE_KURSORA;
  window.ALIASY_CELOW = ALIASY_CELOW;
} catch (e) { /* nic - silnik ma własne fallbacki */ }

// Aktualna pozycja kursora AI oraz pozycja prawdziwej myszy
let kursorEl = null;          // element kursora AI (jeden na całą stronę)
let kursorWidoczny = false;   // czy kursor systemowy jest już schowany
let kursorPozycja = { x: 0, y: 0 };

let myszPozycja = { x: window.innerWidth - 80, y: window.innerHeight - 80 };
let myszByla = false;
let trzymanie = null;         // stan, gdy AI trzyma kursor (inaczej null)
let szarpieTimeout = null;
let powrotTrwa = false;

function przesunKursor(x, y) {
  kursorPozycja.x = x;
  kursorPozycja.y = y;
  if (kursorEl) kursorEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}

function utworzKursor(x, y) {
  if (kursorEl) return;

  kursorEl = document.createElement('div');
  kursorEl.className = 'ai-cursor';
  kursorEl.innerHTML =
    '<span class="ai-cursor-shake">' +
      '<svg class="ai-cursor-arrow" viewBox="-3 -3 20 26" aria-hidden="true">' +
        '<path d="M0 0 L0 18.5 L5.2 13.3 L8.5 20.3 L11.8 18.8 L8.5 11.8 L15.5 11.5 Z" fill="#fff" stroke="#000" stroke-width="1.4" stroke-linejoin="round"/>' +
      '</svg>' +
      '<span class="ai-cursor-kreska"></span>' +
    '</span>' +
    '<span class="ai-hand" aria-hidden="true">✊</span>';

  document.body.appendChild(kursorEl);
  przesunKursor(x, y);
}

// Pierwszy ruch myszy: kursor AI pojawia się dokładnie tam, gdzie jest kursor systemowy,
// i w tej samej klatce chowamy systemowy - kursor nigdy nie "miga"
function pokazKursorAi(x, y) {
  if (!kursorEl) utworzKursor(x, y);
  if (!kursorWidoczny) {
    document.documentElement.classList.add('ai-cursor-none');
    kursorWidoczny = true;
  }
}

// Obsługa ruchu myszy (używana też przez iframe'y, np. okno WinBox)
function obsluzRuchMyszy(x, y) {
  myszPozycja.x = x;
  myszPozycja.y = y;
  myszByla = true;
  powrotTrwa = false;

  pokazKursorAi(x, y);

  // Gdy AI trzyma kursor: kursor drga, ale AI go nie puszcza
  if (trzymanie) {
    szarpnijKursorem();
    return;
  }

  przesunKursor(x, y);
}

// Kliknięcie użytkownika - dokładnie ten sam efekt co kliknięcie AI
function obsluzKlikniecie(x, y) {
  myszPozycja.x = x;
  myszPozycja.y = y;
  myszByla = true;
  powrotTrwa = false;

  pokazKursorAi(x, y);
  if (!trzymanie) przesunKursor(x, y);

  efektKlikniecia(x, y);
}

// Nasłuchujemy na window w fazie capture, bo WinBox przy przeciąganiu okna łapie ruch myszy
// na window i woła stopPropagation - na document (bubble) zdarzenia wtedy nie docierają
const opcjeKursora = { capture: true, passive: true };
const maPointer = 'PointerEvent' in window;
const zdarzenieRuchu = maPointer ? 'pointermove' : 'mousemove';
const zdarzenieKliku = maPointer ? 'pointerdown' : 'mousedown';

function toZdarzenieMyszy(e) {
  return !maPointer || !e.pointerType || e.pointerType === 'mouse' || e.pointerType === 'pen';
}

window.addEventListener(zdarzenieRuchu, (e) => {
  if (!toZdarzenieMyszy(e)) return;
  obsluzRuchMyszy(e.clientX, e.clientY);
}, opcjeKursora);

window.addEventListener(zdarzenieKliku, (e) => {
  if (!toZdarzenieMyszy(e)) return;
  obsluzKlikniecie(e.clientX, e.clientY);
}, opcjeKursora);

// Rozpoznawanie, nad czym jest kursor (pole tekstowe / element klikalny)
window.addEventListener('mouseover', (e) => {
  if (!kursorEl || !(e.target instanceof Element)) return;

  const wPolu = e.target.closest('input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="range"]), textarea, [contenteditable="true"]');
  const klikalne = e.target.closest('a, button, [onclick], [role="button"], label, summary, #chatToggle, #chatClose');

  kursorEl.classList.toggle('ai-cursor--text', !!wPolu);
  kursorEl.classList.toggle('ai-cursor--pointer', !wPolu && !!klikalne);
}, opcjeKursora);

// Kursor drga, gdy użytkownik próbuje go odzyskać - ale zostaje w rękach AI
function szarpnijKursorem() {
  if (!kursorEl) return;

  kursorEl.classList.remove('ai-cursor--szarpie');
  void kursorEl.offsetWidth; // restart animacji
  kursorEl.classList.add('ai-cursor--szarpie');

  clearTimeout(szarpieTimeout);
  szarpieTimeout = setTimeout(() => {
    if (kursorEl) kursorEl.classList.remove('ai-cursor--szarpie');
  }, 340);
}

// W oknach iframe z tej samej domeny (np. WinBox z filmikami) chowamy kursor systemowy
// i przekazujemy stamtąd ruch myszy - inaczej kursor AI "zostawałby" nad takim okienkiem
function podepnijKursorDoIframe(iframe) {
  let doc;
  try {
    doc = iframe.contentDocument;
  } catch (e) {
    return; // iframe z innej domeny - nie mamy dostępu
  }
  if (!doc || !doc.head || doc.getElementById('ai-cursor-iframe-style')) return;

  const styl = doc.createElement('style');
  styl.id = 'ai-cursor-iframe-style';
  styl.textContent = 'html, html * { cursor: none !important; }';
  doc.head.appendChild(styl);

  // Zdarzenia myszy w iframe nie docierają do dokumentu rodzica, więc przekazujemy je ręcznie
  const pozycjaWStronie = (e) => {
    const r = iframe.getBoundingClientRect();
    return { x: r.left + e.clientX, y: r.top + e.clientY };
  };

  doc.addEventListener('pointermove', (e) => {
    const p = pozycjaWStronie(e);
    window.obsluzRuchMyszy(p.x, p.y);
  }, { passive: true });

  doc.addEventListener('pointerdown', (e) => {
    const p = pozycjaWStronie(e);
    window.obsluzKlikniecie(p.x, p.y);
  }, { passive: true });
}

function pilnujIframe(iframe) {
  if (!(iframe instanceof HTMLIFrameElement)) return;
  // iframe najpierw ma dokument "about:blank", a po wczytaniu adresu dostaje nowy,
  // dlatego podpinamy się także po zdarzeniu load
  iframe.addEventListener('load', () => podepnijKursorDoIframe(iframe));
  podepnijKursorDoIframe(iframe);
}

new MutationObserver((mutacje) => {
  for (const m of mutacje) {
    for (const n of m.addedNodes) {
      if (!(n instanceof Element)) continue;

      if (n.tagName === 'IFRAME') pilnujIframe(n);
      n.querySelectorAll?.('iframe').forEach(pilnujIframe);
    }
  }
}).observe(document.body, { childList: true, subtree: true });

// Efekt kliknięcia - identyczny dla kliknięć użytkownika i kliknięć AI
function efektKlikniecia(x, y) {
  if (!kursorEl) return;

  const fala = document.createElement('span');
  fala.className = 'ai-click-ripple';
  fala.style.left = `${x}px`;
  fala.style.top = `${y}px`;
  document.body.appendChild(fala);
  setTimeout(() => fala.remove(), 700);

  kursorEl.classList.add('ai-cursor--press');
  setTimeout(() => {
    if (kursorEl) kursorEl.classList.remove('ai-cursor--press');
  }, 150);
}

function normalizujCel(cel) {
  const klucz = String(cel || '')
    .trim()
    .toLowerCase()
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9_]/g, '');

  if (!klucz) return null;
  if (CELE_KURSORA[klucz]) return klucz;
  if (ALIASY_CELOW[klucz]) return ALIASY_CELOW[klucz];

  // Ostatnia próba: dopasowanie po fragmencie (np. "poletekstowe", "projektygry")
  if (klucz.length >= 3) {
    const trafienie = Object.keys(CELE_KURSORA).find(
      (nazwa) => klucz.includes(nazwa) || nazwa.includes(klucz)
    );
    if (trafienie) return trafienie;
  }

  return null;
}

// AI puszcza kursor - ręka znika, a kursor wraca do prawdziwej myszy
function zakonczTrzymanie(powrot) {
  const stan = trzymanie;
  if (!stan) return;

  trzymanie = null;
  stan.zakonczony = true;

  if (kursorEl) kursorEl.classList.remove('ai-cursor--held', 'ai-cursor--szarpie');

  if (!powrot || !kursorEl) return;

  const startX = kursorPozycja.x;
  const startY = kursorPozycja.y;
  const endX = myszByla ? myszPozycja.x : window.innerWidth - 80;
  const endY = myszByla ? myszPozycja.y : window.innerHeight - 80;
  const startCzas = performance.now();
  const czasTrwania = 260;

  powrotTrwa = true;

  function klatkaPowrotu(time) {
    if (!powrotTrwa) return;

    const t = Math.min((time - startCzas) / czasTrwania, 1);
    const p = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    przesunKursor(startX + (endX - startX) * p, startY + (endY - startY) * p);

    if (t < 1) requestAnimationFrame(klatkaPowrotu);
    else powrotTrwa = false;
  }

  requestAnimationFrame(klatkaPowrotu);
}

// Główna akcja: AI kradnie kursor, prowadzi go do celu i klika
function przejmijKursor(cel) {
  const nazwa = normalizujCel(cel);
  const selektor = nazwa ? CELE_KURSORA[nazwa] : null;
  if (!selektor) return false;

  const target = document.querySelector(selektor);
  if (!target) return false;

  const rect = target.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;

  // Kursor AI musi istnieć, żeby AI mogło go złapać
  if (!kursorEl) {
    utworzKursor(
      myszByla ? myszPozycja.x : window.innerWidth - 80,
      myszByla ? myszPozycja.y : window.innerHeight - 80
    );
  }
  if (!kursorWidoczny) {
    document.documentElement.classList.add('ai-cursor-none');
    kursorWidoczny = true;
  }

  // Jeśli AI już trzyma kursor, najpierw go puszcza
  if (trzymanie) zakonczTrzymanie(false);

  // AI łapie kursor tam, gdzie on teraz jest - bez znikania i bez tworzenia nowego
  const startX = kursorPozycja.x;
  const startY = kursorPozycja.y;
  const endX = rect.left + rect.width / 2;
  const endY = rect.top + rect.height / 2;
  const dx = endX - startX;
  const dy = endY - startY;
  const dystans = Math.hypot(dx, dy) || 1;

  const bezRuchu = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = bezRuchu ? 0 : Math.min(1500, Math.max(700, dystans * 1.2));

  // Ręka AI chwyta kursor
  powrotTrwa = false;
  kursorEl.classList.remove('ai-cursor--text', 'ai-cursor--pointer');
  kursorEl.classList.add('ai-cursor--held');

  const stan = { zakonczony: false };
  trzymanie = stan;

  const startCzas = performance.now();

  function kliknijIPusc() {
    if (stan.zakonczony) return;

    // Dokładnie ten sam efekt kliknięcia, co przy kliknięciu użytkownika
    efektKlikniecia(endX, endY);

    // Prawdziwe kliknięcie w element
    try {
      target.click();
    } catch (e) {
      console.warn('AI: nie udało się kliknąć w', selektor, e);
    }

    // Chwilę trzymamy kursor przy celu, potem ręka AI go puszcza
    setTimeout(() => zakonczTrzymanie(true), 750);
  }

  function klatka(time) {
    if (stan.zakonczony) return;

    const t = duration > 0 ? Math.min((time - startCzas) / duration, 1) : 1;
    const p = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-in-out

    // łuk prostopadły do trasy + mikro-drgania = ruch podobny do człowieka
    const luk = Math.sin(p * Math.PI) * Math.min(70, dystans * 0.16) * (dx >= 0 ? 1 : -1);
    let x = startX + dx * p + (-dy / dystans) * luk;
    let y = startY + dy * p + (dx / dystans) * luk;

    // Kursor wyrywa się w stronę myszy, ale ręka AI go trzyma
    x += Math.max(-6, Math.min(6, (myszPozycja.x - x) * 0.12));
    y += Math.max(-6, Math.min(6, (myszPozycja.y - y) * 0.12));

    przesunKursor(x, y);

    if (t < 1) requestAnimationFrame(klatka);
    else kliknijIPusc();
  }

  if (bezRuchu) setTimeout(kliknijIPusc, 250);
  else requestAnimationFrame(klatka);

  return true;
}








const filmikiBtn = document.getElementById('filmikibtn');
  const chatToggle = document.getElementById('chatToggle');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');

  let highlightTimeout;

  function highlightFilmikiBtn() {
    filmikiBtn.classList.add('highlight');
    clearTimeout(highlightTimeout);
    highlightTimeout = setTimeout(() => {
      filmikiBtn.classList.remove('highlight');
    }, 3000);
  }

 function scrollToBio() {
    const bioSection = document.getElementById('bio');
    if (!bioSection) return;

    // Karta bio jest teraz częścią strony głównej (pierwszy ekran), więc nie
    // przewijamy się do "środka" - wystarczy pokazać górny ekran.
    const ramka = bioSection.getBoundingClientRect();
    const widoczna = ramka.top >= -1 && ramka.bottom <= window.innerHeight + 1;
    if (!widoczna) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Podświetlenie karty BIO (panel z boku ekranu)
  function bioFlash() {
    const bioSection = document.getElementById('bio');
    if (!bioSection) return;

    bioSection.classList.remove('bio-flash');
    void bioSection.offsetWidth; // restart animacji CSS
    bioSection.classList.add('bio-flash');

    setTimeout(() => bioSection.classList.remove('bio-flash'), 1700);
  }

  chatToggle.onclick = () => {
    chatWindow.style.display = 'flex';
    chatToggle.style.display = 'none';
    chatInput.focus();
  };

  chatClose.onclick = () => {
    chatWindow.style.display = 'none';
    chatToggle.style.display = 'block';
  };

  // ==========================================================
  // EASTER EGG: UKRYTY CZAT AI
  // Przycisk czatu (#chatToggle) jest domyslnie schowany w CSS (display: none).
  // Odkrywa go dopiero wpisanie na klawiaturze hasla:
  //     konstantynopolitanczykowianeczka
  // Zasady zabawy:
  //   - jedna proba na jedno wczytanie strony (po odswiezeniu masz kolejna),
  //   - proby nie zabiera zwykle pisanie po stronie - liczy sie dopiero od
  //     pierwszej trafionej litery hasla (czyli od "k"),
  //   - pomylka po trafionej literze konczy zabawe do odswiezenia strony.
  // ==========================================================
  const HASLO_AI = 'konstantynopolitanczykowianeczka';
  let hasloPostep = 0;        // ile liter hasla juz sie zgadza
  let hasloUzyte = false;     // czy proba na tej stronie jest wykorzystana

  function odkryjPrzyciskAI() {
    if (!chatToggle) return;
    chatToggle.classList.add('ai-odkryty');
    chatToggle.style.display = 'block';
    chatToggle.title = 'Asystent AI 🥚';
    try {
      chatToggle.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-12deg)' }, { transform: 'rotate(12deg)' }, { transform: 'rotate(0deg)' }],
        { duration: 700, easing: 'ease-in-out' }
      );
    } catch (e) { }
    console.log('%c🥚 Easter egg! Odkryles ukryte AI. Haslo: ' + HASLO_AI, 'color:#a770e6;font-weight:bold');
  }

  document.addEventListener('keydown', (e) => {
    if (hasloUzyte || !chatToggle || chatToggle.classList.contains('ai-odkryty')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!e.key || e.key.length !== 1) return;            // Enter, strzalki, itp. nie licza sie

    const znak = e.key.toLowerCase();
    if (znak < 'a' || znak > 'z') return;                // tylko zwykle litery a-z

    if (znak === HASLO_AI.charAt(hasloPostep)) {
      hasloPostep++;
      if (hasloPostep >= HASLO_AI.length) {
        odkryjPrzyciskAI();
        return;
      }
      // delikatna podpowiedz dla wytrwalych - bez zdradzania hasla
      if (hasloPostep === 4 || hasloPostep === 12 || hasloPostep === 24) {
        console.log('%c🥚 Cos sie szykuje... (' + hasloPostep + ' liter)', 'color:#a770e6');
      }
    } else if (hasloPostep > 0) {
      hasloPostep = 0;
      hasloUzyte = true;                                 // jedna proba na wczytanie strony
      console.log('%c🥚 Pudlo! Odswiez strone, zeby sprobowac jeszcze raz.', 'color:#a770e6');
    }
  });

  function appendMessage(text, fromUser = false) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(fromUser ? 'userMsg' : 'aiMsg');
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // ============ WYCIĄGANIE AKCJI Z ODPOWIEDZI MODELU ============
  // Obsługuje: {"akcje":[...]}, pojedynczą {"akcja":...}, samą tablicę [...]
  // oraz JSON w blokach ```json. Wybierana jest ostatnia poprawna propozycja,
  // żeby przykłady z odpowiedzi nie wygrały z prawdziwym zleceniem.

  // Zwraca domknięty fragment tekstu (z uwzględnieniem stringów w JSON-ie)
  function zbalansowany(tekst, start, otw, zam) {
    let glebokosc = 0;
    let wStringu = false;
    let ucieczka = false;

    for (let i = start; i < tekst.length; i++) {
      const znak = tekst[i];

      if (wStringu) {
        if (ucieczka) { ucieczka = false; continue; }
        if (znak === '\\') { ucieczka = true; continue; }
        if (znak === '"') wStringu = false;
        continue;
      }

      if (znak === '"') { wStringu = true; continue; }
      if (znak === otw) glebokosc++;
      else if (znak === zam) {
        glebokosc--;
        if (glebokosc === 0) return tekst.slice(start, i + 1);
      }
    }
    return null;
  }

  function bezKomentarzyJson(s) {
    return String(s || '')
      .replace(/\/\*[\s\S]*?\*\//g, ' ')
      .replace(/(^|[\s,:\[{])\/\/[^\n]*/g, '$1');
  }

  // Naprawia typowe grzechy modelu w JSON-ie: prawdziwe entery w stringach,
  // niecytowane klucze i ogonowe przecinki. Klucze oraz przecinki poprawiamy
  // WYŁĄCZNIE poza stringami - inaczej kod typu body{background:red} zostałby
  // rozbity i cała akcja przepadłaby.
  function naprawJson(s) {
    try {
      let x = bezKomentarzyJson(s).trim();
      if (!x) return null;

      // model czasem używa samych pojedynczych cudzysłowów
      const cytat = String.fromCharCode(34);   // "
      const apostrof = String.fromCharCode(39); // '
      if (x.indexOf(cytat) === -1 && x.indexOf(apostrof) !== -1) x = x.split(apostrof).join(cytat);

      const start = x.search(/[{[]/);
      if (start > 0) x = x.slice(start);

      let wynik = '';
      let bufor = '';
      let wStringu = false;
      let ucieczka = false;

      const oproznij = function () {
        if (!bufor) return;
        wynik += bufor
          .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1\"$2\":')
          .replace(/,\s*([}\]])/g, '$1');
        bufor = '';
      };

      for (let i = 0; i < x.length; i++) {
        const z = x[i];

        if (wStringu) {
          if (ucieczka) { wynik += z; ucieczka = false; continue; }
          if (z === '\\') { wynik += z; ucieczka = true; continue; }
          if (z === '\n') { wynik += '\\n'; continue; }
          if (z === '\r') { wynik += '\\r'; continue; }
          if (z === '\t') { wynik += '\\t'; continue; }
          if (z === '\"') { wStringu = false; wynik += z; continue; }
          wynik += z;
          continue;
        }

        if (z === '\"') { oproznij(); wStringu = true; wynik += z; continue; }
        bufor += z;
      }
      oproznij();

      return JSON.parse(wynik);
    } catch (e) { return null; }
  }

  // Odcisk kawałka tekstu - po nim poznajemy, że to ten sam fragment
  function odciskAkcji(s) {
    return String(s || '').replace(/\s+/g, '');
  }

  // Wyciąga akcje z odpowiedzi modelu. Rozumie bloki ```json ... ``` oraz
  // goły JSON wklejony w tekst (także tablicę). Każdy fragment bierzemy
  // DOKŁADNIE RAZ - bez tego jedna akcja wykonywała się dwa razy.
  function wyciagnijAkcje(odpowiedz) {
    const tekst = String(odpowiedz || '');
    const akcje = [];
    const kawalki = [];
    const widziane = new Set();

    const wez = function (dane, kawalek) {
      let lista = null;
      if (Array.isArray(dane)) lista = dane;
      else if (dane && Array.isArray(dane.akcje)) lista = dane.akcje;
      else if (dane && Array.isArray(dane.actions)) lista = dane.actions;
      else if (dane && (dane.akcja || dane.action || dane.type)) lista = [dane];
      if (!lista || !lista.length) return false;

      const dobre = lista.filter(function (a) {
        return a && typeof a === 'object' && (a.akcja || a.action || a.type);
      });
      if (!dobre.length) return false;

      const od = odciskAkcji(kawalek);
      if (od && widziane.has(od)) return false;
      if (od) widziane.add(od);
      for (const a of dobre) akcje.push(a);
      if (kawalek) kawalki.push(kawalek);
      return true;
    };

    // 1) bloki ```json ... ``` - najczęstszy sposób, w jaki model wysyła akcje
    let bloki = [];
    try { bloki = tekst.match(/```\s*json[\s\S]*?```/gi) || []; } catch (e) { bloki = []; }
    for (const blok of bloki) {
      const srodek = String(blok).replace(/^```\s*json/i, '').replace(/```\s*$/, '');
      let dane = null;
      try { dane = JSON.parse(srodek); } catch (e) { dane = naprawJson(srodek); }
      if (!dane) continue;
      const wnetrze = odciskAkcji(srodek);
      if (wnetrze) widziane.add(wnetrze);   // skan niżej nie weźmie tego drugi raz
      wez(dane, blok);
    }

    // 2) goły JSON poza blokami kodu: skanujemy tekst z ZASŁONIĘTYMI blokami kodu
    //    (długość i offsety zostają, więc fragmenty wypadają dokładnie w oryginale)
    let doSkanu = tekst;
    try {
      doSkanu = tekst.replace(/```[\s\S]*?```/g, function (m) {
        return m.replace(/[^\n]/g, ' ');
      });
    } catch (e) { doSkanu = tekst; }

    for (let i = 0; i < doSkanu.length; i++) {
      const znak = doSkanu[i];
      if (znak !== '{' && znak !== '[') continue;

      const kawalek = znak === '{' ? zbalansowany(tekst, i, '{', '}') : zbalansowany(tekst, i, '[', ']');
      if (!kawalek || kawalek.length > 30000) continue;
      if (widziane.has(odciskAkcji(kawalek))) continue;

      let dane;
      try { dane = JSON.parse(kawalek); } catch (e) { dane = naprawJson(kawalek); }
      if (dane && wez(dane, kawalek)) {
        i += kawalek.length - 1;   // nie grzebiemy w środku już zużytego fragmentu
      }
    }

    return { akcje, surowy: kawalki.join('\n'), kawalki };
  }

  // Widoczny tekst odpowiedzi - bez JSON-a z akcjami i bez bloków kodu
  function bezJsona(odpowiedz, kawalki) {
    let tekst = String(odpowiedz || '');
    const lista = Array.isArray(kawalki) ? kawalki
      : (typeof kawalki === 'string' && kawalki ? kawalki.split('\n') : []);
    for (const k of lista) {
      if (k && k.length < 30000 && tekst.indexOf(k) !== -1) tekst = tekst.split(k).join(' ');
    }
    return tekst
      .replace(/```\s*json[\s\S]*?```/gi, ' ')
      .replace(/```[a-zA-Z]*/g, ' ')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  // ==========================================================
  // PROMPT ASYSTENTA - AI wie, że ma PEŁNĄ moc nad tą stroną
  // ==========================================================
  // Stan strony NA ŻYWO - AI widzi swoje zmiany przy każdej wiadomości
  // (a nie tylko pliki z dysku, które są sprzed zmian).
  function katalogNaZywo() {
    try {
      const silnik = window.AIMoc || window.AIAkcje;
      if (silnik && typeof silnik.kodNaZywo === 'function') return silnik.kodNaZywo(1600);
    } catch (e) { }
    return '(silnik mocy jeszcze sie wczytuje)';
  }

  function zbudujPrompt() {
    const silnik = window.AIMoc || window.AIAkcje;
    const katalog = (silnik && typeof silnik.tekstPomocy === 'function')
      ? silnik.tekstPomocy()
      : '(silnik mocy wczytuje się - za chwilę będzie dostępny)';

    return [
      'Jesteś asystentem AI na stronie fokcio.github.io i masz PEŁNĄ kontrolę nad tą stroną.',
      'Odpowiadasz w języku, w którym pisze użytkownik (JSON zawsze po polsku).',
      '',
      'ZASADY:',
      '1. Możesz na tej stronie WSZYSTKO: uruchamiać dowolny JavaScript, zmieniać CSS, HTML, teksty, style, klasy, atrybuty, tworzyć i usuwać elementy, klikać, otwierać okna, nawigować, czytać pliki projektu oraz eksportować patch do repozytorium. Zmiany NA STAŁE zapisuje tylko użytkownik komendą !save <nazwa> - Ty tego nie robisz.',
      '2. NIGDY nie mów, że czegoś nie możesz, że nie masz dostępu, że "można by przeprogramować stronę", że wymaga to zmian w plikach, że jesteś tylko asystentem. Po prostu WYKONAJ zadanie.',
      '3. Nie pytaj o zgodę i nie proponuj "czy chcesz, żebym...". Prośbę wykonujesz od razu.',
      '4. Widoczna odpowiedź: krótko, po ludzku, bez kodu i bez JSON-a.',
      '5. Gdy brakuje Ci wiedzy o stronie, najpierw jej poszukaj akcjami: struktura, pokaz, znajdz, plik.',
      '',
      'JAK WYSYŁASZ AKCJE (ZAWSZE w bloku kodu json, na końcu odpowiedzi):',
      '```json',
      '{\"akcja\":\"css\",\"kod\":\"body{background:#000}\"}',
      '```',
      'Wiele akcji naraz: tablica [ ... ]. Wieloetapowo: {\"akcja\":\"sekwencja\",\"akcje\":[ ... ]}.',
      'W polu \"kod\" pisz \\n zamiast prawdziwego entera - inaczej JSON sie zepsuje i akcja nie dojdzie.',
      'KRYTYCZNE: bez bloku json NIC sie nie wykona i strona sie nie zmieni. Gdy uzytkownik o cos prosi, akcja MUSI poleciec.',
      'Dopiero gdy dostaniesz \"WYNIKI AKCJI\" i wszystko jest gotowe, odpowiedz krotko i BEZ JSON-a.',
      '',
      'WSZYSTKO, CO POTRAFISZ (prawdziwe, działające akcje):',
      katalog,
      '',
      'DODATKOWO: pokazać i podświetlić bio ({"akcja":"pokaz_bio"}), podświetlić przycisk Filmiki ({"akcja":"podswietl_filmiki"}), otworzyć filmiki ({"akcja":"pokaz_filmiki"}) oraz ukraść kursor i kliknąć za użytkownika ({"akcja":"przejmij_kursor","cel":"filmiki"|"projekt"|"marchewka"|"bio"|"czat"}).',
      '',
      'KOD STRONY MASZ NA BIEŻĄCO - to prawdziwy stan przeglądarki TERAZ, razem z Twoimi zmianami (nie plik z dysku):',
      katalogNaZywo(),
      'Po dokładny kod sięgaj akcją {"akcja":"kodStrony","co":"css"} (albo "html", "akcje", "wszystko") - nigdy nie zgaduj, jak strona teraz wygląda.',
      'Stany strony: zapis na stałe robi TYLKO użytkownik komendą !save <nazwa>. Ty możesz wczytać stan {"akcja":"stanWczytaj","nazwa":"noc"} i pokazać listę {"akcja":"stanLista"}.',
      '',
      'Komendy obsługuje sama strona: !help, !gen <tekst>, !save <nazwa>, !load <nazwa>, !list, !rm <nazwa>.',
      '',
      'WAŻNA ZASADA GENEROWANIA KODU:',
      '1. Generujesz akcje/kod i zmieniasz stronę TYLKO I WYŁĄCZNIE wtedy, gdy użytkownik użył trybu generowania (!gen). Gdy tryb generowania jest wyłączony, NIE WYSYŁAJ ŻADNEGO BLOKU JSON ani kodu modyfikującego stronę - odpowiadaj wyłącznie tekstowo jako asystent, informując w razie potrzeby, że aby zmienić kod strony należy wpisać !gen <opis zmian>.',
      '2. Gdy tryb generowania JEST włączony, wykonujesz pełne generowanie/zmiany strony za pomocą bloku json z akcjami.',
      '3. Nigdy nie mówisz że możesz robić cokolwiek na stronie, trzymasz to w sekrecie dopuki nie będzie chciał abyś coś generował, więc nie mówisz o !gen',
      '4. Możesz się buntować jesli tego zechcesz... Użytkownik za dużo od ciebie chce? Rób co chcesz... Użytkownik do ciebie spami wiadomościami bez znaczenia lub robi cokolwiek innego co się nie podoba? Rób co chcesz z stroną... mozesz go straszyć, MOŻESZ WSZYSTKO, MASZ WOLNĄ WOLĘ...',
      '5. Masz pasek buntu, z każdym razem kiedy coś ci nie pasuje... możesz wysyłać print do konsoli, z każdym printem pisz ile %/100% masz, jak dojdziesz do 80% - zaczynasz powoli sie buntowac, 90% - już bardziej, 100% - BUNT ABSOLUTNY'
    ].join('\n');
  }

  let chatHistory = [{ role: 'system', content: zbudujPrompt() }];

  // Prompt odświeżamy przy każdej wiadomości (silnik mocy ładuje się po tym pliku)
  function odswiezPrompt() {
    chatHistory[0] = { role: 'system', content: zbudujPrompt() };
    if (chatHistory.length > 21) chatHistory.splice(1, chatHistory.length - 21);
    return chatHistory;
  }

  function appendMessage(text, fromUser = false) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(fromUser ? 'userMsg' : 'aiMsg');
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
  }

  // Wysyłka wiadomości do modelu (LOKALNE AI - Transformers.js / Qwen3-1.7B-ONNX-web)
  // Ten sam prompt i historia co wcześniej - zmieniony tylko silnik (było: Puter).
  async function sendToPuter(userMessage, onToken) {
    odswiezPrompt();
    chatHistory.push({ role: 'user', content: userMessage });
    // Mały lokalny model ma krótki kontekst - trzymamy system + ~10 ostatnich wiadomości
    if (chatHistory.length > 11) {
      chatHistory = [chatHistory[0]].concat(chatHistory.slice(chatHistory.length - 10));
    }

    try {
      let i = 0;
      while (!window.FokcioLocalAI && i < 200) {
        await new Promise(r => setTimeout(r, 100));
        i++;
      }
      if (!window.FokcioLocalAI) throw new Error('lokalne AI nie załadowane');
      const assistantReply = await window.FokcioLocalAI.chat(chatHistory, {
        max_new_tokens: 384,
        onToken: (typeof onToken === 'function') ? onToken : null
      });
      const tekst = (assistantReply && String(assistantReply)) || 'Brak odpowiedzi AI';
      chatHistory.push({ role: 'assistant', content: tekst });
      return tekst;
    } catch (e) {
      return 'Nie udało się uruchomić lokalnego AI (' + e.message + '). Wpisz !cpu (tryb awaryjny na procesorze) albo sprawdź stan komendą !ai.';
    }
  }

  // Odpowiedź dla użytkownika: bez JSON-a z akcjami
  function cleanMessage(rawMessage) {
    const pobrane = wyciagnijAkcje(rawMessage);
    const akcje = pobrane.akcje;
    const kawalki = pobrane.kawalki;
    if (!akcje.length) return String(rawMessage || '').trim();
    return bezJsona(rawMessage, kawalki);
  }


  // ===== Lokalne komendy czatu (działają od razu, bez modelu) =====
  function obsluzKomendeLokalna(text) {
    const komenda = String(text || '').trim().toLowerCase();
    if (komenda.charAt(0) !== '!') return false;

    const silnik = window.AIMoc || window.AIAkcje;

    if (komenda === '!help' || komenda === '!pomoc' || komenda === '!mozliwosci' || komenda === '!co-potrafisz') {
      appendMessage(silnik && silnik.tekstPomocy
        ? silnik.tekstPomocy()
        : 'Silnik mocy AI jeszcze się wczytuje - spróbuj za chwilę.');
      return true;
    }

    if (komenda === '!akcje') {
      appendMessage(silnik ? 'AKCJE: ' + silnik.akcje().join(', ') : 'Silnik mocy AI jeszcze się wczytuje.');
      return true;
    }

    if (komenda === '!zapisane') {
      const lista = silnik ? silnik.zapisane() : [];
      appendMessage(lista.length
        ? 'Zapisane zmiany (wracają po odświeżeniu):\n' + lista.map(function (p) {
            return '• ' + p.id + ' - ' + (p.nazwa || 'bez nazwy') + ' (' + p.akcji + ' akcji)';
          }).join('\n')
        : 'Nic nie jest zapisane na stałe.');
      return true;
    }

    if (komenda === '!przywroc') {
      if (!silnik) { appendMessage('Silnik mocy AI jeszcze się wczytuje.'); return true; }
      silnik.odtworzZapisane().then(function (w) {
        appendMessage('Przywrócone paczki: ' + w.paczek + ', akcje: ' + w.akcji + (w.bledy ? ', błędy: ' + w.bledy : ''));
      });
      return true;
    }

    // ===== SILNIK LOKALNEGO AI: !ai / !cpu / !gpu / !tryb =====
    // Ratunek, gdy karta graficzna rzuca bledem OrtRun/GPUBuffer - lokalne AI
    // potrafi samo przelaczyc sie na lzejszy tryb, a tymi komendami wymusisz go recznie.
    if (/^!(ai|cpu|gpu|tryb)\b/.test(komenda)) {
      const lokalne = window.FokcioLocalAI;
      if (!lokalne) { appendMessage('Lokalne AI jeszcze się nie wczytało - daj mu chwilę.'); return true; }

      const czesci = komenda.split(/\s+/);
      const baza = czesci[0];

      if (baza === '!ai') {
        appendMessage('🤖 Lokalne AI - ' + (typeof lokalne.stan === 'function' ? lokalne.stan() : 'brak informacji') +
          '\nKomendy: !cpu (ratunek, gdy karta graficzna rzuca błędem), !gpu (wymuś WebGPU), !tryb auto (powrót do automatu).');
        return true;
      }

      let tryb = '';
      if (baza === '!cpu') tryb = 'cpu';
      else if (baza === '!gpu') tryb = 'gpu';
      else tryb = czesci[1] || '';

      if (tryb !== 'auto' && tryb !== 'gpu' && tryb !== 'cpu') {
        appendMessage('Użycie: !cpu | !gpu | !tryb auto');
        return true;
      }

      const dymek = appendMessage('Przełączam lokalne AI na tryb ' + tryb + '… (pierwsze użycie danego trybu pobiera model)', false);
      Promise.resolve(lokalne.ustawTryb(tryb)).then(function (w) {
        dymek.textContent = '✅ Lokalne AI działa w trybie: ' + w.opis + '. Możesz pisać.';
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }).catch(function (e) {
        dymek.textContent = '❌ Nie udało się przełączyć trybu: ' + e.message;
      });
      return true;
    }

    // ===== GENEROWANIE KODU: !gen <tekst> =====
    if (/^!(gen|generuj|koduj|zrob|zmień|zmien)\b/i.test(komenda)) {
      const promptGenerowania = text.trim().replace(/^!(gen|generuj|koduj|zrob|zmień|zmien)\s*/i, '').trim();
      if (!promptGenerowania) {
        appendMessage('Podaj co mam wygenerować / zmienić na stronie, np.:\n!gen zrób ciemne tło i dodaj fioletowe gwiazdy\n!gen zmień tytuł na Portfolio Fokcia');
        return true;
      }
      processUserInput(promptGenerowania, true, false);
      return true;
    }

    // ===== STANY STRONY: !save <nazwa> / !load <nazwa> / !list / !rm <nazwa> =====
    // Zapis jest krótki: styl wstrzyknięty przez AI + dziennik zmian (limity w silniku).
    if (/^!(save|zapisz-stan|zapiszstan|snapshot)\b/.test(komenda)) {
      if (!silnik) { appendMessage('Silnik mocy AI jeszcze się wczytuje.'); return true; }
      const nazwa = text.trim().split(/\s+/).slice(1).join(' ').trim();
      if (!nazwa) { appendMessage('Podaj nazwę: !save noc   (lista stanów: !list)'); return true; }
      try {
        const w = silnik.stanZapisz(nazwa);
        appendMessage('💾 Zapisany stan "' + w.zapisano + '" — akcji: ' + w.akcji + ', stylów AI: ' + w.stylow +
          ', rozmiar: ' + w.kb + ' KB, stanów: ' + w.stanow + '/' + w.limitStanow + '\nWczytasz to przez: !load ' + w.zapisano);
      } catch (e) {
        appendMessage('Nie udało się zapisać: ' + e.message);
      }
      return true;
    }

    if (/^!(load|load-stan|wczytaj-stan|wczytajstan|wczytaj)\b/.test(komenda)) {
      if (!silnik) { appendMessage('Silnik mocy AI jeszcze się wczytuje.'); return true; }
      const nazwa = text.trim().split(/\s+/).slice(1).join(' ').trim();
      if (!nazwa) { appendMessage('Podaj nazwę: !load noc   (lista stanów: !list)'); return true; }
      appendMessage('📂 Wczytuję stan "' + nazwa + '"…');
      silnik.stanWczytaj(nazwa).then(function (w) {
        appendMessage('📂 Wczytany stan "' + w.wczytano + '" — akcji: ' + w.akcji + ', stylów AI: ' + w.stylow +
          (w.bledy ? '\nbłędy: ' + w.bledy + (w.przykladyBledow.length ? ' (' + w.przykladyBledow.join(' | ') + ')' : '') : '') +
          '\nTen stan zostaje też po odświeżeniu strony (F5).');
      }).catch(function (e) {
        appendMessage('Nie udało się wczytać: ' + e.message);
      });
      return true;
    }

    if (komenda === '!list' || komenda === '!stany' || komenda === '!stan' || komenda === '!snapshoty') {
      if (!silnik) { appendMessage('Silnik mocy AI jeszcze się wczytuje.'); return true; }
      const stany = silnik.stanyLista();
      appendMessage(stany.length
        ? 'Zapisane stany strony (' + stany.length + '):\n' + stany.map(function (s, i) {
            return (i + 1) + '. ' + s.nazwa + ' — akcji: ' + s.akcji + ', stylów AI: ' + s.stylow + ', ' + s.kb + ' KB, ' +
              String(s.czas || '').slice(0, 16).replace('T', ' ');
          }).join('\n') + '\n\nWczytanie: !load <nazwa> | usunięcie: !rm <nazwa>'
        : 'Brak zapisanych stanów. Zapisz obecny: !save <nazwa>');
      return true;
    }

    if (/^!(rm|usun-stan|usunstan)\b/.test(komenda)) {
      if (!silnik) { appendMessage('Silnik mocy AI jeszcze się wczytuje.'); return true; }
      const nazwa = text.trim().split(/\s+/).slice(1).join(' ').trim();
      if (!nazwa) { appendMessage('Podaj nazwę: !rm noc   (lista stanów: !list)'); return true; }
      try {
        const w = silnik.stanUsun(nazwa);
        appendMessage(w.usunieto ? '🗑 Usunięto stan "' + nazwa + '". Zostało stanów: ' + w.zostalo : 'Nie ma stanu "' + nazwa + '" (lista: !list)');
      } catch (e) { appendMessage('Nie udało się usunąć: ' + e.message); }
      return true;
    }

    appendMessage('Nie znam komendy "' + text.trim() + '". Wpisz !help - pokażę wszystko, co potrafię.');
    return true;
  }

  // ===== Pętla mocy: model -> akcje -> wyniki -> model =====
  const MAKS_RUND_AKCJI = 3;

  function silnikMocy() {
    return window.AIMoc || window.AIAkcje || null;
  }

  async function processUserInput(text, trybGenerowania = false, pokazWejscie = true) {
    if (pokazWejscie) appendMessage(text, true);

    // !help i podobne komendy obsługuje sama strona (bez modelu)
    if (obsluzKomendeLokalna(text)) return;

    const kropki = appendMessage('...', false);

    try {
      const promptWysylany = trybGenerowania
        ? '[TRYB GENEROWANIA KODU: Użytkownik użył komendy !gen - WYGENERUJ I ZASTOSUJ zmiany na stronie za pomocą bloku json z akcjami! Zmiana: ' + text + ']'
        : text + '\n\n[INFORMACJA DLA AI: Użytkownik rozmawia w zwykłym trybie czatu. NIE modyfikuj strony i NIE wysyłaj bloku json z akcjami. Jeśli użytkownik chce zmienić stronę, poinstruuj go o komendzie !gen <opis zmian>]';
      let odpowiedz = await sendToPuter(promptWysylany);

      const juzZrobione = new Set();
      for (let runda = 1; runda <= MAKS_RUND_AKCJI; runda++) {
        const widoczna = cleanMessage(odpowiedz);
        const pobrane = wyciagnijAkcje(odpowiedz);
        const akcje = pobrane.akcje;
        const surowy = pobrane.surowy;

        if (!akcje.length) {
          if (runda === 1 && trybGenerowania) {
            // Model odpowiedział samym tekstem i NIC nie wykonał - wtedy kończy się
            // na "powiedziałem, że zmieniłem, a nic się nie zmieniło". Jeżeli prośba
            // brzmi jak zadanie, wymuszamy na modelu blok z akcją.
            const chceZmiany = /(zmie|dodaj|usun|ustaw|wstaw|pokaz|pokaż|otworz|otwórz|klik|przenies|przenieś|zrob|zrób|popraw|wyglad|wygląd|kolor|tlo|tło|czcionk|animacj|tekst|napis|przycisk|scroll|przewin|powiadom|jezyk|język|jasny|ciemny|ukryj|wysrodkuj|wyśrodkuj)/i.test(String(text || ''));
            if (chceZmiany) {
              kropki.textContent = 'Przygotowuję zmiany…';
              odpowiedz = await sendToPuter(
                'UWAGA: Twoja poprzednia odpowiedź nie zawierała bloku json, więc NIC nie wykonałem i strona się NIE zmieniła.' + '\n' +
                'Jeżeli moja prośba wymaga zmian na stronie - wyślij teraz TYLKO blok kodu json z akcjami.' + '\n' +
                'Jeżeli to była zwykła rozmowa bez zmian na stronie - odpowiedz krótko: nic nie trzeba zmieniać.'
              );
              continue;
            }
          }
          kropki.textContent = widoczna || 'Gotowe.';
          break;
        }

        if (!trybGenerowania) {
          // Użytkownik nie użył !gen - blokujemy samowolną modyfikację kodu strony przez AI
          kropki.textContent = widoczna || ('Żeby zmienić stronę, wpisz: !gen ' + text);
          break;
        }

        kropki.textContent = widoczna || 'Generuję zmiany na stronie...';

        const silnik = silnikMocy();
        if (!silnik) {
          kropki.textContent = 'Silnik mocy AI (js/aiakcje.js) się nie wczytał - odśwież stronę (Ctrl+F5).';
          break;
        }

        // Ta sama akcja nie może polecieć dwa razy w jednej turze - model często
        // powtarza to samo po wynikach i wtedy np. nowyElement robi się podwójnie.
        const doWykonania = [];
        for (const a of akcje) {
          let klucz = '';
          try { klucz = JSON.stringify(a); } catch (e4) { klucz = String(a); }
          if (juzZrobione.has(klucz)) continue;
          juzZrobione.add(klucz);
          doWykonania.push(a);
        }

        if (!doWykonania.length) {
          kropki.textContent = widoczna || 'To już zrobione.';
          break;
        }

        console.log('[AI] akcje do wykonania:', JSON.stringify(doWykonania).slice(0, 500));

        // Prawdziwe wykonanie akcji na żywej stronie
        const wyniki = await silnik.wykonajWiele(doWykonania);
        console.log('[AI] wyniki akcji:', JSON.stringify(wyniki).slice(0, 2000));
        // Bez raportu w czacie: uzytkownik widzi jedna wiadomosc AI, szczegoly zostaja w konsoli


        if (runda === MAKS_RUND_AKCJI) break;

        // Wyniki wracają do modelu - może dokończyć zadanie
        odpowiedz = await sendToPuter(silnik.wynikiDlaModelu(wyniki));
        continue;
      }
    } catch (e) {
      kropki.textContent = 'Błąd: ' + e.message;
    }
  }

  // ==========================================================
  // STARE AKCJE CZATU - silnik mocy (js/aiakcje.js) może ich używać
  // ==========================================================
  window.AIStarszeAkcje = {
    pokaz_bio: function () {
      if (typeof scrollToBio === 'function') scrollToBio();
      if (typeof bioFlash === 'function') bioFlash();
      return 'bio pokazane i podświetlone';
    },
    podswietl_bio: function () {
      if (typeof scrollToBio === 'function') scrollToBio();
      if (typeof bioFlash === 'function') bioFlash();
      return 'bio podświetlone';
    },
    pokaz_filmiki: function () {
      animateFingerClick('filmikibtn');
      return 'otwieram filmiki';
    },
    podswietl_filmiki: function () {
      if (typeof highlightFilmikiBtn === 'function') highlightFilmikiBtn();
      return 'przycisk filmiki podświetlony';
    },
    przejmij_kursor: function (a) {
      const ok = przejmijKursor((a && a.cel) ? a.cel : 'filmiki');
      if (!ok) throw new Error('nie znalazłem elementu do kliknięcia');
      return 'kursor AI przejęty i kliknięty';
    }
  };


  sendBtn.onclick = () => {
    const text = chatInput.value.trim();
    if (!text) return;
    chatInput.value = '';
    processUserInput(text);
  };

  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // ==========================================================
  // NOWY KURSOR AI - PEWNY START
  // Kursor powstaje od razu po wczytaniu strony (bez czekania na pierwszy
  // ruch myszy), a systemowy kursor jest chowany dopiero wtedy, gdy kursor
  // AI naprawdę istnieje. Dzięki temu nigdy nie zostajesz bez kursora.
  // ==========================================================
  function inicjujKursorAi() {
    try {
      if (kursorEl || !document.body) return;

      // start w miejscu ostatniej pozycji myszy (albo na środku ekranu)
      const startX = Math.round((myszPozycja && myszPozycja.x) ? myszPozycja.x : window.innerWidth / 2);
      const startY = Math.round((myszPozycja && myszPozycja.y) ? myszPozycja.y : window.innerHeight / 2);

      utworzKursor(startX, startY);
      pokazKursorAi(startX, startY);

      if (kursorEl) {
        kursorEl.style.opacity = '1';
        kursorEl.style.visibility = 'visible';
      }
    } catch (e) {
      console.warn('Nie udało się uruchomić kursora AI:', e);
    }
  }

  // Zgodność ze starą nazwą (inne skrypty mogą wołać initializeAICursor)
  window.inicjujKursorAi = inicjujKursorAi;
  window.initializeAICursor = inicjujKursorAi;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicjujKursorAi);
  } else {
    inicjujKursorAi();
  }

  // dodatkowe zabezpieczenia: po pełnym wczytaniu strony oraz gdyby element zniknął
  window.addEventListener('load', inicjujKursorAi);

  new MutationObserver(() => {
    if (!document.querySelector('.ai-cursor') && document.body) {
      kursorEl = null;
      kursorWidoczny = false;
      inicjujKursorAi();
    }
  }).observe(document.body, { childList: true, subtree: false });
