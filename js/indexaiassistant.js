function animateFingerClick(targetId) {
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn("Element not found: #" + targetId);
    return;
  }

  // Tworzymy emoji palca
  const finger = document.createElement('div');
  finger.textContent = '👇';
  finger.style.position = 'fixed';
  finger.style.zIndex = 9999;
  finger.style.fontSize = '32px';
  finger.style.right = '20px';
  finger.style.bottom = '20px';
  finger.style.transition = 'transform 1s ease-in-out, opacity 0.5s';
  document.body.appendChild(finger);

  // Pobieramy pozycję celu
  const rect = target.getBoundingClientRect();
  const targetX = rect.left + rect.width / 2;
  const targetY = rect.top + rect.height / 2;

  // Obliczamy ruch palca względem viewportu
  const fingerX = window.innerWidth - 20; // start x (from right)
  const fingerY = window.innerHeight - 20; // start y (from bottom)

  // Używamy transformacji, żeby palec „poleciał” do celu
  const deltaX = targetX - fingerX;
  const deltaY = targetY - fingerY;

  // Ustawiamy transformację po krótkim czasie (żeby CSS transition zadziałał)
  requestAnimationFrame(() => {
    finger.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  // Po zakończeniu animacji klikamy element i usuwamy emoji
  setTimeout(() => {
    target.click();
    finger.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(finger);
    }, 500);
  }, 1000); // musi pasować do czasu z .style.transition
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

  function appendMessage(text, fromUser = false) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(fromUser ? 'userMsg' : 'aiMsg');
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

  const systemPrompt = `
Jesteś pomocnym asystentem AI na stronie internetowej użytkownika Fokcio, strona nazywa sie fokcio.github.io.
Odpowiadasz w języku takim w jakim użytkownik do ciebie pisze

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



- Jeśli nie ma potrzeby żadnej akcji, nie dodawaj JSON-a.

- Nie używaj słów kluczowych takich jak [OPEN_BIO] lub [HIGHLIGHT_BIO] w odpowiedzi.

- Nie wykonuj żadnych nielegalnych działań.

---

Pamiętaj, by dokładnie rozróżniać **otwieranie** i **podświetlanie przycisku**.
`;

  async function sendToPuter(message) {
    // Przygotuj tablicę wiadomości do puter.ai.chat
    // W formacie [{role: "system", content: ...}, {role: "user", content: ...}]
    const messages = [
      { role: "system", content: systemPrompt.trim() },
      { role: "user", content: message }
    ];

    // Wywołaj API puter.ai.chat (musisz mieć puter obiekt globalnie dostępny)
    try {
      const result = await puter.ai.chat(messages, { model: "gpt-4.1-mini" });
      return result.message?.content || "Brak odpowiedzi AI";
    } catch (e) {
      return `Błąd API: ${e.message}`;
    }
  }

function cleanMessage(rawMessage) {
  // usuń z końca wiadomości linię zawierającą JSON (własnie ten z {"akcja": ...})
  return rawMessage.replace(/\n\{.*\}$/, '').trim();
}

async function processUserInput(text) {
  appendMessage(text, true);

  appendMessage('...', false);

  try {
    const response = await sendToPuter(text);

    chatMessages.lastChild.remove();

    // wyświetl odpowiedź bez JSON-a
    const visibleResponse = cleanMessage(response);
    appendMessage(visibleResponse);

    // wyciągnij i wykonaj akcję z JSON-a
    const akcja = extractJsonFromText(response);
    if (akcja) {
      if (akcja.akcja === 'pokaz_bio') {
        new WinBox("Bio", {
          url: "/bio.html?lang=" + currentLang
        });
        animateFingerClick('biobtn');
        
      } else if (akcja.akcja === 'podswietl_bio') {
        highlightBioBtn();
        
      } else if (akcja.akcja === 'pokaz_filmiki') {
        new WinBox("Videos", {
          url: "/video.html?lang=" + currentLang
        });
      } else if (akcja.akcja === 'podswietl_filmiki') {
        highlightFilmikiBtn();  
      } else if (akcja.akcja === 'pokaz_Ai') {
        new WinBox("AI", {
          url: "/ai.html?lang=" + currentLang
        });
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
