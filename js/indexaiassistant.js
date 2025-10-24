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

chatToggle.onclick = () => {
  chatWindow.style.display = 'flex';
  chatToggle.style.display = 'none';
  chatInput.focus();
};

chatClose.onclick = () => {
  chatWindow.style.display = 'none';
  chatToggle.style.display = 'flex';
};

// 🗣️ Funkcja mowy
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = navigator.language || 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

// 🧠 Wyświetlanie wiadomości + mowa
function appendMessage(text, fromUser = false) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.classList.add(fromUser ? 'userMsg' : 'aiMsg');

  const ttsRegex = /<tts>(.*?)<!tts>/s;
  const match = text.match(ttsRegex);
  if (match) {
    const spokenText = match[1].trim();
    speakText(spokenText);
    text = text.replace(ttsRegex, spokenText);
  }

  div.textContent = text;
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

const systemPrompt = `...`; // ← tu wklej swój systemPrompt z regułami

let chatHistory = [
  { role: "system", content: systemPrompt.trim() }
];

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
