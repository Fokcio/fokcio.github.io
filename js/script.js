




let translations = {};
let currentLang = 'pl';
let napisy = [];
let napisElement = document.getElementById("napis");
let indexNapisu = 0;
const chars = "~`!@#$%^&*(){}[]|:;\"<>?/.,";

let zmienNapisInterval = null;

const switcher = document.getElementById('langSwitcher');

// 🟢 Pobierz język z URL (np. ?lang=pl)
const params = new URLSearchParams(window.location.search);
const langFromUrl = params.get('lang');
if (langFromUrl) {
  currentLang = langFromUrl;
}

// 🟢 Ustaw <select> zgodnie z URL
switcher.value = currentLang;

// 🔁 Zmieniamy język i aktualizujemy URL (bez przeładowania)
switcher.addEventListener('change', async (e) => {
  currentLang = e.target.value;

  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set('lang', currentLang);
  window.history.replaceState({}, '', newUrl);

  await loadLanguage(currentLang);
});

async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  translations = await res.json();
  updateTextContent();
  updateNapisy();
}

function updateTextContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

// 🔁 Aktualizacja napisów po zmianie języka
function updateNapisy() {
  napisy = [
    translations['Napis1'],
    translations['Napis2'],
    translations['Napis1'],
    translations['Napis2'],
    translations['Napis1'],
    translations['Napis2'],
    translations['Napis3'],
    translations['Napis4'],
    translations['Napis5'],
    translations['Napis6'],
    "meow...",
    "meow...",
  ];

  indexNapisu = 0;
  if (zmienNapisInterval) clearInterval(zmienNapisInterval);
  zmienNapisInterval = setInterval(zmienNapis, 3000);
  zmienNapis(); // od razu pierwszy
}

function scrambleEffect(text) {
  let i = 0;
  const interval = setInterval(() => {
    napisElement.textContent = text.split('').map((c, j) =>
      j < i ? c : chars[Math.floor(Math.random() * chars.length)]
    ).join('');
    if (i++ > text.length) clearInterval(interval);
  }, 80);
}

function zmienNapis() {
  napisElement.classList.remove("show");
  napisElement.classList.add("fade");

  setTimeout(() => {
    const nowy = napisy[indexNapisu] || '';
    scrambleEffect(nowy);
    indexNapisu = (indexNapisu + 1) % napisy.length;
  }, 500);
}

// 🟢 Start po załadowaniu strony
document.addEventListener('DOMContentLoaded', async () => {
  await loadLanguage(currentLang);
});




// Sekwencja klawiszy
const sekwencja = ['k', 'o', 't', 'e', 'l'];
let aktualnaSekwencja = [];

const gifOverlay = document.getElementById('gifOverlay');
const gif = document.getElementById('funGif');

document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();
  if (sekwencja.includes(key)) {
    aktualnaSekwencja.push(key);
    if (aktualnaSekwencja.toString() === sekwencja.toString()) {
      // Pokaż GIF
      gifOverlay.style.display = 'flex';

      // Schowaj po określonym czasie
      setTimeout(() => {
        gifOverlay.style.display = 'none';
      }, 2120); // <- dopasuj do długości gifa
      aktualnaSekwencja = [];
    }
  } else {
    aktualnaSekwencja = [];
  }
});

// Animacja tytułu
let tytuly = ["Fokcio", "Fokci", "Fokc", "Fok", "Fo", "F", "Fo", "Fok", "Fokc", "Fokci", "Fokcio"];
let index = 0;
let titleInterval;
let pageVisibility = true;

function startTitleAnimation() {
  titleInterval = setInterval(() => {
    if (pageVisibility) {
      document.title = tytuly[index];
      index++;
      if (index >= tytuly.length) {
        index = 0;
      }
    }
  }, 500);
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    pageVisibility = false;
    document.title = 'Wróć do kotka :D';
  } else {
    pageVisibility = true;
    document.title = tytuly[index]; // Przywraca animację tytułu

    // Pokazuje kotka (GIF) po powrocie na stronę
    gifOverlay.style.display = 'flex';
    setTimeout(() => {
      gifOverlay.style.display = 'none';
    }, 2120); // dopasuj do długości gifa
  }
});

startTitleAnimation();


function spawnCatRain() {
  for (let i = 0; i < 20; i++) {
    const cat = document.createElement('img');
    cat.src = 'https://cataas.com/cat/cute?width=60'
    cat.classList.add('cat-rain');
    cat.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(cat);
    setTimeout(() => cat.remove(), 5000);
  }
}

// Funkcja do uruchamiania deszczu kotów
function startCatRain() {
  const interval = setInterval(() => {
    const cat = document.createElement('img');
    const size = Math.random() * 60 + 40; // 40px - 100px
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 3; // 3 - 6 sekundy

    const url = `https://cataas.com/cat?width=${Math.floor(size)}&height=${Math.floor(size)}&t=${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    cat.src = url;
    cat.className = 'cat-drop';
    cat.style.left = `${left}px`;
    cat.style.width = `${size}px`;
    cat.style.height = `${size}px`;
    cat.style.animationDuration = `${duration}s`;

    document.body.appendChild(cat);

    cat.addEventListener('animationend', () => {
      cat.remove();
    });
  }, 300); // co 300ms nowy kot

  setTimeout(() => clearInterval(interval), 15000); // 15s deszcz
}

// Wykrywanie sekwencji "meow"
let wpisane = [];

document.addEventListener("keydown", (e) => {
  wpisane.push(e.key.toLowerCase());
  if (wpisane.length > 4) wpisane.shift();

  if (wpisane.join("") === "meow") {
    startCatRain();
    wpisane = []; // reset
  }
});


document.getElementById('biobtn').onclick = () => {
  new WinBox("Bio", {
    url: "/bio.html?lang=" + currentLang
  });
};

document.getElementById('filmikibtn').onclick = () => {
  new WinBox("Videos", {
    url: "/video.html?lang=" + currentLang
  });
};

document.getElementById('aibtn').onclick = () => {
  new WinBox("AI", {
    url: "/ai.html?lang=" + currentLang
  });

};





