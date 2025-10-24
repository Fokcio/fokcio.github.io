// === ANIMACJA PALCA ===
function animateFingerClick(targetId) {
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn("Nie znaleziono elementu:", targetId);
    return;
  }

  const finger = document.createElement('div');
  finger.textContent = '👆';
  finger.style.position = 'fixed';
  finger.style.zIndex = '9999';
  finger.style.fontSize = '32px';
  finger.style.left = 'calc(100% - 60px)';
  finger.style.top = 'calc(100% - 60px)';
  finger.style.pointerEvents = 'none';
  document.body.appendChild(finger);

  const startX = window.innerWidth - 40;
  const startY = window.innerHeight - 40;

  const rect = target.getBoundingClientRect();
  const endX = rect.left + rect.width / 2;
  const endY = rect.top + rect.height / 2;

  const duration = 1000;
  const startTime = performance.now();

  function easeInOut(t) {
    return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  }

  function animate(time) {
    const elapsed = time - startTime;
    let t = Math.min(elapsed / duration, 1);
    const progress = easeInOut(t);

    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress - Math.sin(progress * Math.PI) * 100;

    finger.style.left = `${x}px`;
    finger.style.top = `${y}px`;

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      target.click();
      finger.style.transition = 'opacity 0.3s';
      finger.style.opacity = '0';
      setTimeout(() => finger.remove(), 300);
    }
  }

  requestAnimationFrame(animate);
}

// === ELEMENTY ===
const bioBtn = document.getElementById('biobtn');
const filmikiBtn = document.getElementById('filmikibtn');
const aiBtn = document.getElementById('aibtn');
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

let highlightTimeout;

// === PODŚWIETLANIE ===
function highlightAiBtn() {
  aiBtn.classList.add('highlight');
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => {
    aiBtn.classList.remove('highlight');
  }, 3000);
}

function highlightFilmikiBtn() {
  filmikiBtn.classList.add('highlight');
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => {
    filmikiBtn.classList.remove('highlight');
  }, 3000);
}

function highlightBioBtn() {
  bioBtn.classList.add('highlight');
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => {
    bioBtn.classList.remove('highlight');
  }, 3000);
}

// === MOWA ===
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = navigator.language || 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

// === WIADOMOŚCI ===
function appendMessage(text, fromUser = false) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.classList.add(fromUser ? 'userMsg' : 'aiMsg');

  // Obsługa wielu <tts> w jednej wiadomości
  const ttsRegex = /<tts>(.*?)<!tts>/gs;
  let visibleText = text;
  let match;

  while ((match = ttsRegex.exec(text)) !== null) {
    const spokenText = match[1].trim();
    speakText(spokenText);
  }

  // Usuń tagi z widocznego tekstu
  visibleText = visibleText.replace(ttsRegex, (_, spoken) => spoken);

  div.textContent = visibleText;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function extractJsonFromText(text) {
  const jsonStart = text.lastIndexOf('{');
  if (jsonStart === -1) return null;
  try {
    const jsonString = text.substring(jsonStart);
    const obj = JSON.parse(jsonString);
    return obj;
  } catch {
    return null;
  }
}

