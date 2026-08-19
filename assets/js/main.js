(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var open = siteNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header && !header.classList.contains('is-inner')) {
    var toggleHeader = function () {
      header.classList.toggle('is-solid', window.scrollY > 40);
    };
    toggleHeader();
    window.addEventListener('scroll', toggleHeader, { passive: true });
  }

  var hero = document.getElementById('hero');
  var heroParticles = document.getElementById('heroParticles');

  if (hero && heroParticles && !prefersReduced) {
    var count = window.innerWidth < 700 ? 14 : 28;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var mote = document.createElement('span');
      mote.className = 'mote';
      mote.style.setProperty('--x', (Math.random() * 100).toFixed(1) + '%');
      mote.style.setProperty('--size', (2 + Math.random() * 4).toFixed(1) + 'px');
      mote.style.setProperty('--dur', (10 + Math.random() * 14).toFixed(1) + 's');
      mote.style.setProperty('--delay', (Math.random() * 14).toFixed(1) + 's');
      mote.style.setProperty('--drift', (Math.random() * 60 - 30).toFixed(0) + 'px');
      mote.style.setProperty('--op', (0.25 + Math.random() * 0.5).toFixed(2));
      frag.appendChild(mote);
    }
    heroParticles.appendChild(frag);
  }

  if (hero && !prefersReduced) {
    var ticking = false;
    var updateParallax = function () {
      var y = window.scrollY;
      var heroH = hero.offsetHeight || window.innerHeight;
      var shift = Math.min(y * 0.35, heroH * 0.2);
      hero.style.setProperty('--py', shift + 'px');
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    if (!isTouch) {
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        hero.style.setProperty('--mx', (px * 18).toFixed(2) + 'px');
        hero.style.setProperty('--my', (py * 12).toFixed(2) + 'px');
      });
      hero.addEventListener('mouseleave', function () {
        hero.style.setProperty('--mx', '0px');
        hero.style.setProperty('--my', '0px');
      });
    }
  }

  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    if ('IntersectionObserver' in window && !prefersReduced) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }
})();
