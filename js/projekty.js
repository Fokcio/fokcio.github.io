// ==========================================================
// js/projekty.js
// Przejścia "ekranami": STRONA GŁÓWNA (hero + bio) <-> PROJEKTY
//
// Zasada działania:
//  - strona główna (hero + bio) i ekran projektów to dwa osobne ekrany,
//  - lekkie przewinięcie w dół na stronie głównej OD RAZU przenosi na ekran
//    projektów (strona główna znika z widoku - nie da się stanąć "pomiędzy"),
//  - przewinięcie w górę na ekranie projektów (od szczytu listy) wraca
//    na stronę główną.
// ==========================================================

(function () {
  const kontener = document.getElementById('projekty'); // lista projektów (własne przewijanie)

  if (!kontener) return;

  // Przeglądarka nie ma przywracać starej pozycji po odświeżeniu - my nią sterujemy
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  let animuje = false;

  // ===== Funkcje pomocnicze =====
  function edytowalneAktywne() {
    const el = document.activeElement;
    return !!(el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable));
  }

  function wysokoscEkranu() {
    return Math.round((window.visualViewport && window.visualViewport.height) || window.innerHeight);
  }

  function pozycja() {
    return window.scrollY || window.pageYOffset || 0;
  }

  // Górna krawędź ekranu projektów (w pikselach dokumentu)
  function punktProjekty() {
    return Math.max(0, Math.round(kontener.getBoundingClientRect().top + pozycja()));
  }

  // Czy widać jeszcze stronę główną (projekty są poza ekranem)?
  function naGlownej() {
    return pozycja() < punktProjekty() - 2;
  }

  function nadObcymScrollerem(target) {
    // WinBox i czat przewijają swoje treści same - nie przechwytujemy ich
    return !!(target && target.closest && target.closest('.winbox, .wb-body, #chatWindow, #chatMessages'));
  }

  function nadInteraktywnym(target) {
    // spacja na przycisku/linku ma go aktywować, a nie przewracać ekran
    return !!(target && target.closest && target.closest('button, a, input, textarea, select'));
  }

  // ===== Płynna animacja przewijania okna =====
  function easing(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animujScroll(doPozycji) {
    if (animuje) return;
    const maks = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const cel = Math.max(0, Math.min(doPozycji, maks));
    const start = pozycja();
    if (Math.abs(cel - start) < 2) return;

    animuje = true;
    const czasStart = performance.now();
    const czasTrwania = 800;

    const krok = (teraz) => {
      const t = Math.min(1, (teraz - czasStart) / czasTrwania);
      window.scrollTo(0, start + (cel - start) * easing(t));
      if (t < 1) {
        requestAnimationFrame(krok);
      } else {
        window.scrollTo(0, cel);
        animuje = false;
      }
    };
    requestAnimationFrame(krok);
  }

  // ===== Wysokość ekranu w zmiennej CSS (--wysokosc-ekranu) =====
  function ustawWysokoscEkranu() {
    if (edytowalneAktywne()) return; // klawiatura ekranowa nie może kurczyć ekranów

    const wys = wysokoscEkranu();
    if (wys > 0) {
      document.documentElement.style.setProperty('--wysokosc-ekranu', wys + 'px');
    }

    if (animuje) return;

    // po zmianie rozmiaru okna wracamy na właściwy ekran
    const y = pozycja();
    const p = punktProjekty();
    if (p <= 2) return;

    if (y > 2 && y < p - 2) {
      animujScroll(y > p / 2 ? p : 0);
    } else if (y >= p - 2) {
      window.scrollTo(0, p);
    } else if (y > 0) {
      window.scrollTo(0, 0);
    }
  }

  // ===== Kółko myszy / touchpad =====
  window.addEventListener('wheel', (e) => {
    if (edytowalneAktywne() || nadObcymScrollerem(e.target)) return;
    if (Math.abs(e.deltaY) < 4) return;

    if (animuje) { e.preventDefault(); return; }

    if (naGlownej()) {
      // strona główna: pierwszy ruch w dół od razu przenosi na ekran projektów
      e.preventDefault();
      animujScroll(e.deltaY > 0 ? punktProjekty() : 0);
      return;
    }

    // ekran projektów: listę przewijamy normalnie, a od jej szczytu wracamy na stronę główną
    if (kontener.scrollTop <= 0 && e.deltaY < 0) {
      e.preventDefault();
      animujScroll(0);
    }
  }, { passive: false });

  // ===== Klawiatura =====
  window.addEventListener('keydown', (e) => {
    if (edytowalneAktywne() || e.ctrlKey || e.altKey || e.metaKey) return;

    const wDol = e.key === 'ArrowDown' || e.key === 'PageDown';
    const wGore = e.key === 'ArrowUp' || e.key === 'PageUp';
    const spacja = e.key === ' ';
    if (!wDol && !wGore && !spacja) return;
    if (spacja && nadInteraktywnym(e.target)) return; // spacja ma kliknąć przycisk

    if (animuje) { e.preventDefault(); return; }

    if (naGlownej()) {
      if (wDol || spacja) {
        e.preventDefault();
        animujScroll(punktProjekty());
      }
      return;
    }

    // ekran projektów: klawisze przewijają listę, od jej szczytu wracają na stronę główną
    e.preventDefault();
    if (wGore && kontener.scrollTop <= 0) {
      animujScroll(0);
      return;
    }

    const krok = e.key === 'ArrowDown' ? 90 : kontener.clientHeight * 0.9;
    kontener.scrollBy({ top: wGore ? -krok : krok, behavior: 'smooth' });
  });

  // ===== Dotyk (telefon/tablet) =====
  let dotykStartY = null;

  window.addEventListener('touchstart', (e) => {
    dotykStartY = (e.touches.length === 1) ? e.touches[0].clientY : null;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (dotykStartY === null || e.touches.length !== 1) return;
    if (edytowalneAktywne() || nadObcymScrollerem(e.target)) return;
    if (animuje) { e.preventDefault(); return; }

    const palec = e.touches[0].clientY;

    if (naGlownej()) {
      // na stronie głównej nie przewijamy natywnie - przejście robi touchend
      e.preventDefault();
      return;
    }

    // ekran projektów: ciągnięcie w dół od szczytu listy = powrót na stronę główną
    if (kontener.scrollTop <= 0 && palec > dotykStartY) {
      e.preventDefault();
    }
  }, { passive: false });

  window.addEventListener('touchend', (e) => {
    if (dotykStartY === null) return;
    const startY = dotykStartY;
    dotykStartY = null;

    if (animuje || edytowalneAktywne() || nadObcymScrollerem(e.target)) return;
    if (!e.changedTouches || !e.changedTouches.length) return;

    const delta = startY - e.changedTouches[0].clientY; // > 0 = gest w górę (przewijanie w dół)

    if (naGlownej()) {
      if (delta > 30) animujScroll(punktProjekty());
      else if (delta < -30) animujScroll(0);
      return;
    }

    if (delta < -30 && kontener.scrollTop <= 0) animujScroll(0);
  });

  // ===== Dociąganie do najbliższego ekranu (np. przeciąganie paska przewijania) =====
  // Czekamy, aż przewijanie SIĘ ZATRZYMA - dzięki temu nie walczymy z płynnym
  // przewijaniem zlecanym przez inne skrypty (np. asystent AI pokazujący bio).
  let dociagTimer = 0;
  let ostatniaPozycja = -1;

  function zaplanujDociagniecie() {
    if (animuje) return;
    clearTimeout(dociagTimer);
    dociagTimer = setTimeout(() => {
      if (animuje) return;

      const y = pozycja();
      if (Math.abs(y - ostatniaPozycja) > 0.5) {
        // strona wciąż się przewija - sprawdzamy ponownie za chwilę
        ostatniaPozycja = y;
        zaplanujDociagniecie();
        return;
      }

      const p = punktProjekty();
      if (p <= 2) return;

      // nigdy nie zatrzymujemy się "pomiędzy" ekranami
      if (y > 2 && y < p - 2) {
        animujScroll(y > p / 2 ? p : 0);
      }
    }, 250);
  }

  window.addEventListener('scroll', () => {
    ostatniaPozycja = pozycja();
    zaplanujDociagniecie();
  });

  // ===== Start =====
  ustawWysokoscEkranu();
  window.addEventListener('resize', ustawWysokoscEkranu);
  window.addEventListener('orientationchange', () => setTimeout(ustawWysokoscEkranu, 150));
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', ustawWysokoscEkranu);
  }
  document.addEventListener('focusout', () => setTimeout(ustawWysokoscEkranu, 250));

  window.addEventListener('load', () => {
    // po odświeżeniu startujemy z górnego ekranu (albo zostajemy na projektach)
    window.scrollTo(0, naGlownej() ? 0 : punktProjekty());
  });
})();
