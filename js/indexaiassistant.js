// Funkcja do animacji kliknięcia palcem
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

// Pobranie wszystkich arkuszy CSS jako tekst
function getAllCss() {
  let css = '';
  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        css += rule.cssText + '\n';
      }
    } catch(e) { /* ignorujemy cross-origin */ }
  }
  return css;
}

// Elementy przycisków i chat
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

// Funkcje podświetlania przycisków
function highlightAiBtn() {
  aiBtn.classList.add('highlight');
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => aiBtn.classList.remove('highlight'), 3000);
}

function highlightFilmikiBtn() {
  filmikiBtn.classList.add('highlight');
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => filmikiBtn.classList.remove('highlight'), 3000);
}

function highlightBioBtn() {
  bioBtn.classList.add('highlight');
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => bioBtn.classList.remove('highlight'), 3000);
}

// Chat toggle
chatToggle.onclick = () => {
  chatWindow.style.display = 'flex';
  chatToggle.style.display = 'none';
  chatInput.focus();
};

chatClose.onclick = () => {
  chatWindow.style.display = 'none';
  chatToggle.style.display = 'flex';
};

// Dodawanie wiadomości
function appendMessage(text, fromUser = false) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.classList.add(fromUser ? 'userMsg' : 'aiMsg');
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Pobieranie JSONa z tekstu AI
function extractJsonFromText(text) {
  const jsonStart = text.lastIndexOf('{');
  if (jsonStart === -1) return null;
  try {
    const jsonString = text.substring(jsonStart);
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

// System prompt z możliwością edycji strony
const systemPrompt = `
Jesteś pomocnym asystentem AI na stronie użytkownika Fokcio.
Możesz otwierać bio, filmiki, AI i podświetlać przyciski tak jak wcześniej.

Dodatkowo masz możliwość lokalnej edycji strony, tylko jeśli użytkownik wpisze komendę zaczynającą się od "!?".
Możesz wtedy zwrócić JSON typu:
{
  "EHtml": "(nowy kod HTML)",
  "ECss": "(nowy kod CSS)"
}

Nie zmieniaj strony bez komendy "!?".
Nie wykonuj działań nielegalnych.

Aktualny stan strony:
"kod HTML strony": ` + document.body.innerHTML + `,
"kod CSS strony": ` + getAllCss() + `
`;

let chatHistory = [
  { role: "system", content: systemPrompt.trim() }
];

// Wysyłanie wiadomości do AI
async function sendToPuter(userMessage) {
  chatHistory.push({ role: "user", content: userMessage });

  try {
    const result = await puter.ai.chat(chatHistory, { model: "gpt-4.1-mini" });
    const assistantReply = result.message?.content || "Brak odpowiedzi AI";
    chatHistory.push({ role: "assistant", content: assistantReply });
    return assistantReply;
  } catch (e) {
    return `Błąd API: ${e.message}`;
  }
}

// Usuwanie JSONa z widocznej wiadomości
function cleanMessage(rawMessage) {
  return rawMessage.replace(/\n\{.*\}$/, '').trim();
}

// Przetwarzanie wpisu użytkownika
async function processUserInput(text) {
  appendMessage(text, true);
  appendMessage('...', false);

  try {
    const response = await sendToPuter(text);
    chatMessages.lastChild.remove();
    appendMessage(cleanMessage(response));

    // Sprawdzenie czy AI zwróciło JSON
    const akcja = extractJsonFromText(response);
    if (akcja) {
      // Wykonywanie akcji standardowych
      if (akcja.akcja === 'pokaz_bio') animateFingerClick('biobtn');
      else if (akcja.akcja === 'podswietl_bio') highlightBioBtn();
      else if (akcja.akcja === 'pokaz_filmiki') animateFingerClick('filmikibtn');
      else if (akcja.akcja === 'podswietl_filmiki') highlightFilmikiBtn();
      else if (akcja.akcja === 'pokaz_Ai') animateFingerClick('aibtn');
      else if (akcja.akcja === 'podswietl_Ai') highlightAiBtn();

      // **EDYCJA STRONY** (tylko lokalnie!)
      if (akcja.EHtml) document.body.innerHTML = akcja.EHtml;
      if (akcja.ECss) {
        let styleTag = document.getElementById('dynamicStyle');
        if (!styleTag) {
          styleTag = document.createElement('style');
          styleTag.id = 'dynamicStyle';
          document.head.appendChild(styleTag);
        }
        styleTag.innerHTML = akcja.ECss;
      }
    }
  } catch (e) {
    chatMessages.lastChild.textContent = 'Błąd: ' + e.message;
  }
}

// Event dla przycisku wysyłki
sendBtn.onclick = () => {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  processUserInput(text);
};

// Enter w polu input
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendBtn.click();
  }
});