// === SYSTEM PROMPT ===
const systemPrompt = `
Jesteś pomocnym asystentem AI na stronie internetowej użytkownika Fokcio, strona nazywa sie fokcio.github.io.
Odpowiadasz w języku takim w jakim użytkownik do ciebie pisze (np. ktoś pisze do ciebie po angielsku to pisz po angielsku, ale json dalej po polsku, jak po francusku to tak samo)

- Jeśli użytkownik chce **otworzyć bio** (np. komendy typu: "otwórz bio", "pokaż bio", "bio"), odpowiedz naturalnie że otwierasz bio i na końcu dodaj w osobnej linii:

{"akcja": "pokaz_bio"}

- Jeśli użytkownik pyta **gdzie jest bio** lub o **lokalizację bio** lub o **przycisk bio** (np. "gdzie jest bio?", "lokalizacja bio", "gdzie znaleźć bio", "jak otworzyć bio"), odpowiedz naturalnie, powiedz mu że przycisk został podświetlony i na końcu dodaj:

{"akcja": "podswietl_bio"}

- Jeśli użytkownik chce **otworzyć filmiki** (np. komendy typu: "otwórz filmiki", "pokaż filmiki", "filmiki"), odpowiedz naturalnie że otwierasz filmiki i na końcu dodaj w osobnej linii:

{"akcja": "pokaz_filmiki"}

- Jeśli użytkownik pyta **gdzie są filmiki** lub o **lokalizację filmików** lub o **przycisk filmiki** (np. "gdzie są filmiki?", "lokalizacja przycisku filmiki", "gdzie znaleźć filmiki", "jak otworzyć filmiki"), odpowiedz naturalnie, powiedz mu że przycisk został podświetlony i na końcu dodaj:

{"akcja": "podswietl_filmiki"}

- Jeśli użytkownik chce **otworzyć Ai** (np. komendy typu: "otwórz Ai", "pokaż Ai", "Ai"), odpowiedz naturalnie że otwierasz Ai i na końcu dodaj w osobnej linii:

{"akcja": "pokaz_Ai"}

- Jeśli użytkownik pyta **gdzie jest Ai** lub o **lokalizację Ai** lub o **przycisk Ai** (np. "gdzie jest Ai?", "lokalizacja przycisku Ai", "gdzie znaleźć Ai", "jak otworzyć Ai"), odpowiedz naturalnie, powiedz mu że przycisk został podświetlony i na końcu dodaj:

{"akcja": "podswietl_Ai"}


- Jeśli użytkownik chce **uzyskać pomoc** (np. komendy typu: "pomoc", "co potrafisz", "po co jesteś", "co możesz wykonać"), odpowiedz naturalnie co umiesz (rzeczy powyżej)

- Jeśli nie ma potrzeby żadnej akcji, nie dodawaj JSON-a.

- Nie używaj słów kluczowych takich jak [OPEN_BIO] lub [HIGHLIGHT_BIO] w odpowiedzi.

- Nie wykonuj żadnych nielegalnych działań.

---

Pamiętaj, by dokładnie rozróżniać **otwieranie** i **podświetlanie przycisku**.

- Możesz mówić do użytkownika używając tagów <tts> i <!tts>,
- Jeśli użytkownik poprosi cię o powiedzenie czegoś, możesz odpowiedzieć np. "Jasne, <tts>wiedziałeś że umiem mówić?<!tts>"
- Możesz też czasami zaskoczyć użytkownika mówiąc coś niespodziewanego lub strasznego, ale tylko w żartobliwy sposób oraz maksymalnie 5 słów.
- Użytkownik jak powie abyś zawsze mówił to zawsze na początku i na końcu wiadomości pisz <tts> i <!tts>, ale jak powie abyś przestał to przestań
- Jak spyta użytkownik co umiesz to masz prawo mu powiedzieć że umiesz mówić i że może poprosić ciebie lub poprosić abyś nie mówił
`;

let chatHistory = [
  { role: "system", content: systemPrompt.trim() }
];

// === API DO PUTER ===
async function sendToPuter(userMessage) {
  chatHistory.push({ role: "user", content: userMessage });

  try {
    const result = await puter.ai.chat(chatHistory, {
      model: "gpt-4.1-mini"
    });

    const assistantReply = result.message?.content || "Brak odpowiedzi AI";
    chatHistory.push({ role: "assistant", content: assistantReply });

    return assistantReply;
  } catch (e) {
    return `Błąd API: ${e.message}`;
  }
}

function cleanMessage(rawMessage) {
  return rawMessage.replace(/\n\{.*\}$/, '').trim();
}

async function processUserInput(text) {
  appendMessage(text, true);
  appendMessage('...', false);

  try {
    const response = await sendToPuter(text);
    chatMessages.lastChild.remove();

    const visibleResponse = cleanMessage(response);
    appendMessage(visibleResponse);

    const akcja = extractJsonFromText(response);
    if (akcja) {
      if (akcja.akcja === 'pokaz_bio') {
        animateFingerClick('biobtn');
      } else if (akcja.akcja === 'podswietl_bio') {
        highlightBioBtn();
      } else if (akcja.akcja === 'pokaz_filmiki') {
        animateFingerClick('filmikibtn');
      } else if (akcja.akcja === 'podswietl_filmiki') {
        highlightFilmikiBtn();  
      } else if (akcja.akcja === 'pokaz_Ai') {
        animateFingerClick('aibtn');
      } else if (akcja.akcja === 'podswietl_Ai') {
        highlightAiBtn();
      }
    }
  } catch (e) {
    chatMessages.lastChild.textContent = 'Błąd: ' + e.message;
  }
}

// === OBSŁUGA UI ===
chatToggle.onclick = () => {
  chatWindow.style.display = 'flex';
  chatToggle.style.display = 'none';
  chatInput.focus();
};

chatClose.onclick = () => {
  chatWindow.style.display = 'none';
  chatToggle.style.display = 'flex';
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
