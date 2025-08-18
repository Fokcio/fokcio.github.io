<script>
(function () {
  const Y = '8px', X = '-20px'; // przesunięcie w prawo, żeby po obrocie było ładnie

  function stylizujNowosc(el) {
    if (!(el instanceof HTMLElement)) return;

    // Tekst
    el.textContent = 'NOWOŚĆ';

    // Ustaw pozycjonowanie rodzica
    const parent = el.parentElement;
    if (parent) {
      const cs = getComputedStyle(parent);
      if (cs.position === 'static') parent.style.position = 'relative';
    }

    // Styl plakietki z obrotem
    Object.assign(el.style, {
      position: 'absolute',
      top: Y,
      right: X,
      background: '#FFD400',
      color: '#000',
      fontWeight: '700',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '1',
      padding: '6px 20px',
      borderRadius: '4px',
      boxShadow: '0 2px 6px rgba(0,0,0,.15)',
      zIndex: '9999',
      pointerEvents: 'none',
      userSelect: 'none',
      textTransform: 'uppercase',
      letterSpacing: '.5px',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      transform: 'rotate(45deg)',   // rotacja
      transformOrigin: 'center'     // obrót wokół środka
    });
  }

  function inicjalizujWszystkie() {
    document.querySelectorAll('nowosc').forEach(stylizujNowosc);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicjalizujWszystkie);
  } else {
    inicjalizujWszystkie();
  }

  new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) {
          if (n.matches?.('nowosc')) stylizujNowosc(n);
          n.querySelectorAll?.('nowosc').forEach(stylizujNowosc);
        }
      });
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
</script>
