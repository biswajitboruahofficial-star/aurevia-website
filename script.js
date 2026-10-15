
/* AUREVIA website interactions */

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

// Mobile navigation
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute(
      'aria-label',
      open ? 'Close navigation' : 'Open navigation'
    );
    menuToggle.textContent = open ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.textContent = '☰';
    });
  });
}

// Current year
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Official AUREVIA support email
const CONTACT_EMAIL = 'biswajitboruahofficial@gmail.com';

// Contact form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const topic = document.getElementById('contactTopic')?.value || 'General enquiry';
    const message =
      document.getElementById('contactMessage')?.value.trim() || '';

    if (!name || !email || !message) {
      alert('Please fill in your name, email and message.');
      return;
    }

    const subject = encodeURIComponent(`[AUREVIA Website] ${topic}`);

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Topic: ${topic}\n\n` +
      `Message:\n${message}`
    );

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  });
}

// Project links can prefill the contact form
document.querySelectorAll('[data-project]').forEach(link => {
  link.addEventListener('click', () => {
    const project = link.getAttribute('data-project');
    const topic = document.getElementById('contactTopic');
    const message = document.getElementById('contactMessage');

    if (topic) {
      topic.value = 'Project collaboration';
    }

    if (message) {
      message.value =
        `Hello AUREVIA,\n\n` +
        `I would like to know more about: ${project}.\n\n`;
    }
  });
});
