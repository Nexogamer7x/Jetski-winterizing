// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> opens the visitor's email client with the details pre-filled.
// This site has no backend, so this keeps the form usable without a server.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const email = data.get('email') || '';
  const model = data.get('model') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';

  const serviceLabel = {
    mobile: 'We Come To You - $150',
    dropoff: 'You Come To Us - $100',
    unsure: 'Not sure yet',
  }[service] || service;

  const subject = encodeURIComponent(`Winterizing Quote Request - ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Jetski Make/Model: ${model}\n` +
    `Service Type: ${serviceLabel}\n\n` +
    `Details:\n${message}`
  );

  window.location.href = `mailto:info@smokymountainjetski.com?subject=${subject}&body=${body}`;
  formNote.textContent = 'Opening your email app to send the request...';
});
