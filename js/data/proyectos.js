
/* ==========================================================
   DATA/PROYECTOS.JS — Fuente de datos de todos los proyectos
   Importado en proyectos.html y usado por proyectos.js
   para generar las tarjetas del grid dinámicamente
   ========================================================== */

const PROYECTOS = [

  /* ── JBS — proyecto destacado, va primero ──────────────────────── */
  {
    id:          'jbs',
    titulo:      'JBS Chile',
    categoria:   'Análisis UX',
    anio:        '2026',
    imagen:      'assets/img/jbs/thumbnailjbscard.webp',
    descripcion: 'Mantención y rediseño UX — análisis de comportamiento con Microsoft Clarity',
    url:         'jbs.html',
    destacado:   true
  },

  /* ── SO-I ──────────────────────── */
  {
    id:          'soi',
    titulo:      'SO-I',
    categoria:   'Aplicación Móvil',
    anio:        '2024',
    imagen:      'assets/img/soi/thumbnailsoicard.webp',
    descripcion: 'Aplicación móvil — conexión con intérpretes de lengua de señas para la Comunidad Sorda',
    url:         'soi.html'
  },

  /* ── Cimenta ──────────────────────── */
  {
    id:          'cimenta',
    titulo:      'Cimenta',
    categoria:   'Diseño Web',
    anio:        '2026',
    imagen:      'assets/img/cimenta/thumbnailcimentacard.webp',
    descripcion: 'Rediseño sitio web - inmobiliaria con distintas líneas de negocio',
    url:         'cimenta.html'
  },

  /* ── Plazuela ──────────────────────── */
  {
    id:          'plazuela',
    titulo:      'Plazuela',
    categoria:   'Diseño Web',
    anio:        '2026',
    imagen:      'assets/img/plazuela/thumbnailplazuelacard.webp',
    descripcion: 'Diseño sitio web - Strip centers de barrio',
    url:         'plazuela.html'
  },

  /* ── Senior Suites ──────────────────────── */
  {
    id:          'seniorsuites',
    titulo:      'Senior Suites',
    categoria:   'Diseño Web',
    anio:        '2026',
    imagen:      'assets/img/seniorsuites/thumbnailseniorsuitescard.webp',
    descripcion: 'Rediseño sitio web - residencia adultos mayores',
    url:         'seniorsuites.html'
  },

  /* ── Terrazas San Cristóbal ──────────────────────── */
  {
    id:          'terrazas',
    titulo:      'Terrazas San Cristóbal',
    categoria:   'Diseño Web',
    anio:        '2026',
    imagen:      'assets/img/terrazas/thumbnailterrazascard.webp',
    descripcion: 'Diseño sitio web - Centro gastronómico y cultural',
    url:         'terrazas.html'
  },

  /* ── Agencia Hera ──────────────────────── */
  {
    id:          'hera',
    titulo:      'Agencia Hera',
    categoria:   'Diseño Web',
    anio:        '2025',
    imagen:      'assets/img/hera/thumbnailheracard.webp',
    descripcion: 'Rediseño sitio web - Agencia de influencer marketing',
    url:         'hera.html'
  },

  /* ── Pilares — Landings Web ──────────────────────── */
  {
    id:          'pilares-web',
    titulo:      'Pilares de Socovesa',
    categoria:   'Diseño Web',
    anio:        '2025',
    imagen:      'assets/img/pilares/thumbnailpilareswebcard.webp',
    descripcion: 'Diseño de landings — inmobiliaria para proyectos con subsidio e inversionistas',
    url:         'pilares-web.html'
  },

  /* ── Pilares — Piezas Gráficas ──────────────────────── */
  {
    id:          'pilares-graficas',
    titulo:      'Pilares de Socovesa',
    categoria:   'Piezas Gráficas',
    anio:        '2025',
    imagen:      'assets/img/pilares/thumbnailpilaresgraficascard.webp',
    descripcion: 'Mailings y contenido para redes sociales — campaña con IKEA',
    url:         'pilares-graficas.html'
  },

];