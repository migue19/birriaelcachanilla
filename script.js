// Número de WhatsApp en formato internacional (52 + 10 dígitos), sin + ni espacios
const WHATSAPP_NUMBER = '529982443444';
const WHATSAPP_MESSAGE = '¡Hola El Cachanilla! Quiero hacer un pedido:';

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
document.querySelectorAll('.js-whatsapp').forEach((a) => {
  a.href = waUrl;
  a.target = '_blank';
  a.rel = 'noopener';
});

document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector('.nav__toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Sombra del nav al hacer scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
