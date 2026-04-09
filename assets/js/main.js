// Copied this from somewhere don't ask me how it works.

const nav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});


const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


const pmLinks = document.querySelectorAll('.postmortem-nav a');
const pmSections = document.querySelectorAll('.pm-section');
if (pmSections.length) {
  const pmObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        pmLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.postmortem-nav a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  pmSections.forEach(s => pmObserver.observe(s));
}

const NAV_HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
document.querySelectorAll('.postmortem-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
