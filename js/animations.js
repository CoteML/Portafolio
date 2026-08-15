/* ==========================================================
   ANIMATIONS.JS — Animaciones de entrada por scroll
   Usa IntersectionObserver para hacer aparecer elementos
   cuando entran en el viewport
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* Elementos que se animan al entrar en pantalla */
  const elementos = document.querySelectorAll(
    '.timeline-item, .project-card, .skill-card'
  );

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          /* Dejar de observar una vez visible */
          observer.unobserve(entry.target);

        }

      });

    },

    { threshold: 0.12 }

  );

  elementos.forEach(el => observer.observe(el));

});
