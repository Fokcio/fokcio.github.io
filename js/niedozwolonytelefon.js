(function () {
  // Funkcja do sprawdzenia, czy urządzenie to telefon
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  // Ścieżka na której telefon NIE jest dozwolony
  const restrictedPath = "/niedozwolonotelefonu";

  // Sprawdź, czy to telefon
  if (isMobileDevice()) {
    // Sprawdź, czy obecna ścieżka to /niedozwolonotelefonu
    if (window.location.pathname === restrictedPath) {
      // Wibrowanie w pętli
      function vibrateLoop() {
        navigator.vibrate([200]);
          setTimeout(vibrateLoop, 1000); // Powtarzaj co sekundę
        }
      }
      vibrateLoop();
    } else {
      // Przekierowanie na /niedozwolonotelefonu
      window.location.href = restrictedPath;
    }
  }
})();
