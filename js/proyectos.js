/* ==========================================================
   PROYECTOS.JS — Genera dinámicamente las tarjetas del grid
   Depende de: js/data/proyectos.js (debe cargarse antes)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  generarTarjetas();

});


/* ── Generar tarjetas desde el array PROYECTOS ───────────── */

function generarTarjetas() {

  const grid = document.getElementById('projects-grid');

  if (!grid) return;

  grid.innerHTML = '';

  PROYECTOS.forEach(proyecto => {

    const article = document.createElement('article');

    article.className      = 'project-card';
    article.dataset.category = proyecto.categoria;

    article.innerHTML = `

      <a href="${proyecto.url}">

        <div class="project-thumb">
          ${proyecto.destacado ? '<span class="project-badge">DESTACADO</span>' : ''}
          <img
            src="${proyecto.imagen}"
            alt="${proyecto.titulo}"
            loading="lazy"
          >
        </div>

        <!-- Información -->
        <div class="project-body">

          <div class="project-meta">

            <div>
              <h3 class="project-title">${proyecto.titulo}</h3>
              <p class="project-desc">${proyecto.descripcion}</p>
            </div>

            <div>
              <span class="project-year">${proyecto.anio}</span>
              <span class="u-tag" style="display:block; margin-top:.4rem;">
                ${proyecto.categoria}
              </span>
            </div>

          </div>

          <!-- CTA -->
          <div class="project-cta">
            <span>Ver proyecto</span>
            <span class="arrow-icon">→</span>
          </div>

        </div>

      </a>

    `;

    grid.appendChild(article);

  });

}
