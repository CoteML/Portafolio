/* ==========================================================
   FILTROS.JS — Filtrado de tarjetas en proyectos.html
   Maneja tabs desktop y select dropdown mobile
   ========================================================== */


/* ── Función principal de filtrado ───────────────────────── */

function aplicarFiltro(categoria) {

  const tarjetas = document.querySelectorAll('.project-card');

  tarjetas.forEach(tarjeta => {

    const coincide =
      categoria === 'Todos' ||
      tarjeta.dataset.category === categoria;

    tarjeta.style.display = coincide ? 'flex' : 'none';

  });

}


/* ── Filtros desktop (tabs) ──────────────────────────────── */

document.querySelectorAll('.work-tab').forEach(tab => {

  tab.addEventListener('click', () => {

    /* Quitar .active de todos */
    document
      .querySelectorAll('.work-tab')
      .forEach(t => t.classList.remove('active'));

    /* Activar el tab clickeado */
    tab.classList.add('active');

    aplicarFiltro(tab.dataset.filter);

  });

});


/* ── Filtro mobile (select nativo) ───────────────────────── */

const selectorMobile = document.querySelector('.work-select');

if (selectorMobile) {

  selectorMobile.addEventListener('change', (event) => {

    aplicarFiltro(event.target.value);

  });

}
