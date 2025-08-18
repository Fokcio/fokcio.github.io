// Karuzela obrazków
const obrazki = [
  { src: "images/gra1.png", href: "projects/PilkaNaRownowazni" },
  { src: "images/gra2.png", href: "projects/Potatogame" },
  { src: "images/Catus.png", href: "projects/catus" }
  // Możesz dodać więcej:
  // { src: "images/gra2.png", href: "/InnaGra" }
];


let aktualnyObrazek = 0;
const obrazekElement = document.getElementById("obrazek");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function pokazObrazek(index) {
  const obrazekDane = obrazki[index];
  obrazekElement.style.opacity = 0;
  setTimeout(() => {
    obrazekElement.src = obrazekDane.src;
    obrazekLink.href = obrazekDane.href;
    obrazekElement.style.opacity = 1;
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
