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

/* ==========================================================
   Insert LinkedIn icon into header (mobile) and into footer (desktop)
   This avoids editing every HTML file — we inject the anchor dynamically
   ========================================================== */

function insertLinkedInIcon() {
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1036 990' + '" aria-hidden="true"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/></svg>';

  var linkedinHref = 'https://www.linkedin.com/in/mariajose-mendoza-lopetegui/';

  // Footer — insert left of the email pill if present
  try {
    var existingFooterLinked = document.querySelector('.footer-linkedin');
    if (!existingFooterLinked) {
      var footerEmail = document.querySelector('.footer-email-pill');
      if (footerEmail && footerEmail.parentNode) {
        var parent = footerEmail.parentNode;
        // Ensure a contact wrapper exists so icon + email stay grouped
        var contactWrap = parent.querySelector('.footer-contact');
        if (!contactWrap) {
          contactWrap = document.createElement('div');
          contactWrap.className = 'footer-contact';
          parent.insertBefore(contactWrap, footerEmail);
        }

        var a2 = document.createElement('a');
        a2.className = 'footer-linkedin';
        a2.href = linkedinHref;
        a2.target = '_blank';
        a2.rel = 'noopener noreferrer';
        a2.setAttribute('aria-label', 'LinkedIn');
        a2.innerHTML = svg;

        contactWrap.appendChild(a2);
        contactWrap.appendChild(footerEmail);
      }
    }
  } catch (e) {
    console.warn('Could not insert footer LinkedIn icon', e);
  }

  // Remove textual LinkedIn link in footer-links (we use the icon)
  try {
    var footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(function(link) {
      var href = (link.getAttribute('href') || '').toLowerCase();
      if (href.indexOf('linkedin') !== -1) {
        link.parentNode && link.parentNode.removeChild(link);
      }
    });
  } catch (e) {
    console.warn('Could not remove textual LinkedIn link', e);
  }
}

document.addEventListener('DOMContentLoaded', insertLinkedInIcon);