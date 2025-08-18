let translations = {};
let currentLang = 'pl';
let napisy = [];
let napisElement = document.getElementById("napis");
let indexNapisu = 0;
const chars = "~`!@#$%^&*(){}[]|:;\"<>?/.,";
let zmienNapisInterval = null;

const switcher = document.getElementById('langSwitcher');

// Pobierz język z URL
const params = new URLSearchParams(window.location.search);
const langFromUrl = params.get('lang');
if (langFromUrl) currentLang = langFromUrl;

// Ustaw <select> zgodnie z URL
switcher.value = currentLang;

// Zmieniamy język i aktualizujemy URL
switcher.addEventListener('change', async (e) => {
  currentLang = e.target.value;
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set('lang', currentLang);
  window.history.replaceState({}, '', newUrl);

  await loadLanguage(currentLang);
});

// Load JSON language
async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  translations = await res.json();
  updateTextContent();
  updateNapisy();
  pokazObrazek(aktualnyObrazek); // odśwież karuzelę po zmianie języka
}

function updateTextContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) el.textContent = translations[key];
  });
}

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
    "meow..."
  ];

  indexNapisu = 0;
  if (zmienNapisInterval) clearInterval(zmienNapisInterval);
  zmienNapisInterval = setInterval(zmienNapis, 3000);
  zmienNapis();
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

// Karuzela obrazków z kluczem key
const obrazki = [
  { src: "images/gra1.png", href: "projects/PilkaNaRownowazni", key: "KaruzelaOpisPNR" },
  { src: "images/gra2.png", href: "projects/Potatogame", key: "KaruzelaOpisPG" },
  { src: "images/Catus.png", href: "projects/catus", key: "KaruzelaOpisC" }
];

let aktualnyObrazek = 0;
const obrazekElement = document.getElementById("obrazek");
const obrazekLink = document.getElementById("obrazekLink");
const opisElement = document.getElementById("karuzelaOpis");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function pokazObrazek(index) {
  const obrazekDane = obrazki[index];
  obrazekElement.style.opacity = 0;
  opisElement.style.opacity = 0;

  setTimeout(() => {
    obrazekElement.src = obrazekDane.src;
    obrazekLink.href = obrazekDane.href;
    opisElement.innerHTML = translations[obrazekDane.key] || "";
    obrazekElement.style.opacity = 1;
    opisElement.style.opacity = 1;
  }, 300);
}

prevButton.addEventListener("click", () => {
  aktualnyObrazek = (aktualnyObrazek - 1 + obrazki.length) % obrazki.length;
  pokazObrazek(aktualnyObrazek);
});

nextButton.addEventListener("click", () => {
  aktualnyObrazek = (aktualnyObrazek + 1) % obrazki.length;
  pokazObrazek(aktualnyObrazek);
});

// Sekwencja klawiszy, animacje, deszcz kotów itp.
const sekwencja = ['k', 'o', 't', 'e', 'l'];
let aktualnaSekwencja = [];
const gifOverlay = document.getElementById('gifOverlay');

document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();
  if (sekwencja.includes(key)) {
    aktualnaSekwencja.push(key);
    if (aktualnaSekwencja.toString() === sekwencja.toString()) {
      gifOverlay.style.display = 'flex';
      setTimeout(() => { gifOverlay.style.display = 'none'; }, 2120);
      aktualnaSekwencja = [];
    }
  } else aktualnaSekwencja = [];
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
      index = (index + 1) % tytuly.length;
    }
  }, 500);
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    pageVisibility = false;
    document.title = 'Wróć do kotka :D';
  } else {
    pageVisibility = true;
    document.title = tytuly[index];
    gifOverlay.style.display = 'flex';
    setTimeout(() => { gifOverlay.style.display = 'none'; }, 2120);
  }
});

startTitleAnimation();

// Funkcja deszczu kotów
function startCatRain() {
  const interval = setInterval(() => {
    const cat = document.createElement('img');
    const size = Math.random() * 60 + 40;
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 3;
    const url = `https://cataas.com/cat?width=${Math.floor(size)}&height=${Math.floor(size)}&t=${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    cat.src = url;
    cat.className = 'cat-drop';
    cat.style.left = `${left}px`;
    cat.style.width = `${size}px`;
    cat.style.height = `${size}px`;
    cat.style.animationDuration = `${duration}s`;
    document.body.appendChild(cat);
    cat.addEventListener('animationend', () => cat.remove());
  }, 300);

  setTimeout(() => clearInterval(interval), 15000);
}

let wpisane = [];
document.addEventListener("keydown", (e) => {
  wpisane.push(e.key.toLowerCase());
  if (wpisane.length > 4) wpisane.shift();
  if (wpisane.join("") === "meow") {
    startCatRain();
    wpisane = [];
  }
});

// WinBox buttons
document.getElementById('biobtn').onclick = () => { new WinBox("Bio", { url: "/bio.html?lang=" + currentLang }); };
document.getElementById('filmikibtn').onclick = () => { new WinBox("Videos", { url: "/video.html?lang=" + currentLang }); };
document.getElementById('aibtn').onclick = () => { new WinBox("AI", { url: "/ai.html?lang=" + currentLang }); };

// Start
document.addEventListener('DOMContentLoaded', async () => {
  await loadLanguage(currentLang);
});
