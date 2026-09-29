// js/script.js
// Site interactions only. Small and defensive.
//
// v3 shipped 89 KB of this file because it carried three full translation
// dictionaries and rewrote page text on load. That is the single most common
// cause of a multilingual site failing to index: Googlebot may never see the
// Hindi content, because the Hindi only existed after script execution.
// Each language is now a real static page. This file is ~3 KB and does no
// text swapping at all.

(function () {
  'use strict';

  // --- Mobile navigation -----------------------------------------------------
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the panel when a link is followed or Escape is pressed.
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  // --- Contact form ----------------------------------------------------------
  // There is no backend yet. Fail loudly in the UI rather than silently
  // reloading the page and implying the message was sent.
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent =
          'This form is not connected yet. Please call or WhatsApp +91 9706801250, or email deepaktantrik@assamtantrik.co.';
        note.classList.add('form-note--warn');
      }
    });
  }
})();
