/* ============================================================
   WeCollect — Website Revamp Strategy — script.js
   ============================================================ */

(function () {
  'use strict';

  // ── NAV: build dots & bind progress bar ──────────────────
  const sections = Array.from(document.querySelectorAll('.s[id]'));
  const navDots  = document.getElementById('navDots');
  const navLabel = document.getElementById('navLabel');
  const navBar   = document.getElementById('navBar');
  const nav      = document.getElementById('nav');

  // Build a dot per section
  sections.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav__dot';
    btn.setAttribute('aria-label', s.dataset.label || 'Section ' + (i + 1));
    btn.title = s.dataset.label || '';
    btn.addEventListener('click', () => s.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    navDots.appendChild(btn);
  });

  const dots = Array.from(navDots.querySelectorAll('.nav__dot'));

  // Progress bar + active dot + label + nav scrolled class
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;

      // Progress bar
      const scrolled = window.scrollY;
      const total    = document.body.scrollHeight - window.innerHeight;
      navBar.style.width = total > 0 ? ((scrolled / total) * 100).toFixed(2) + '%' : '0%';

      // Scrolled shadow on nav
      nav.classList.toggle('scrolled', scrolled > 20);

      // Active section
      let activeIdx = 0;
      sections.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= window.innerHeight * 0.45) activeIdx = i;
      });
      dots.forEach((d, i) => d.classList.toggle('is-active', i === activeIdx));
      if (navLabel) navLabel.textContent = sections[activeIdx]?.dataset.label || 'Website Revamp Strategy';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── SCROLL ANIMATIONS ────────────────────────────────────
  const animEls = document.querySelectorAll('.anim');
  const animObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        animObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });
  animEls.forEach(el => animObs.observe(el));

  // Immediately reveal elements already in view on load
  animEls.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add('in');
      animObs.unobserve(el);
    }
  });

  // ── COUNTER ANIMATION ─────────────────────────────────────
  function animCounter(el, target, duration) {
    const start = performance.now();
    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    function step(now) {
      const pct = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(ease(pct) * target);
      if (pct < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll('[data-counter]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.counter, 10);
        animCounter(e.target, target, 1400);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  counterEls.forEach(el => counterObs.observe(el));

  // ── LIGHTBOX (full-width scrollable) ─────────────────────
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lbImg');
  const lbClose  = document.getElementById('lbClose');

  function openLB(img) {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.hidden = false;
    lightbox.scrollTop = 0;
    // Prevent body scroll while lightbox is open
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }
  function closeLB() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.addEventListener('click', () => openLB(img));
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLB(img); }
    });
  });

  lbClose?.addEventListener('click', closeLB);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

})();
