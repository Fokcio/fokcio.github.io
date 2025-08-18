// Karuzela obrazków
const obrazki = [
  { 
    src: "images/gra1.png", 
    href: "projects/PilkaNaRownowazni",
    opis: "Gra wykonana przez AI, polega na utrzymaniu piłki na platformie używając przycisków lub strzałek na klawiaturze."
  },
  { 
    src: "images/gra2.png", 
    href: "projects/Potatogame",
    opis: "Zostań ziemniakiem, zbuduj świat, ukończ parkour, i się nie ugotuj"
  },
  { 
    src: "images/Catus.png", 
    href: "projects/catus",
    opis: "<b>Catus</b> to fałszywy wirus komputerowy napisany w <b>Pythonie</b>,<br>gra muzykę i wyświetla <i>losowe KOTY</i>,<br>Aby wyłączyć należy kliknąć <b>ESC</b><br><small>Aplikacja została przetestowana na Windows 11</small>"
  }
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
    opisElement.innerHTML = obrazekDane.opis;
    
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

// Pokaż pierwszy obrazek od razu
pokazObrazek(aktualnyObrazek);
