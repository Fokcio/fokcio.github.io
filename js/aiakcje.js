// ==========================================================
// js/aiakcje.js - SILNIK MOCY AI
// Daje asystentowi AI PEŁNĄ kontrolę nad stroną: może uruchamiać dowolny
// JavaScript, dopisywać CSS, zmieniać HTML, teksty, style, klasy, atrybuty,
// tworzyć i usuwać elementy, klikać (kradzionym kursorem), otwierać okna
// WinBox, nawigować, czytać pliki projektu, a zmiany zapisywać na stałe
// w przeglądarce (localStorage) i eksportować jako patch do repozytorium.
//
// Ten plik nic nie robi sam z siebie - tylko czeka na akcje od AI.
// ==========================================================
(function (global) {
  'use strict';

  const KLUCZ_STORAGE = 'fokcio.ai.moc.v1';
  const MAX_ZYCIE = 900;   // ile znaków wyniku wraca do modelu AI
  const MAX_PLIK = 12000;  // ile znaków pliku wraca do modelu AI

  // Stany strony (!save / !load / !list) oraz dziennik zmian AI
  const KLUCZ_STANY = 'fokcio.ai.stany.v1';
  const KLUCZ_DZIENNIK = 'fokcio.ai.dziennik.v1';
  const MAX_STANOW = 12;            // ile stanow trzymamy w przegladarce
  const MAX_STAN_ZNAKOW = 120000;   // twardy limit jednego stanu (zeby nie bylo GB)
  const MAX_DZIENNIK = 80;          // ile ostatnich zmian pamietamy
  const MAX_DZIENNIK_ZNAKOW = 40000;

  // Co AI może zapisać na stałe (przetrwa odświeżenie strony)
  const TRWALE = []; // AI nie zapisuje nic na stale - tylko uzytkownik przez komende !save

  // ===== Mapa projektu - AI wie, co może przeprogramować =====
  const PLIKI = [
    { sciezka: '/index.html', opis: 'strona główna: hero + bio + lista projektów + czat AI + PixelBlast' },
    { sciezka: '/css/style.css', opis: 'wszystkie style strony (także ukryte paski przewijania)' },
    { sciezka: '/js/script.js', opis: 'napisy hero, easter eggi (kotel, meow), animacja tytułu, deszcz kotów, tryb paint' },
    { sciezka: '/js/projekty.js', opis: 'przejścia ekranami: strona główna <-> projekty, obsługa koła/klawiszy/dotyku' },
    { sciezka: '/js/indexaiassistant.js', opis: 'ten czat AI (prompt, wywolanie lokalnego AI, akcje)' },
    { sciezka: '/js/aiakcje.js', opis: 'silnik mocy AI - wykonuje akcje z tego czatu' },
    { sciezka: '/js/nowosc.js', opis: 'żółta plakietka NOWOŚĆ na projektach' },
    { sciezka: '/js/winbox.bundle.js', opis: 'biblioteka okien WinBox' },
    { sciezka: '/js/videoscript.js', opis: 'lista filmików w oknie Filmiki' },
    { sciezka: '/js/videodata.js', opis: 'dane filmików' },
    { sciezka: '/video.html', opis: 'podstrona z filmikami (otwierana w WinBox)' },
    { sciezka: '/texts/marchewka.html', opis: 'podstrona Marchewka' },
    { sciezka: '/flagdle.html', opis: 'gra Flagdle' },
    { sciezka: '/sad.html', opis: 'podstrona sad' },
    { sciezka: '/secret.html', opis: 'ukryta podstrona' },
    { sciezka: '/404.html', opis: 'strona błędu 404' },
    { sciezka: '/projects/PilkaNaRownowazni.html', opis: 'projekt: Piłka na równoważni' },
    { sciezka: '/projects/Potatogame.html', opis: 'projekt: Potato Game' },
    { sciezka: '/projects/catus.html', opis: 'projekt: Catus' },
    { sciezka: '/projects/cawagla.html', opis: 'projekt: Cawagla' },
    { sciezka: '/projects/emojimage.html', opis: 'projekt: Emojimage' },
    { sciezka: '/projects/infinityimage.html', opis: 'projekt: InfinityImage' },
    { sciezka: '/lang/pl.json', opis: 'tłumaczenia' },
    { sciezka: '/particles.json', opis: 'konfiguracja particles.js' }
  ];

  // ===== MAŁE POMOCNIKI =====

  function opisWartosci(v, limit) {
    const max = limit || MAX_ZYCIE;
    try {
      if (v === undefined) return 'undefined';
      if (v === null) return 'null';
      const t = typeof v;
      if (t === 'string') return v.length > max ? v.slice(0, max) + ' [...obcieto ' + (v.length - max) + ' znakow]' : v;
      if (t === 'number' || t === 'boolean') return String(v);
      if (t === 'function') return '[funkcja ' + (v.name || 'anonimowa') + ']';
      if (v && v.nodeType === 1) return '<' + String(v.tagName).toLowerCase() + (v.id ? '#' + v.id : '') + '>';
      if (v && v.nodeType === 9) return '[document]';
      if (v && v.nodeType === 11) return '[fragment]';
      if (v && t === 'object' && typeof v.item === 'function' && typeof v.length === 'number') return '[lista ' + v.length + ' elementow]';

      let s;
      try { s = JSON.stringify(v); } catch (e) { s = String(v); }
      if (typeof s !== 'string') s = String(v);
      return s.length > max ? s.slice(0, max) + ' [...obcieto]' : s;
    } catch (e) {
      return '[nie da sie opisac: ' + e.message + ']';
    }
  }

  function celeyKursora() {
    // CELE_KURSORA pochodzi z indexaiassistant.js - to const z innego pliku,
    // więc silnik czyta je z window (indexaiassistant.js je tam wystawia)
    try {
      if (global.CELE_KURSORA) return global.CELE_KURSORA;
    } catch (e) { /* brak definicji */ }
    return {};
  }

  function aliasyCelow() {
    try {
      if (global.ALIASY_CELOW) return global.ALIASY_CELOW;
    } catch (e) { /* brak definicji */ }
    return {};
  }

  // Wszystkie elementy, w które AI może klikać po nazwie (cele + aliasy)
  function podpowiedziCelow() {
    const mapa = celeyKursora();
    const aliasy = aliasyCelow();
    const wynik = [];
    Object.keys(mapa).forEach((n) => wynik.push(n + ' -> ' + mapa[n]));
    Object.keys(aliasy).forEach((n) => {
      const cel = aliasy[n];
      if (mapa[cel]) wynik.push(n + ' -> ' + mapa[cel] + ' (alias)');
    });
    return wynik;
  }

  // Zamienia "selektor" (CSS) albo "cel" (nazwa po ludzku, np. "filmiki") na selektor CSS
  function podajSelektor(a) {
    if (a && a.selektor) return String(a.selektor);
    if (!a || !a.cel) return null;
    const cel = String(a.cel).toLowerCase().replace(/\s+/g, '');
    const mapa = celeyKursora();
    const aliasy = aliasyCelow();
    if (mapa[cel]) return mapa[cel];
    if (aliasy[cel] && mapa[aliasy[cel]]) return mapa[aliasy[cel]];
    return null;
  }

  function element(a) {
    const sel = podajSelektor(a);
    if (!sel) throw new Error('brak celu - podaj "selektor" (CSS) albo "cel" (np. filmiki)');
    const el = document.querySelector(sel);
    if (!el) throw new Error('nie znalazlem elementu: ' + sel);
    return el;
  }

  // Działa na jednym elemencie albo na wszystkich pasujących ("wszystkie": true)
  function dlaElementow(a, fn) {
    const sel = podajSelektor(a);
    if (!sel) throw new Error('brak celu - podaj "selektor" (CSS) albo "cel" (np. filmiki)');
    const lista = (a.wszystkie === true) ? Array.from(document.querySelectorAll(sel)) : [document.querySelector(sel)];
    if (!lista.length || !lista[0]) throw new Error('nie znalazlem elementu: ' + sel);
    lista.forEach((el, i) => fn(el, i));
    return { selektor: sel, zmienionych: lista.length };
  }

  function wstawStyl(id, kod) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('style');
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = kod;
    return el;
  }

  function tekstWycinek(s, max) {
    const limit = max || MAX_ZYCIE;
    if (typeof s !== 'string') s = opisWartosci(s, limit);
    return s.length > limit ? s.slice(0, limit) + ' [...obcieto]' : s;
  }

  function sypialnia(ms) {
    return new Promise((r) => setTimeout(r, Math.max(0, Math.min(60000, Number(ms) || 0))));
  }

  // ==========================================================
  // AKCJE - każda zwraca obiekt z wynikiem, który AI dostaje z powrotem
  // ==========================================================
  const AKCJE = {

    // Dowolny kod JavaScript (może używać await, zmiennych globalnych strony, DOM)
    js: async (a) => {
      const kod = String(a.kod || a.code || '');
      if (!kod.trim()) throw new Error('brak kodu');
      const fn = new Function('"use strict"; return (async () => {\n' + kod + '\n})()');
      const wynik = await fn();
      return { wynik: opisWartosci(wynik) };
    },

    // Dopisuje / nadpisuje blok CSS (id pozwala nadpisywać ten sam blok)
    css: (a) => {
      const kod = String(a.kod || a.css || '');
      if (!kod.trim()) throw new Error('brak kodu CSS');
      const id = String(a.id || 'ai-css');
      wstawStyl(id, kod);
      return { id, znakow: kod.length };
    },

    // Zmiana HTML elementu: tryb "zamien" (domyślnie), "dopisz", "na-poczatek"
    html: (a) => {
      const tresc = String(a.html !== undefined ? a.html : (a.tresc || ''));
      const tryb = String(a.tryb || 'zamien');
      const info = dlaElementow(a, (el) => {
        if (tryb === 'dopisz') el.insertAdjacentHTML('beforeend', tresc);
        else if (tryb === 'na-poczatek') el.insertAdjacentHTML('afterbegin', tresc);
        else el.innerHTML = tresc;
      });
      return Object.assign(info, { tryb, znakow: tresc.length });
    },

    // Zmiana samego tekstu (bez psucia HTML-a)
    tekst: (a) => {
      const tresc = String(a.tekst !== undefined ? a.tekst : (a.tresc || ''));
      const info = dlaElementow(a, (el) => { el.textContent = tresc; });
      return Object.assign(info, { tekst: tekstWycinek(tresc, 120) });
    },

    // Style prosto na elemencie, np. {"color": "red"} - "wazne": true dodaje !important
    styl: (a) => {
      const styl = a.styl || a.style || {};
      const wazne = a.wazne === true ? 'important' : '';
      const ile = dlaElementow(a, (el) => {
        Object.keys(styl).forEach((k) => {
          const v = styl[k];
          if (v === null || v === '') el.style.removeProperty(k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()));
          else el.style.setProperty(k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()), String(v), wazne);
        });
      });
      return Object.assign(ile, { ustawiono: Object.keys(styl).length });
    },

    // Klasy CSS: tryb "dodaj" (domyślnie), "usun", "przelacz"
    klasa: (a) => {
      const klasy = [].concat(a.klasy || a.klasa || []).filter(Boolean).map(String);
      const tryb = String(a.tryb || 'dodaj');
      const ile = dlaElementow(a, (el) => {
        klasy.forEach((k) => {
          if (tryb === 'usun') el.classList.remove(k);
          else if (tryb === 'przelacz') el.classList.toggle(k);
          else el.classList.add(k);
        });
      });
      return Object.assign(ile, { klasy, tryb });
    },

    // Atrybuty: wartosc: null (albo "usun": true) usuwa atrybut
    atrybut: (a) => {
      const nazwa = String(a.nazwa || a.attribute || '');
      if (!nazwa) throw new Error('brak nazwy atrybutu');
      const usun = a.usun === true || a.wartosc === null;
      const wartosc = a.wartosc === undefined ? '' : String(a.wartosc);
      const ile = dlaElementow(a, (el) => {
        if (usun) el.removeAttribute(nazwa);
        else el.setAttribute(nazwa, wartosc);
      });
      return Object.assign(ile, { nazwa, wartosc: usun ? '(usuniety)' : tekstWycinek(wartosc, 80) });
    },

    // Tworzy nowy element: znacznik, html, id, klasy, styl, atrybuty
    nowyElement: (a) => {
      const znacznik = String(a.znacznik || a.tag || 'div');
      const el = document.createElement(znacznik);
      el.setAttribute('data-ai-el', '1');   // znacznik: element od AI (latwo posprzatac przy !load)
      if (a.html !== undefined || a.tresc !== undefined) el.innerHTML = String(a.html !== undefined ? a.html : a.tresc);
      if (a.id) el.id = String(a.id);
      if (a.klasa || a.klasy) [].concat(a.klasa || a.klasy).filter(Boolean).forEach((k) => el.classList.add(String(k)));
      if (a.styl) Object.keys(a.styl).forEach((k) => el.style.setProperty(k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()), String(a.styl[k])));
      if (a.atrybuty) Object.keys(a.atrybuty).forEach((k) => el.setAttribute(k, String(a.atrybuty[k])));

      const pozycja = String(a.pozycja || 'koniec');
      const rodzic = a.selektor || a.cel ? element(a) : document.body;

      if (pozycja === 'przed') rodzic.insertAdjacentElement('beforebegin', el);
      else if (pozycja === 'po') rodzic.insertAdjacentElement('afterbegin', el);
      else if (pozycja === 'na-poczatek') rodzic.prepend(el);
      else rodzic.appendChild(el);

      return { utworzono: '<' + znacznik + (el.id ? '#' + el.id : '') + '>', w: '<' + (rodzic.tagName || 'body').toLowerCase() + (rodzic.id ? '#' + rodzic.id : '') + '>' };
    },

    // Usuwa element (albo wszystkie pasujące przy "wszystkie": true)
    usun: (a) => {
      const sel = podajSelektor(a);
      if (!sel) throw new Error('brak celu - podaj "selektor"');
      const lista = (a.wszystkie === true) ? Array.from(document.querySelectorAll(sel)) : [document.querySelector(sel)];
      if (!lista.length || !lista[0]) throw new Error('nie znalazlem elementu: ' + sel);
      // Zanim usuniemy - zapamietujemy, co to bylo, zeby !load mogl to przywrocic
      try {
        a.__wroc = lista.slice(0, 5).map(function (el) {
          const rodzic = el.parentElement;
          return {
            rodzic: sciezkaElementu(rodzic),
            indeks: (rodzic && rodzic.children) ? Array.prototype.indexOf.call(rodzic.children, el) : -1,
            html: tekstWycinek(el.outerHTML || '', 3000)
          };
        }).filter(function (x) { return x.html; });
      } catch (e) { a.__wroc = []; }
      lista.forEach((el) => el.remove());
      return { selektor: sel, usunieto: lista.length };
    },

    // Klika w element - domyślnie kradzionym kursorem AI (animacja + klik)
    klik: (a) => {
      const sel = podajSelektor(a);
      if (!sel) throw new Error('brak celu - podaj "selektor" albo "cel"');
      const el = document.querySelector(sel);
      if (!el) throw new Error('nie znalazlem elementu: ' + sel);

      const kursor = a.kursor !== false;
  // UWAGA: nie czytamy tu gołej nazwy przejmijKursor (ReferenceError w module silnikowym),
  // kursor AI mieszka w indexaiassistant.js i wołamy go wyłącznie przez okno.
  function kliknijKursoremAi(sel, a) {
    try {
      const starsze = starszeAkcje();
      if (starsze && typeof starsze.przejmij_kursor === 'function') {
        starsze.przejmij_kursor({ cel: sel });
        return true;
      }
      const fn = window.przejmijKursor || global.przejmijKursor;
      if (typeof fn === 'function' && fn(sel)) return true;
    } catch (e) { /* jeżeli kursor nie zadziała, klikamy normalnie */ }
    return false;
  }
      el.click();
      return { kliknieto: sel, sposob: 'klik' };
    },

    // Otwiera okno WinBox z adresem albo z HTML-em
    winbox: (a) => {
      if (typeof global.WinBox !== 'function') throw new Error('brak biblioteki WinBox');
      const cfg = { title: String(a.tytul || a.title || 'AI') };
      if (a.szerokosc) cfg.width = a.szerokosc;
      if (a.wysokosc) cfg.height = a.wysokosc;
      if (a.x !== undefined) cfg.x = a.x;
      if (a.y !== undefined) cfg.y = a.y;
      if (a.tlo) cfg.background = a.tlo;
      if (a.klasa) cfg.class = a.klasa;
      if (a.url) cfg.url = String(a.url);
      else cfg.html = String(a.html !== undefined ? a.html : (a.tekst ? '<pre style="padding:12px;color:#fff;white-space:pre-wrap">' + String(a.tekst) + '</pre>' : '<div style="padding:12px;color:#fff">Puste okno AI</div>'));
      const okno = new global.WinBox(cfg);
      return { okno: cfg.title, url: cfg.url || '(html)' };
    },

    // Przejście na inny adres (podstrona albo projekt)
    nawigacja: (a) => {
      const url = String(a.url || '');
      if (!url) throw new Error('brak adresu url');
      if (a.nowaKarta === true) global.open(url, '_blank');
      else global.location.href = url;
      return { przejscie: url, nowaKarta: a.nowaKarta === true };
    },

    // Tytuł karty przeglądarki (zatrzymuje animowany tytuł z script.js, żeby się trzymał)
    tytul: (a) => {
      const tresc = String(a.tekst || a.tresc || '');
      global.__fokcioTytulStop = true; // script.js przestaje nadpisywać tytuł
      try { clearInterval(titleInterval); } catch (e) { /* animacja tytułu działa dalej - flaga ją zatrzyma */ }
      document.title = tresc;
      return { tytul: tresc };
    },

    // Ikona strony (favicon)
    favicon: (a) => {
      const url = String(a.url || '');
      if (!url) throw new Error('brak adresu url');
      const stara = document.querySelector('link[rel="icon"]');
      const el = stara || document.createElement('link');
      el.rel = 'icon';
      el.href = url;
      if (!stara) document.head.appendChild(el);
      return { favicon: url };
    },

    // Motyw: tło, kolor tekstu, akcent, czcionka
    motyw: (a) => {
      const tlo = a.tlo, tekst = a.tekst, akcent = a.akcent, czcionka = a.czcionka;
      const reguly = [];
      if (tlo) reguly.push('html, body, .glowna, .projekty, #chatWindow, .wb-body { background: ' + tlo + ' !important; }');
      if (tekst) reguly.push('#napis, .bio-container h1, h2, h3, p, span, li, label, .projekt-opis { color: ' + tekst + ' !important; }');
      if (akcent) reguly.push('button, .custom-btn, #sendBtn, #chatToggle, #chatHeader, .projekt-link, .bio-links a { background: ' + akcent + ' !important; border-color: ' + akcent + ' !important; }');
      if (czcionka) reguly.push('body, body * { font-family: ' + czcionka + ' !important; }');
      if (!reguly.length) throw new Error('podaj co najmniej jedno: tlo, tekst, akcent, czcionka');
      wstawStyl('ai-motyw', reguly.join('\n'));
      return { tlo: tlo || '(bez zmian)', tekst: tekst || '(bez zmian)', akcent: akcent || '(bez zmian)', czcionka: czcionka || '(bez zmian)' };
    },

    // Odczyt elementu: HTML, tekst, atrybuty, style, pozycja, rozmiar
    // "co": ["html","tekst","atrybuty","styl","computed","ramka","sciezka"] (domyślnie wszystko)
    pokaz: (a) => {
      const sel = podajSelektor(a);
      const co = a.co ? [].concat(a.co).map(String) : null;
      const chce = (n) => !co || co.indexOf(n) !== -1;
      const limit = Number(a.limit) || 1500;

      const wlasciwosci = (el) => {
        const wyj = {};
        if (chce('tekst')) wyj.tekst = tekstWycinek((el.textContent || '').trim(), limit);
        if (chce('html')) wyj.html = tekstWycinek(el.innerHTML, limit);
        if (chce('atrybuty')) {
          wyj.atrybuty = {};
          Array.from(el.attributes).forEach((at) => { wyj.atrybuty[at.name] = tekstWycinek(at.value, 200); });
        }
        if (chce('styl')) wyj.styl = el.getAttribute('style') || '(brak inline)';
        if (chce('computed')) {
          const cs = getComputedStyle(el);
          wyj.computed = {
            display: cs.display, position: cs.position, width: cs.width, height: cs.height,
            color: cs.color, background: cs.backgroundColor, fontSize: cs.fontSize,
            fontFamily: cs.fontFamily, zIndex: cs.zIndex, opacity: cs.opacity,
            overflow: cs.overflow, margin: cs.margin, padding: cs.padding
          };
        }
        if (chce('ramka')) {
          const r = el.getBoundingClientRect();
          wyj.ramka = { x: Math.round(r.left), y: Math.round(r.top), szerokosc: Math.round(r.width), wysokosc: Math.round(r.height) };
        }
        if (chce('sciezka')) {
          const czesci = [];
          let n = el;
          while (n && n.nodeType === 1 && czesci.length < 8) {
            czesci.unshift(n.tagName.toLowerCase() + (n.id ? '#' + n.id : ''));
            n = n.parentElement;
          }
          wyj.sciezka = czesci.join(' > ');
        }
        return wyj;
      };

      // Bez celu: mapa najważniejszych elementów strony
      if (!sel) {
        const wazne = [];
        document.querySelectorAll('[id], button, a[href], h1, h2, h3, .projekt').forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) return;
          const cs = getComputedStyle(el);
          wazne.push({
            element: el.tagName.toLowerCase() + (el.id ? '#' + el.id : ''),
            tekst: tekstWycinek((el.textContent || '').trim().replace(/\s+/g, ' '), 60),
            widoczny: cs.display !== 'none' && cs.visibility !== 'hidden'
          });
        });
        return { elementowNaStronie: wazne.length, elementy: wazne.slice(0, 80) };
      }

      if (a.wszystkie === true) {
        const lista = Array.from(document.querySelectorAll(sel));
        if (!lista.length) throw new Error('nie znalazlem elementu: ' + sel);
        return { selektor: sel, ile: lista.length, elementy: lista.slice(0, 20).map(wlasciwosci) };
      }

      return { selektor: sel, element: wlasciwosci(element(a)) };
    },

    // Drzewo DOM (żeby AI "widziało" całą stronę przed zmianami)
    struktura: (a) => {
      const od = a.selektor ? element(a) : document.body;
      const maxGlebokosc = Number(a.glebokosc) || 6;
      const maxDzieci = Number(a.dzieci) || 40;

      const opis = (el, poziom) => {
        if (poziom > maxGlebokosc) return null;
        const wezel = {
          tag: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/).join('.') : '')
        };
        if (!el.children.length) wezel.tekst = tekstWycinek((el.textContent || '').trim().replace(/\s+/g, ' '), 60);
        const dzieci = Array.from(el.children).slice(0, maxDzieci).map((d) => opis(d, poziom + 1)).filter(Boolean);
        if (dzieci.length) wezel.dzieci = dzieci;
        return wezel;
      };

      return { korzen: od.tagName.toLowerCase() + (od.id ? '#' + od.id : ''), drzewo: opis(od, 0) };
    },

    // Szuka elementów po tekście, id, klasie albo znaczniku
    znajdz: (a) => {
      const fraza = String(a.tekst || a.fraza || a.q || '').toLowerCase();
      const znacznik = a.znacznik ? String(a.znacznik).toLowerCase() : null;
      const znalezione = [];

      document.querySelectorAll(znacznik || '*').forEach((el) => {
        if (getComputedStyle(el).display === 'none') return;
        const moj = (el.textContent || '').toLowerCase();
        const id = (el.id || '').toLowerCase();
        const cls = (typeof el.className === 'string' ? el.className : '').toLowerCase();
        if (!fraza || moj.indexOf(fraza) !== -1 || id.indexOf(fraza) !== -1 || cls.indexOf(fraza) !== -1) {
          znalezione.push({
            element: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (cls ? '.' + cls.trim().split(/\s+/)[0] : ''),
            tekst: tekstWycinek((el.textContent || '').trim().replace(/\s+/g, ' '), 70)
          });
        }
      });

      return { fraza, ile: znalezione.length, wyniki: znalezione.slice(0, 40) };
    },

    // Lista plików projektu, które AI może przeczytać i na ich podstawie zmienić stronę
    listaPlikow: () => ({ pliki: PLIKI.map((p) => p.sciezka + ' - ' + p.opis) }),

    // Odczyt prawdziwego pliku projektu, np. {"akcja":"plik","sciezka":"/css/style.css"}
    plik: async (a) => {
      const sciezka = String(a.sciezka || a.path || '');
      if (!sciezka) throw new Error('podaj "sciezka", np. /css/style.css (lista: akcja listaPlikow)');
      const odp = await fetch(sciezka, { cache: 'no-store' });
      if (!odp.ok) throw new Error('nie moge wczytac ' + sciezka + ' (HTTP ' + odp.status + ')');
      const tresc = await odp.text();
      const od = Number(a.od) || 0;
      return { sciezka, znakow: tresc.length, tresc: tekstWycinek(od > 0 ? tresc.slice(od) : tresc, Number(a.limit) || MAX_PLIK) };
    },

    // Przewijanie: do elementu, na pozycję, na górę/dół, ekran wyżej/niżej
    przewin: (a) => {
      const plynnie = a.plynnie !== false;
      const zachowanie = plynnie ? 'smooth' : 'auto';

      if (a.do || a.selektor || a.cel) {
        const el = element(a);
        el.scrollIntoView({ behavior: zachowanie, block: String(a.wyr) || 'center' });
        return { przewinietoDo: a.do || a.selektor || a.cel };
      }
      if (a.px !== undefined) {
        global.scrollTo({ top: Number(a.px), behavior: zachowanie });
        return { pozycja: Number(a.px) };
      }
      const gdzie = String(a.gdzie || 'gore');
      const h = global.innerHeight || 800;
      if (gdzie === 'gore') global.scrollTo({ top: 0, behavior: zachowanie });
      else if (gdzie === 'dol') global.scrollTo({ top: document.body.scrollHeight, behavior: zachowanie });
      else if (gdzie === 'nizej') global.scrollBy({ top: h * 0.9, behavior: zachowanie });
      else if (gdzie === 'wyzej') global.scrollBy({ top: -h * 0.9, behavior: zachowanie });
      else throw new Error('gdzie: gore | dol | wyzej | nizej (albo podaj "px" lub "do")');
      return { przewinieto: gdzie };
    },

    // Czeka podaną liczbę milisekund (np. żeby poczekać na animację)
    poczekaj: async (a) => {
      const ms = Math.max(0, Math.min(60000, Number(a.ms) || 1000));
      await sypialnia(ms);
      return { czekano: ms + ' ms' };
    },

    // Powiadomienie (dymek) na stronie - AI może komunikować się z użytkownikiem
    powiadom: (a) => {
      const tresc = String(a.tekst || a.tresc || '');
      if (!tresc) throw new Error('podaj "tekst" powiadomienia');
      const czas = Math.max(1000, Math.min(30000, Number(a.ms) || 4000));

      const box = document.createElement('div');
      box.className = 'ai-toast';
      box.textContent = tresc;
      box.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);' +
        'background:' + (a.tlo || 'linear-gradient(90deg,#6f00ff,#0050ff)') + ';color:' + (a.kolor || '#fff') + ';' +
        'padding:12px 18px;border-radius:10px;font-size:15px;z-index:2147483000;' +
        'box-shadow:0 8px 30px rgba(0,0,0,.5);max-width:min(90vw,520px);text-align:center;' +
        'transition:opacity .3s ease;opacity:0;font-family:inherit';
      document.body.appendChild(box);
      requestAnimationFrame(() => { box.style.opacity = '1'; });
      setTimeout(() => {
        box.style.opacity = '0';
        setTimeout(() => box.remove(), 320);
      }, czas);

      return { powiadomienie: tekstWycinek(tresc, 120), przez: czas + ' ms' };
    },

    // Okna WinBox: lista, zamknięcie wszystkich, otwarcie (patrz akcja "winbox")
    okna: (a) => {
      const tryb = String(a.tryb || 'lista');
      const okna = Array.from(document.querySelectorAll('.winbox'));
      if (tryb === 'zamknij') {
        let zamkniete = 0;
        okna.forEach((o) => {
          const zamknij = o.querySelector('.wb-close');
          if (zamknij) { zamknij.click(); zamkniete++; }
        });
        return { zamknieto: zamkniete };
      }
      return {
        ile: okna.length,
        okna: okna.map((o) => {
          const r = o.getBoundingClientRect();
          const tytul = o.querySelector('.wb-title');
          return {
            tytul: tytul ? tekstWycinek(tytul.textContent.trim(), 60) : '(bez tytulu)',
            x: Math.round(r.left), y: Math.round(r.top), szerokosc: Math.round(r.width), wysokosc: Math.round(r.height)
          };
        })
      };
    },

    // Tryb pełnoekranowy
    pelnyEkran: async (a) => {
      const wlacz = a.wylacz === true ? false : (a.wlacz !== false);
      if (wlacz) {
        if (!document.documentElement.requestFullscreen) throw new Error('przegladarka nie wspiera pelnego ekranu');
        await document.documentElement.requestFullscreen();
        return { pelnyEkran: 'wlaczony' };
      }
      if (document.exitFullscreen) await document.exitFullscreen();
      return { pelnyEkran: 'wylaczony' };
    },

    // Wykonuje listę akcji po kolei, np. {"akcja":"sekwencja","akcje":[{...},{...}]}
    sekwencja: async (a) => {
      const lista = [].concat(a.akcje || a.lista || []).filter(Boolean);
      if (!lista.length) throw new Error('podaj "akcje": [ ... ]');
      const wyniki = [];
      for (let i = 0; i < lista.length; i++) {
        wyniki.push(await wykonaj(lista[i]));
      }
      return { wykonane: lista.length, wyniki };
    },

    // Zapisuje zmiany na stałe w przeglądarce (przetrwają odświeżenie i wrócą same)
    zapisz: (a) => {
      throw new Error('Zapisywanie na stałe jest dozwolone wyłącznie dla użytkownika komendą !save <nazwa>');
      const lista = [].concat(a.akcje || (a.akcja ? [a.akcja] : []));
      if (!lista.length) throw new Error('podaj "akcje": [ ... ] (to, co ma wrocic po odswiezeniu)');
      const zapisane = czytajZapisane();
      const paczka = {
        id: String(a.id || ('paczka-' + Date.now().toString(36))),
        nazwa: String(a.nazwa || 'zmiany AI'),
        czas: new Date().toISOString(),
        akcje: lista
      };
      const stary = zapisane.findIndex((p) => p.id === paczka.id);
      if (stary === -1) zapisane.push(paczka);
      else zapisane[stary] = paczka;
      piszZapisane(zapisane);
      return { zapisano: paczka.id, nazwa: paczka.nazwa, akcji: lista.length, wszystkiePaczki: zapisane.length };
    },

    // Lista zapisanych paczek zmian
    zapisane: () => {
      const zapisane = czytajZapisane();
      return {
        ile: zapisane.length,
        paczki: zapisane.map((p) => ({ id: p.id, nazwa: p.nazwa, akcji: p.akcje.length, czas: p.czas }))
      };
    },

    // Odtwarza zapisane zmiany (wszystkie albo jedna paczke po "id")
    przywroc: async (a) => {
      const zapisane = czytajZapisane();
      const wybrane = a.id ? zapisane.filter((p) => p.id === a.id) : zapisane;
      if (!wybrane.length) throw new Error(a.id ? 'nie ma paczki o id ' + a.id : 'nic nie jest zapisane');
      let wykonane = 0;
      for (const paczka of wybrane) {
        for (const akcja of paczka.akcje) {
          await wykonaj(akcja);
          wykonane++;
        }
      }
      return { odtworzonoPaczek: wybrane.length, akcji: wykonane };
    },

    // Usuwa zapisane zmiany (bez cofania tego, co juz jest na stronie)
    reset: (a) => {
      const zapisane = czytajZapisane();
      if (!zapisane.length) return { usunieto: 0, info: 'nic nie bylo zapisane' };
      if (a.id) {
        const zostaje = zapisane.filter((p) => p.id !== a.id);
        piszZapisane(zostaje);
        return { usunieto: zapisane.length - zostaje.length, zostalo: zostaje.length };
      }
      piszZapisane([]);
      return { usunieto: zapisane.length, zostalo: 0 };
    },

    // Eksportuje zapisane zmiany jako plik do wrzucenia w repozytorium (albo zwraca kod)
    eksport: (a) => {
      const zapisane = czytajZapisane();
      if (!zapisane.length) throw new Error('nie ma czego eksportowac - najpierw akcja "zapisz"');
      const kod = JSON.stringify({ wersja: 1, plik: 'ai-zmiany.json', paczki: zapisane }, null, 2);

      if (a.pobierz === true) {
        const blob = new Blob([kod], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = String(a.plik || 'ai-zmiany.json');
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 3000);
        return { pobrano: link.download, znakow: kod.length };
      }

      if (a.okno === true && typeof global.WinBox === 'function') {
        new global.WinBox({
          title: 'AI: eksport zmian',
          width: '620px',
          height: '460px',
          html: '<pre style="padding:12px;color:#fff;white-space:pre-wrap;font-size:12px">' + kod.replace(/[<>&]/g, (m) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[m])) + '</pre>'
        });
        return { pokazanoWOknie: true, znakow: kod.length };
      }

      return { kod: tekstWycinek(kod, 4000), znakow: kod.length };
    },

    // KOD STRONY NA ZYWO - dokladnie to, co przegladarka ma teraz (po zmianach AI)
    kodStrony: (a) => {
      const co = String(a.co || a.czego || 'css').toLowerCase();
      const out = {};
      if (co === 'css' || co === 'style' || co === 'wszystko' || co === 'all') {
        out.styleAi = zebierzStyleAi(Number(a.limit) || 4000);
        out.arkusze = zebierzArkusze(Number(a.limit) || 5000);
      }
      if (co === 'html' || co === 'wszystko' || co === 'all') {
        out.body = tekstWycinek(String(document.body.innerHTML).replace(/\s+/g, ' '), Number(a.limit) || 6000);
        out.head = tekstWycinek(String(document.head.innerHTML).replace(/\s+/g, ' '), 2000);
      }
      if (co === 'akcje' || co === 'historia' || co === 'wszystko' || co === 'all') {
        out.dziennik = czytajDziennik();
      }
      return out;
    },

    // Stan strony pod nazwa - AI go NIE zapisuje, robi to tylko uzytkownik komenda !save
    stanZapisz: function () {
      throw new Error('Zapis stanu jest możliwy wyłącznie dla użytkownika komendą !save <nazwa>');
    },

    // Wczytanie stanu strony (zostaje tez po odswiezeniu)
    stanWczytaj: (a) => stanWczytaj(a.nazwa || a.id || ''),

    // Lista zapisanych stanow strony
    stanLista: () => ({ stany: stanyLista(), limitStanow: MAX_STANOW }),

    // Usuwa zapisany stan strony
    stanUsun: (a) => stanUsun(a.nazwa || a.id || ''),

    // Czysci dziennik zmian (nie cofa tego, co juz jest na stronie)
    wyczyscDziennik: () => { piszDziennik([]); return { dziennik: 'wyczyszczony' }; },

    // Zwraca pełną listę możliwości AI (dla modelu i dla !help)
    mozliwosci: () => ({ akcje: MOZLIWOSCI(), cele: podpowiedziCelow(), pliki: PLIKI.map((p) => p.sciezka) })
  };

  // ==========================================================
  // TRWAŁOŚĆ: zapisywanie zmian w przeglądarce (localStorage)
  // ==========================================================
  function czytajZapisane() {
    try {
      const surowe = global.localStorage.getItem(KLUCZ_STORAGE);
      if (!surowe) return [];
      const dane = JSON.parse(surowe);
      if (Array.isArray(dane)) return dane;
      if (dane && Array.isArray(dane.paczki)) return dane.paczki;
      return [];
    } catch (e) {
      return [];
    }
  }

  function piszZapisane(lista) {
    try {
      global.localStorage.setItem(KLUCZ_STORAGE, JSON.stringify({ wersja: 1, paczki: lista }));
      return true;
    } catch (e) {
      return false;
    }
  }

  // ==========================================================
  // OPIS MOŻLIWOŚCI - jedno źródło prawdy dla promptu AI i komendy !help
  // ==========================================================
  const OPISY = [
    ['js', 'dowolny JavaScript: await, DOM, zmienne strony, fetch - pełna moc programowania', { kod: "document.body.style.filter='invert(1)'" }],
    ['css', 'dopisuje lub nadpisuje blok CSS (pole "id" pozwala nadpisać poprzedni)', { kod: '.hero{transform:scale(1.1)}' }],
    ['html', 'zmienia HTML elementu (tryb: zamien | dopisz | na-poczatek)', { selektor: '#bio', html: '<p>Nowy tekst</p>', tryb: 'dopisz' }],
    ['tekst', 'zmienia sam tekst elementu', { selektor: '.bio-description', tekst: 'Siema!' }],
    ['styl', 'style inline na elemencie; "wazne": true dodaje !important', { selektor: 'h2', styl: { color: 'red' }, wazne: true }],
    ['klasa', 'dodaje / usuwa / przełącza klasy CSS (tryb: dodaj | usun | przelacz)', { selektor: 'body', klasy: ['dark'], tryb: 'dodaj' }],
    ['atrybut', 'ustawia albo usuwa atrybut ("usun": true usuwa)', { selektor: 'img', nazwa: 'src', wartosc: '/images/profil.png' }],
    ['nowyElement', 'tworzy nowy element i wstawia go na stronie', { znacznik: 'div', html: 'Hej!', selektor: 'body', pozycja: 'koniec' }],
    ['usun', 'usuwa element ("wszystkie": true usuwa wszystkie pasujące)', { selektor: '.projekt' }],
    ['klik', 'klika w element - domyślnie kradzionym kursorem AI', { cel: 'filmiki' }],
    ['winbox', 'otwiera okno WinBox (adres url albo własny html)', { tytul: 'Moje okno', html: '<p>Treść</p>' }],
    ['nawigacja', 'przechodzi na inną stronę lub projekt', { url: '/projects/catus' }],
    ['tytul', 'zmienia tytuł karty przeglądarki', { tekst: 'Fokcio <3' }],
    ['favicon', 'zmienia ikonę strony', { url: '/images/profil.png' }],
    ['motyw', 'zmienia kolory i czcionkę całej strony', { tlo: '#111111', akcent: '#ff00ff', czcionka: 'Arial' }],
    ['pokaz', 'czyta stronę: html, tekst, atrybuty, styl, computed, ramka, sciezka', { selektor: '#hero' }],
    ['struktura', 'zwraca drzewo DOM, żeby AI widziało całą stronę', { glebokosc: 5 }],
    ['znajdz', 'szuka elementów po tekście, id, klasie albo znaczniku', { tekst: 'filmiki' }],
    ['listaPlikow', 'lista plików projektu, które AI może przeczytać', {}],
    ['plik', 'czyta prawdziwy plik projektu, np. CSS albo JS', { sciezka: '/css/style.css' }],
    ['przewin', 'przewija stronę: gore | dol | wyzej | nizej | px | do', { do: '#bio' }],
    ['poczekaj', 'czeka podaną liczbę milisekund (np. na animację)', { ms: 800 }],
    ['powiadom', 'pokazuje dymek z wiadomością na stronie', { tekst: 'Gotowe!' }],
    ['okna', 'lista okien WinBox albo zamknięcie wszystkich (tryb: lista | zamknij)', { tryb: 'zamknij' }],
    ['pelnyEkran', 'włącza lub wyłącza tryb pełnoekranowy', { wlacz: true }],
    ['sekwencja', 'wykonuje wiele akcji po kolei - tak robi się wieloetapowe zadania', { akcje: [{ akcja: 'css', kod: 'body{background:#000}' }, { akcja: 'powiadom', tekst: 'Zmienione!' }] }],
    ['zapisz', 'ZABLOKOWANE dla AI - zmiany na stałe zapisuje tylko użytkownik komendą !save <nazwa>', { nazwa: 'ciemny motyw', akcje: [{ akcja: 'css', kod: 'body{background:#000}' }] }],
    ['zapisane', 'lista zapisanych paczek zmian', {}],
    ['przywroc', 'odtwarza zapisane zmiany (wszystkie albo jedna po "id")', { id: 'paczka-1' }],
    ['reset', 'usuwa zapisane paczki (nie cofa zmian już widocznych na stronie)', {}],
    ['eksport', 'zwraca albo pobiera plik ai-zmiany.json do wrzucenia w repozytorium', { pobierz: true }],
    ['kodStrony', 'KOD STRONY NA ZYWO: co naprawde jest w przegladarce po Twoich zmianach (pole "co": css | html | akcje | wszystko)', { co: 'css' }],
    ['stanZapisz', 'ZABLOKOWANE dla AI - stan strony zapisuje tylko użytkownik komendą !save <nazwa>', { nazwa: 'noc' }],
    ['stanWczytaj', 'wczytuje zapisany stan strony po nazwie (zostaje tez po odswiezeniu)', { nazwa: 'noc' }],
    ['stanLista', 'lista zapisanych stanow strony z rozmiarem w KB', {}],
    ['stanUsun', 'usuwa zapisany stan strony', { nazwa: 'noc' }],
    ['mozliwosci', 'zwraca tę listę - co AI potrafi', {}]
  ];

  function MOZLIWOSCI() {
    const znane = OPISY.map(function (o) { return { akcja: o[0], opis: o[1], przyklad: o[2] }; });
    Object.keys(AKCJE).forEach(function (k) {
      if (!znane.some(function (z) { return z.akcja === k; })) {
        znane.push({ akcja: k, opis: 'akcja silnika', przyklad: null });
      }
    });
    return znane;
  }

  // Gotowy tekst pomocy - używany w komendzie !help i w promptcie asystenta
  function tekstPomocy() {
    const linie = [];
    linie.push('MOGĘ ZROBIĆ NA TEJ STRONIE WSZYSTKO - i robię to od razu, bez pytania o zgodę.');
    linie.push('');
    linie.push('AKCJE (jedna akcja = jeden JSON z polem "akcja"; kilka naraz pakuj w "sekwencja"):');
    MOZLIWOSCI().forEach(function (m) {
      linie.push('• ' + m.akcja + ' — ' + m.opis);
      if (m.przyklad && Object.keys(m.przyklad).length) linie.push('   np. ' + JSON.stringify(m.przyklad));
    });
    linie.push('');
    linie.push('KLIKANIE PO NAZWIE (pole "cel"): ' + podpowiedziCelow().join(' | '));
    linie.push('');
    linie.push('PLIKI PROJEKTU - mogę je przeczytać i na ich podstawie zmienić stronę (akcja "plik", pole "sciezka"):');
    PLIKI.forEach(function (p) { linie.push('• ' + p.sciezka + ' — ' + p.opis); });
    linie.push('');
    linie.push('KOD NA ZYWO: akcja "kodStrony" (co: css | html | akcje | wszystko) pokazuje kod TAKI, JAKI JEST TERAZ na stronie - razem z Twoimi zmianami.');
    linie.push('');
    linie.push('GENEROWANIE KODU STRONY: Aby AI zmienilo/wygenerowalo kod strony, uzyj !gen <tekst> (np. !gen zrob tlo ciemne, !gen dodaj kropki). Zwykly czat tylko rozmawia i nie modyfikuje strony.');
    linie.push('SILNIK AI (gdy czat nie odpowiada): !ai pokazuje tryb lokalnego AI, !cpu wymusza tryb na procesorze (ratunek na blad "OrtRun"/"GPUBuffer"), !gpu wymusza WebGPU, !tryb auto wraca do automatu.');
    linie.push('STANY STRONY (w przegladarce): !save <nazwa> zapisuje stan, !load <nazwa> go wczytuje, !list pokazuje liste, !rm <nazwa> usuwa. Zapisy sa krotkie: ' + MAX_STANOW + ' stanow, ' + Math.round(MAX_STAN_ZNAKOW / 1024) + ' KB na stan.');
    linie.push('');
    linie.push('NA STAŁE: zmiany na stałe zapisuje TYLKO użytkownik komendą !save <nazwa> (wracają po odświeżeniu). AI nie zapisuje nic na stałe; "eksport" daje plik ai-zmiany.json do wrzucenia w repozytorium, "reset" czyści zapisane paczki.');
    return linie.join('\n');
  }

  // ==========================================================
  // WYKONYWANIE AKCJI - jedno miejsce, przez które przechodzi każda akcja AI
  // ==========================================================

  // ==========================================================
  // ALIASY NAZW AKCJI - model może napisać inaczej, a my i tak trafimy
  // ==========================================================
  const ALIASY_AKCJI = {
    // ── JavaScript ──
    javascript: 'js', kod: 'js', kodu: 'js', eval: 'js', skrypt: 'js', script: 'js', wykonaj: 'js',

    // ── CSS / HTML / tekst ──
    style: 'css', styles: 'css', dodajcss: 'css', 'dodaj-css': 'css',
    innerhtml: 'html', 'inner-html': 'html', tresc: 'html',
    text: 'tekst', 'zmien-tekst': 'tekst',
    'zmien-styl': 'styl', inline: 'styl', styleinline: 'styl',
    klasy: 'klasa', class: 'klasa', addclass: 'klasa', 'add-class': 'klasa',
    attr: 'atrybut', attributes: 'atrybut', atrybuty: 'atrybut', 'ustaw-atrybut': 'atrybut',

    // ── elementy ──
    createelement: 'nowyElement', 'create-element': 'nowyElement', nowyelement: 'nowyElement',
    'nowy-element': 'nowyElement', element: 'nowyElement', dodaj: 'nowyElement',
    dodajelement: 'nowyElement', 'dodaj-element': 'nowyElement',
    delete: 'usun', remove: 'usun', usunelement: 'usun', 'usun-element': 'usun',
    click: 'klik', nacisnij: 'klik',
    window: 'winbox', okno: 'winbox',

    // ── nawigacja i wygląd ──
    goto: 'nawigacja', idz: 'nawigacja', przejdz: 'nawigacja', navigate: 'nawigacja',
    title: 'tytul', 'zmien-tytul': 'tytul',
    icon: 'favicon', ikona: 'favicon',
    theme: 'motyw',

    // ── czytanie strony ──
    read: 'pokaz', odczyt: 'pokaz', get: 'pokaz', czytaj: 'pokaz', pobierz: 'pokaz',
    dom: 'struktura', tree: 'struktura', drzewo: 'struktura',
    find: 'znajdz', search: 'znajdz', szukaj: 'znajdz',
    files: 'listaPlikow', listapilikow: 'listaPlikow', 'lista-plikow': 'listaPlikow', pliki: 'listaPlikow',
    file: 'plik', readfile: 'plik', 'czytaj-plik': 'plik',

    // ── kod strony na zywo (to, co AI naprawde zmienilo) ──
    kodstrony: 'kodStrony', 'kod-strony': 'kodStrony', 'kod-na-zywo': 'kodStrony', kodnazywo: 'kodStrony',
    zrodlo: 'kodStrony', 'zrodlo-strony': 'kodStrony', viewsource: 'kodStrony', 'view-source': 'kodStrony',
    podglad: 'kodStrony', nalywo: 'kodStrony', 'na-zywo': 'kodStrony',

    // ── stany strony: save / load / list / rm ──
    'save-stan': 'stanZapisz', zapiszstan: 'stanZapisz', 'zapisz-stan': 'stanZapisz', snapshot: 'stanZapisz',
    load: 'stanWczytaj', 'load-stan': 'stanWczytaj', wczytajstan: 'stanWczytaj', 'wczytaj-stan': 'stanWczytaj',
    stany: 'stanLista', 'lista-stanow': 'stanLista', list: 'stanLista', snapshoty: 'stanLista',
    'usun-stan': 'stanUsun', usunstan: 'stanUsun',

    // ── sterowanie i efekty ──
    scroll: 'przewin', 'przewin-do': 'przewin',
    wait: 'poczekaj', sleep: 'poczekaj', delay: 'poczekaj',
    toast: 'powiadom', notification: 'powiadom', powiadomienie: 'powiadom', dymek: 'powiadom',
    windows: 'okna',
    fullscreen: 'pelnyEkran', pelnyekran: 'pelnyEkran', 'pelny-ekran': 'pelnyEkran',
    sequence: 'sekwencja', 'lista-akcji': 'sekwencja', wiele: 'sekwencja',

    // ── zapisywanie zmian ──
    save: 'zapisz', 'zapisz-na-stale': 'zapisz',
    saved: 'zapisane',
    restore: 'przywroc', 'przywroc-zapisane': 'przywroc',
    'reset-zmian': 'reset', wyczysc: 'reset',
    export: 'eksport', patch: 'eksport', 'pobierz-zmiany': 'eksport',

    // ── pomoc ──
    help: 'mozliwosci', pomoc: 'mozliwosci', 'co-potrafisz': 'mozliwosci',

    // ── stare akcje czatu (w nazwie po normalizacji myślniki zamiast podkreśleń) ──
    'pokaz-bio': 'pokaz_bio',
    'podswietl-bio': 'podswietl_bio',
    'pokaz-filmiki': 'pokaz_filmiki',
    'podswietl-filmiki': 'podswietl_filmiki',
    'przejmij-kursor': 'przejmij_kursor'
  };

  // Wystaw aliasy globalnie OD RAZU po definicji, żeby nazwaAkcji()
  // nigdy nie zależała od kolejności w cached kopii pliku.
  try { global.ALIASY_AKCJI = ALIASY_AKCJI; } catch (e) { /* brak */ }

  // Zamienia nazwę akcji na kanoniczną (model może użyć różnych nazw/zapisu)
  // UWAGA: nigdy nie rzuca - wykonajWiele woła tę funkcję także w ścieżce obsługi błędów.
  function nazwaAkcji(akcja) {
    try {
      if (!akcja || typeof akcja !== 'object') return null;

      const surowa = akcja.akcja || akcja.action || akcja.type || akcja.zadanie || akcja.operacja;
      if (!surowa) return null;

      const oryginal = String(surowa).trim();
      const nazwa = oryginal.toLowerCase().replace(/[_\s]+/g, '-');
      const bez = nazwa.replace(/-/g, '');

      // 1. dokładne trafienie w akcję silnika (np. "nowyElement", "css")
      if (AKCJE[oryginal]) return oryginal;

      // 2. aliasy (np. javascript -> js, pokaz-bio -> pokaz_bio)
      // Pobranie defensywne BEZ odwoływania się do gołej nazwy stałej:
      // w TDZ samo "typeof ALIASY_AKCJI" rzuca ReferenceError, więc czytamy
      // wyłącznie przez globalThis/window/global.
      const aliasy = (
        (typeof globalThis !== 'undefined' && globalThis.ALIASY_AKCJI) ||
        (typeof window !== 'undefined' && window.ALIASY_AKCJI) ||
        (typeof global !== 'undefined' && global.ALIASY_AKCJI) ||
        {}
      );
      if (aliasy[nazwa]) return aliasy[nazwa];
      if (aliasy[oryginal.toLowerCase()]) return aliasy[oryginal.toLowerCase()];
      if (aliasy[bez]) return aliasy[bez];

    // 3. akcja silnika bez rozróżniania wielkości liter, myślników i podkreśleń
    const bezPodkreslnikow = function (s) { return String(s || '').toLowerCase().replace(/[-_\s]+/g, ''); };
    const klucz = Object.keys(AKCJE).find(function (k) { return bezPodkreslnikow(k) === bez; });
    if (klucz) return klucz;

    // 4. stara akcja czatu (pokaz_bio, przejmij_kursor...)
    const stare = starszeAkcje();
    if (typeof stare[nazwa] === 'function') return nazwa;
    if (typeof stare[oryginal] === 'function') return oryginal;
    const kluczStary = Object.keys(stare).find(function (k) {
      return k.toLowerCase().replace(/[_\s]+/g, '-') === nazwa;
    });
    if (kluczStary) return kluczStary;

    return nazwa;
    } catch (e) {
      // Awaryjnie: zwróć surową nazwę zamiast rzucać (ścieżka błędów też tu woła).
      try {
        const s = akcja && (akcja.akcja || akcja.action || akcja.type || akcja.zadanie || akcja.operacja);
        return s ? String(s).trim() : null;
      } catch (e2) { return null; }
    }
  }

  // Starsze akcje (pokaz_bio, przejmij_kursor...) dostarcza czat AI
  function starszeAkcje() {
    try {
      if (global.AIStarszeAkcje) return global.AIStarszeAkcje;
    } catch (e) { /* brak */ }
    return {};
  }

  // Wykonuje JEDNĄ akcję (albo tablicę akcji) i zwraca wynik dla modelu
  async function wykonaj(akcja) {
    if (Array.isArray(akcja)) return AKCJE.sekwencja({ akcje: akcja });

    if (typeof akcja === 'string') {
      // np. "pokaz_bio" - sama nazwa akcji
      akcja = { akcja: akcja };
    }
    if (!akcja || typeof akcja !== 'object') {
      throw new Error('akcja musi być obiektem, np. {"akcja":"css","kod":"body{background:#000}"}');
    }

    const nazwa = nazwaAkcji(akcja);
    if (!nazwa) {
      throw new Error('brak nazwy akcji - dodaj pole "akcja", np. {"akcja":"js","kod":"..."}');
    }

    // akcja obsługiwana przez czat (kursor, bio, filmiki)
    const stare = starszeAkcje();
    if (!AKCJE[nazwa] && typeof stare[nazwa] === 'function') {
      const wynik = await stare[nazwa](akcja);
      return { akcja: nazwa, wynik: wynik === undefined ? 'wykonane' : wynik };
    }

    const fn = AKCJE[nazwa];
    if (!fn) {
      throw new Error('nieznana akcja: "' + nazwa + '" - pełna lista jest pod akcją "mozliwosci"');
    }

    const wynik = await fn(akcja);
    dodajDoDziennika(nazwa, akcja);   // dziennik zmian = podstawa stanow (!save / !load)
    return { akcja: nazwa, wynik: wynik === undefined ? 'wykonane' : wynik };
  }

  // Wykonuje wiele akcji po kolei; błąd jednej nie przerywa pozostałych
  async function wykonajWiele(lista) {
    const akcje = [].concat(lista || []).filter(Boolean);
    const wyniki = [];
    for (let i = 0; i < akcje.length; i++) {
      try {
        wyniki.push(await wykonaj(akcje[i]));
      } catch (e) {
        wyniki.push({ akcja: nazwaAkcji(akcje[i]) || '(nieznana)', blad: e.message });
      }
    }
    return wyniki;
  }

  // Krótkie, czytelne podsumowanie wyników (pokazywane w czacie)
  function podsumowanie(wyniki) {
    return (wyniki || []).map(function (w) {
      if (w.blad) return '✗ ' + w.akcja + ': ' + w.blad;
      return '✓ ' + w.akcja;
    }).join('\n');
  }

  // Tekst wyników dla modelu (żeby mógł dokończyć zadanie)
  function wynikiDlaModelu(wyniki) {
    return 'WYNIKI AKCJI, KTÓRE WŁAŚNIE WYKONAŁEŚ (to prawdziwe dane z żywej strony):\n' +
      JSON.stringify(wyniki, null, 1) +
      '\nJeżeli zadanie nie jest jeszcze skończone, wyślij kolejne akcje. Jeżeli jest skończone, odpowiedz krótko użytkownikowi (bez JSON-a).';
  }

  // ==========================================================
  // ODTWARZANIE ZMIAN PO ODŚWIEŻENIU STRONY
  // ==========================================================
  async function odtworzZapisane() {
    const zapisane = czytajZapisane();
    if (!zapisane.length) return { paczek: 0, akcji: 0, bledy: 0 };

    let akcji = 0;
    let bledy = 0;
    for (const paczka of zapisane) {
      for (const a of (paczka.akcje || [])) {
        try {
          await wykonaj(a);
          akcji++;
        } catch (e) {
          bledy++;
          console.warn('AI moc: nie udało się odtworzyć akcji', a, e);
        }
      }
    }
    return { paczek: zapisane.length, akcji, bledy };
  }

  // ==========================================================
  // DZIENNIK ZMIAN - kazda trwala akcja AI laduje tutaj
  // ==========================================================
  let dziennikWstrzymany = false;

  function normalizujNazwe(s) {
    return String(s || '').toLowerCase().replace(/[-_\s]+/g, '');
  }

  function czyTrwala(nazwa) {
    const n = normalizujNazwe(nazwa);
    return TRWALE.some(function (x) { return normalizujNazwe(x) === n; });
  }

  function czytajDziennik() {
    try {
      const s = global.localStorage.getItem(KLUCZ_DZIENNIK);
      if (!s) return [];
      const d = JSON.parse(s);
      return Array.isArray(d) ? d : [];
    } catch (e) { return []; }
  }

  function piszDziennik(lista) {
    try {
      global.localStorage.setItem(KLUCZ_DZIENNIK, JSON.stringify(lista || []));
      return true;
    } catch (e) { return false; }
  }

  // Kazda zmiana warta odtworzenia trafia do dziennika (z limitem rozmiaru)
  function dodajDoDziennika(nazwa, akcja) {
    try {
      if (dziennikWstrzymany) return;
      if (!czyTrwala(nazwa)) return;
      const kopia = JSON.parse(JSON.stringify(akcja));
      const lista = czytajDziennik();
      lista.push({ a: kopia, c: new Date().toISOString() });
      while (lista.length > MAX_DZIENNIK) lista.shift();
      while (lista.length > 1 && JSON.stringify(lista).length > MAX_DZIENNIK_ZNAKOW) lista.shift();
      piszDziennik(lista);
    } catch (e) { /* dziennik nigdy nie moze zepsuc akcji */ }
  }

  // Sciezka CSS do elementu (np. body > div:nth-child(2)) - do przywracania usunietych
  function sciezkaElementu(el) {
    try {
      const czesci = [];
      let obecny = el;
      let glebokosc = 0;
      while (obecny && obecny.nodeType === 1 && glebokosc < 6) {
        if (obecny.id) { czesci.unshift('#' + obecny.id); break; }
        let czesc = String(obecny.tagName || '').toLowerCase();
        const rodzic = obecny.parentElement;
        if (rodzic) czesc += ':nth-child(' + (Array.prototype.indexOf.call(rodzic.children, obecny) + 1) + ')';
        czesci.unshift(czesc);
        obecny = rodzic;
        glebokosc++;
      }
      return czesci.join(' > ') || 'body';
    } catch (e) { return 'body'; }
  }

  // ==========================================================
  // STANY STRONY: !save <nazwa> / !load <nazwa> / !list
  // Zapisy sa KROTKIE: styl wstrzykniety przez AI + dziennik zmian.
  // ==========================================================
  function czytajStany() {
    try {
      const s = global.localStorage.getItem(KLUCZ_STANY);
      if (!s) return [];
      const d = JSON.parse(s);
      if (Array.isArray(d)) return d;
      if (d && Array.isArray(d.stany)) return d.stany;
      return [];
    } catch (e) { return []; }
  }

  function piszStany(lista) {
    try {
      global.localStorage.setItem(KLUCZ_STANY, JSON.stringify({ wersja: 1, stany: lista }));
      return true;
    } catch (e) { return false; }
  }

  // Style wstrzykniete przez AI (id zaczyna sie od "ai")
  function zebierzStyleAi(limit) {
    const max = Number(limit) || 4000;
    const out = [];
    try {
      Array.from(document.querySelectorAll('style')).forEach(function (el) {
        const id = el.id || '';
        if (!/^ai/i.test(id)) return;
        if (/^ai-cursor/i.test(id)) return;   // styl kursora AI nalezy do strony, nie do zmian AI
        const css = el.textContent || '';
        out.push({ id: id, znakow: css.length, css: tekstWycinek(css, max) });
      });
    } catch (e) { }
    return out;
  }

  // Arkusze, z ktorych przegladarka NAPRAWDE liczy styl (na zywo)
  function zebierzArkusze(limit) {
    const max = Number(limit) || 5000;
    const out = [];
    try {
      Array.from(document.styleSheets).forEach(function (ark) {
        try {
          const reguly = Array.from(ark.cssRules).map(function (r) { return r.cssText; }).join('\n');
          out.push({ arkusz: ark.href || '(wbudowany)', znakow: reguly.length, css: tekstWycinek(reguly, max) });
        } catch (e) {
          out.push({ arkusz: ark.href || '(obcy)', info: 'regul nie da sie odczytac (inna domena)' });
        }
      });
    } catch (e) { }
    return out;
  }

  function zbierzStan(nazwa) {
    let favicon = null;
    try {
      const ikona = document.querySelector('link[rel*="icon"]');
      if (ikona) favicon = ikona.getAttribute('href');
    } catch (e) { }
    const stan = {
      wersja: 1,
      nazwa: String(nazwa || 'stan'),
      czas: new Date().toISOString(),
      tytul: document.title,
      klasaHtml: document.documentElement.className || '',
      favicon: favicon,
      style: zebierzStyleAi(20000),
      akcje: czytajDziennik()
    };
    stan.znakow = JSON.stringify(stan).length;
    return stan;
  }

  function stanZapisz(nazwa) {
    const czysta = String(nazwa || '').trim();
    if (!czysta) throw new Error('podaj nazwe stanu, np. {"akcja":"stanZapisz","nazwa":"noc"}');
    const stan = zbierzStan(czysta);
    if (stan.znakow > MAX_STAN_ZNAKOW) {
      throw new Error('stan ma ' + stan.znakow + ' znakow, limit to ' + MAX_STAN_ZNAKOW +
        ' - zapisuj mniejsze zmiany (dziennik wyczyscisz akcja "wyczyscDziennik")');
    }
    const stany = czytajStany();
    const i = stany.findIndex(function (s) { return String(s.nazwa).toLowerCase() === czysta.toLowerCase(); });
    if (i === -1) stany.push(stan); else stany[i] = stan;
    while (stany.length > MAX_STANOW) stany.shift();
    piszStany(stany);
    return {
      zapisano: czysta,
      akcji: (stan.akcje || []).length,
      stylow: (stan.style || []).length,
      kb: Math.round(stan.znakow / 1024),
      stanow: stany.length,
      limitStanow: MAX_STANOW
    };
  }

  function stanyLista() {
    return czytajStany().map(function (s) {
      return {
        nazwa: s.nazwa,
        akcji: (s.akcje || []).length,
        stylow: (s.style || []).length,
        kb: Math.round((s.znakow || JSON.stringify(s).length) / 1024),
        czas: s.czas
      };
    });
  }

  // Wczytuje zapisany stan strony (i ustawia go jako biezacy, takze po odswiezeniu)
  async function stanWczytaj(nazwa) {
    const stany = czytajStany();
    const czysta = String(nazwa || '').trim().toLowerCase();
    let stan = stany.find(function (s) { return String(s.nazwa).toLowerCase() === czysta; });
    if (!stan && !czysta) stan = stany[stany.length - 1];
    if (!stan) throw new Error('nie ma stanu "' + nazwa + '" - liste pokaze komenda !list');

    // 1) sprzatanie tego, co AI dorobilo na stronie
    try {
      Array.from(document.querySelectorAll('[data-ai-el]')).forEach(function (el) { el.remove(); });
    } catch (e) { }

    // 2) przywrocenie elementow, ktore AI usunelo. Bierzemy dane z BIEZACEGO dziennika
    //    oraz ze wczytywanego stanu - dzieki temu powrot A -> B -> A tez odtwarza
    //    elementy skasowane po zapisaniu stanu A.
    const doPrzywrocenia = [];
    const widzianeWroc = new Set();
    [czytajDziennik(), (stan.akcje || [])].forEach(function (zrodlo) {
      (zrodlo || []).forEach(function (wpis) {
        const a = (wpis && wpis.a) || wpis || {};
        (a.__wroc || []).forEach(function (info) {
          if (!info || !info.html) return;
          const klucz = String(info.rodzic) + '|' + String(info.indeks) + '|' + String(info.html).slice(0, 80);
          if (widzianeWroc.has(klucz)) return;
          widzianeWroc.add(klucz);
          doPrzywrocenia.push(info);
        });
      });
    });

    doPrzywrocenia.forEach(function (info) {
      try {
        const rodzic = document.querySelector(info.rodzic) || document.body;
        const znacznikKawalek = String(info.html).slice(0, 200);
        const juzJest = Array.prototype.some.call(rodzic.children, function (dz) {
          return String(dz.outerHTML).slice(0, 200) === znacznikKawalek;
        });
        if (juzJest) return;   // nie dublujemy tego, co juz stoi na stronie
        const tym = document.createElement('div');
        tym.innerHTML = info.html;
        const el = tym.firstElementChild;
        if (!el) return;
        const indeks = Number(info.indeks);
        if (isFinite(indeks) && indeks >= 0 && indeks < rodzic.children.length) {
          rodzic.insertBefore(el, rodzic.children[indeks]);
        } else {
          rodzic.appendChild(el);
        }
      } catch (e) { }
    });

    // 3) style AI dokladnie takie jak w stanie (nadmiarowe wyrzucamy)
    const zapisane = new Map();
    (stan.style || []).forEach(function (s) { if (s && s.id) zapisane.set(s.id, s.css || ''); });
    try {
      Array.from(document.querySelectorAll('style')).forEach(function (el) {
        const id = el.id || '';
        if (!/^ai/i.test(id)) return;
        if (/^ai-cursor/i.test(id)) return;   // tego nie ruszamy - inaczej zniknalby kursor AI
        if (zapisane.has(id)) { el.textContent = zapisane.get(id); zapisane.delete(id); }
        else el.remove();
      });
    } catch (e) { }
    zapisane.forEach(function (css, id) { wstawStyl(id, css); });

    // 4) tytul / klasa <html> / favicon
    if (stan.tytul) document.title = stan.tytul;
    if (typeof stan.klasaHtml === 'string') document.documentElement.className = stan.klasaHtml;
    if (stan.favicon) {
      try {
        let ikona = document.querySelector('link[rel*="icon"]');
        if (!ikona) {
          ikona = document.createElement('link');
          ikona.rel = 'icon';
          document.head.appendChild(ikona);
        }
        ikona.setAttribute('href', stan.favicon);
      } catch (e) { }
    }

    // 5) odtworzenie dziennika zmian - to jest wlasciwy stan strony
    dziennikWstrzymany = true;
    let ok = 0;
    const bledy = [];
    for (const wpis of (stan.akcje || [])) {
      const a = (wpis && wpis.a) || wpis;
      if (!a || typeof a !== 'object') continue;
      try { await wykonaj(a); ok++; }
      catch (e) { bledy.push(String((a.akcja || a.action) || '?') + ': ' + e.message); }
    }
    dziennikWstrzymany = false;

    // 6) ten stan jest teraz biezacym stanem (zostaje takze po odswiezeniu)
    piszDziennik((stan.akcje || []).map(function (w) { return (w && w.a) ? w : { a: w }; }));
    piszZapisane([{
      id: 'stan-' + stan.nazwa,
      nazwa: 'stan: ' + stan.nazwa,
      czas: new Date().toISOString(),
      akcje: (stan.akcje || []).map(function (w) { return (w && w.a) ? w.a : w; })
    }]);

    return {
      wczytano: stan.nazwa,
      akcji: ok,
      stylow: (stan.style || []).length,
      bledy: bledy.length,
      przykladyBledow: bledy.slice(0, 3)
    };
  }

  function stanUsun(nazwa) {
    const stany = czytajStany();
    const czysta = String(nazwa || '').trim().toLowerCase();
    const zostaje = stany.filter(function (s) { return String(s.nazwa).toLowerCase() !== czysta; });
    piszStany(zostaje);
    return { usunieto: stany.length - zostaje.length, zostalo: zostaje.length };
  }

  // Krotki opis stanu strony NA ZYWO - AI widzi tu swoje zmiany
  function kodNaZywo(limit) {
    const max = Number(limit) || 1800;
    const linie = [];
    try {
      linie.push('tytul: ' + document.title);
      const styleAi = zebierzStyleAi(700);
      linie.push('style od AI: ' + (styleAi.length
        ? styleAi.map(function (s) {
            return s.id + ' (' + s.znakow + ' znakow): ' + String(s.css).replace(/\s+/g, ' ');
          }).join(' || ')
        : '(brak)'));
      const dz = czytajDziennik();
      linie.push('moje zmiany (' + dz.length + '): ' + (dz.length
        ? dz.slice(-8).map(function (w) {
            const a = (w && w.a) || {};
            const nazwa = a.akcja || a.action || '?';
            const cel = a.selektor || a.cel || '';
            return String(nazwa) + (cel ? ' ' + cel : '');
          }).join(', ') + (dz.length > 8 ? ', ...' : '')
        : '(brak)'));
      linie.push('pelny kod: akcja "kodStrony" (co: css | html | akcje | wszystko)');
    } catch (e) {
      linie.push('(nie udalo sie odczytac stanu: ' + e.message + ')');
    }
    return tekstWycinek(linie.join('\n'), max);
  }

  // ==========================================================
  // PUBLICZNE API - z tego korzysta czat AI (window.AIMoc)
  // ==========================================================
  const API = {
    wersja: '1.0',
    wykonaj,
    wykonajWiele,
    odtworzZapisane,
    podsumowanie,
    wynikiDlaModelu,
    mozliwosci: MOZLIWOSCI,
    tekstPomocy,
    akcje: () => Object.keys(AKCJE).concat(Object.keys(starszeAkcje())),
    ALIASY_AKCJI,
    nazwaAkcji,
    zapisane: () => czytajZapisane().map((p) => ({ id: p.id, nazwa: p.nazwa, akcji: (p.akcje || []).length, czas: p.czas })),
    stanZapisz,
    stanWczytaj,
    stanyLista,
    stanUsun,
    kodNaZywo,
    dziennik: () => czytajDziennik()
  };

  global.AIMoc = API;
  global.AIAkcje = API; // zgodność ze starą nazwą

  // Zapisane zmiany wracają same po odświeżeniu strony
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { odtworzZapisane(); });
  } else {
    odtworzZapisane();
  }

  console.log('AI moc: silnik gotowy (' + MOZLIWOSCI().length + ' akcji). W czacie wpisz !help.');
})(typeof window !== 'undefined' ? window : globalThis);
