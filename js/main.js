/* =============================================
   RAREBIRD INFRA — main.js
   ============================================= */

/* --- Navbar Scroll Behavior --- */
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar || navbar.classList.contains('navbar--solid')) return;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* --- Mobile Navigation Toggle --- */
(function () {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileClose = document.getElementById('mobile-close');

  if (!hamburger || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  var mobileLinks = document.querySelectorAll('.mobile-nav__link');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();

/* --- Hero Load Animation --- */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  setTimeout(function () {
    hero.classList.add('loaded');
  }, 80);
})();

/* --- Enquiry Form Success Handler --- */
(function () {
  var forms = document.querySelectorAll('.enquiry-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var content = form.querySelector('.form-content');
      var success = form.querySelector('.form__success');
      if (content && success) {
        content.style.display = 'none';
        success.classList.add('is-visible');
      }
    });
  });
})();

/* --- Intersection Observer: Fade-in Animations --- */
(function () {
  var elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();
