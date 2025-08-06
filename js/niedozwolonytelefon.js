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
        navigator.vibrate(Infinity);
        setTimeout(0.1);
        navigator.vibrate(0);
        setTimeout(0.1);
          setTimeout(vibrateLoop, 0.2); // Powtarzaj co sekundę
        }
      }
      vibrateLoop();
    } else {
      // Przekierowanie na /niedozwolonotelefonu
      window.location.href = restrictedPath;
    }
  }
})();
