// Karuzela obrazków
const obrazki = [
  { src: "images/gra1.png", href: "projects/PilkaNaRownowazni", opisKey: 'KaruzelaOpisPNR', new: false },
  { src: "images/gra2.png", href: "projects/Potatogame", opisKey: 'KaruzelaOpisPG', new: false },
  { src: "images/Catus.png", href: "projects/catus", opisKey: 'KaruzelaOpisC', new: false },
  { src: "images/Cawagla.jpg", href: "projects/cawagla", opisKey: 'KaruzelaOpisCA', new: false },
  { src: "images/Emojimage.png", href: "projects/emojimage", opisKey: 'KaruzelaOpisEM', new: true }
];

let aktualnyObrazek = 0;
const obrazekElement = document.getElementById("obrazek");
const obrazekLink = document.getElementById("obrazekLink");
const opisElement = document.getElementById("karuzelaOpis");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function pokazObrazek(index) {
  const obrazekDane = obrazki[index];

  // Schowanie elementów
  obrazekElement.style.opacity = 0;
  opisElement.style.opacity = 0;

  // Usuń poprzedni <nowosc>, jeśli istnieje
  const staryNowosc = obrazekElement.parentElement.querySelector('nowosc');
  if (staryNowosc) staryNowosc.remove();

  setTimeout(() => {
    // Aktualizacja obrazka i opisu
    obrazekElement.src = obrazekDane.src;
    obrazekLink.href = obrazekDane.href;
    opisElement.innerHTML = translations[obrazekDane.opisKey] || '';
    obrazekElement.style.opacity = 1;
    opisElement.style.opacity = 1;

    // Dodaj <nowosc>, jeśli new: true
    if (obrazekDane.new) {
      const nowosc = document.createElement('nowosc');
      obrazekElement.parentElement.appendChild(nowosc);
    }
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

pokazObrazek(aktualnyObrazek);
