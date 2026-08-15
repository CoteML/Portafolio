/* ==========================================================
   MAIN.JS — Lógica compartida en todas las páginas
   Responsabilidad: glassmorphism del header según scroll
   ========================================================== */

const header = document.getElementById('site-header');

function updateHeader() {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.remove('transparent');
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    header.classList.add('transparent');
  }
}

window.addEventListener('scroll', updateHeader);
document.addEventListener('DOMContentLoaded', updateHeader);