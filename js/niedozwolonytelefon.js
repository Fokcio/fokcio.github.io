(function () {
  const isMobile = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent);
  const restrictedPath = "/niedozwolonotelefonu";

  if (isMobile) {
    if (window.location.pathname === restrictedPath) {
      // Po interakcji użytkownika (kliknięciu gdziekolwiek) – uruchom wibracje
      document.body.addEventListener("click", function onClick() {
        document.body.removeEventListener("click", onClick);
        startVibrationLoop();
      });
    } else {
      window.location.href = restrictedPath;
    }
  }

  // Funkcja do wibrowania w pętli
  function startVibrationLoop() {
    if (!("vibrate" in navigator)) return;

    const interval = setInterval(() => {
      navigator.vibrate([500]); // Wibracja 500ms co 1s
    }, 1000);

    window.addEventListener("beforeunload", () => {
      clearInterval(interval);
      navigator.vibrate(0);
    });
  }
})();
