(function () {
  const isMobile = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent);
  const restrictedPath = "/niedozwolonotelefonu";

  if (isMobile) {
    if (window.location.pathname === restrictedPath) {
      // Po wejściu na /niedozwolonotelefonu uruchom ciągłe wibracje
      startVibrationLoop();
    } else {
      // Przekierowanie na stronę blokującą telefony
      window.location.href = restrictedPath;
    }
  }

  // Funkcja do wibrowania w pętli
  function startVibrationLoop() {
    if (!("vibrate" in navigator)) return;

    let interval = setInterval(() => {
      navigator.vibrate([500]); // Wibracja 500ms co sekundę
    }, 1000);

    // Na wypadek opuszczenia strony – wyczyść wibracje
    window.addEventListener("beforeunload", () => {
      clearInterval(interval);
      navigator.vibrate(0);
    });
  }
})();
