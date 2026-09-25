let napisy = [
  "Cześć, jestem Fokcio",
  "To jest moja strona :D",
  "Cześć, jestem Fokcio",
  "To jest moja strona :D",
  "Cześć, jestem Fokcio",
  "To jest moja strona :D",
  "Dalej to czytasz?",
  "Czekasz na easteregga?",
  "umm rozumiem..",
  "wpisz kotel lub zamiaucz...",
  "meow...",
  "meow...",
];
let napisElement = document.getElementById("napis");
let indexNapisu = 0;
const chars = "~`!@#$%^&*(){}[]|:;\"<>?/.,"; 
let zmienNapisInterval = null;

function updateNapisy() {
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

document.addEventListener('DOMContentLoaded', () => {
  updateNapisy();
});



// Sekwencja klawiszy
const secretKeySequence = ['k', 'o', 't', 'e', 'l'];
let currentSequence = [];

const gifOverlay = document.getElementById('gifOverlay');
const gif = document.getElementById('funGif');

document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();
  if (secretKeySequence.includes(key)) {
    currentSequence.push(key);
    if (currentSequence.toString() === secretKeySequence.toString()) {
      gifOverlay.style.display = 'flex';
      setTimeout(() => { gifOverlay.style.display = 'none'; }, 2120);
      currentSequence = [];
    }
  } else {
    currentSequence = [];
  }
});

// Animacja tytułu
let tytuly = ["Fokcio","Fokci","Fokc","Fok","Fo","F","Fo","Fok","Fokc","Fokci","Fokcio"];
let index = 0;
let titleInterval;
let pageVisibility = true;

function startTitleAnimation() {
  titleInterval = setInterval(() => {
    // AI mogło ustawić własny tytuł (akcja "tytul") - wtedy nie nadpisujemy go
    if (window.__fokcioTytulStop) return;
    if (pageVisibility) {
      document.title = tytuly[index];
      index = (index + 1) % tytuly.length;
    }
  }, 500);
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    pageVisibility = false;
    if (!window.__fokcioTytulStop) document.title = 'Wróć do kotka :D';
  } else {
    pageVisibility = true;
    if (!window.__fokcioTytulStop) document.title = tytuly[index];
    gifOverlay.style.display = 'flex';
    setTimeout(() => { gifOverlay.style.display = 'none'; }, 2120);
  }
});

startTitleAnimation();

// Deszcz kotów
function spawnCatRain() {
  for (let i = 0; i < 20; i++) {
    const cat = document.createElement('img');
    cat.src = 'https://cataas.com/cat/cute?width=60';
    cat.classList.add('cat-rain');
    cat.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(cat);
    setTimeout(() => cat.remove(), 5000);
  }
}

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
    cat.addEventListener('animationend', () => { cat.remove(); });
  }, 300);
  setTimeout(() => clearInterval(interval), 15000);
}

// Sekwencja "meow"
let wpisane = [];
document.addEventListener("keydown", (e) => {
  wpisane.push(e.key.toLowerCase());
  if (wpisane.length > 4) wpisane.shift();
  if (wpisane.join("") === "meow") {
    startCatRain();
    wpisane = [];
  }
});

// WinBoxy
document.getElementById('filmikibtn').onclick = () => { new WinBox("Filmiki", { url: "/video.html" }); };


(function(){
  let target = "paint";   
  let buffer = "";        

  function applyPaintMode() {
    // jeśli już dodany, nie powtarzamy
    if (document.getElementById("paint-style")) return;

    const style = document.createElement("style");
    style.id = "paint-style";
    style.textContent = `
      @font-face {
        font-family: "PaintFont";
        src: url("/fonts/Paint.woff2") format("woff2");
      }
      
      body {
        font-family: "PaintFont", sans-serif !important;
        background: #fff !important;
        color: #000 !important;
      }

      * {
        color: #000 !important;
        background: none !important;
      }

      button {
        background: url("/images/pbutton.png") no-repeat center center / contain !important;
        border: none !important;
        color: #000 !important;
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener("keydown", (e) => {
    buffer += e.key.toLowerCase();

    if (target.startsWith(buffer)) {
      if (buffer === target) {
        applyPaintMode();
        buffer = ""; 
      }
    } else {
      buffer = "";
    }
  });
})();





