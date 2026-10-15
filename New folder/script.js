// AUREVIA website interactions
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// The contact form opens the visitor's email app.
// Replace this placeholder with your official AUREVIA support email before publishing.
const CONTACT_EMAIL = 'REPLACE_WITH_YOUR_SUPPORT_EMAIL@example.com';

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();

  if (CONTACT_EMAIL.includes('REPLACE_WITH_YOUR_SUPPORT_EMAIL')) {
    alert('Before using the contact form, the website owner must add the official support email in script.js.');
    return;
  }

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const topic = document.getElementById('contactTopic').value;
  const message = document.getElementById('contactMessage').value.trim();

  const subject = encodeURIComponent(`[AUREVIA Website] ${topic}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

// Project-specific links can prefill the contact topic/message.
document.querySelectorAll('[data-project]').forEach(link => {
  link.addEventListener('click', () => {
    const project = link.getAttribute('data-project');
    const topic = document.getElementById('contactTopic');
    topic.value = 'Project collaboration';
    document.getElementById('contactMessage').value = `Hello AUREVIA,\n\nI would like to know more about: ${project}.\n\n`;
  });
});
