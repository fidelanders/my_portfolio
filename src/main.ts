import './style.css';

// ---- Year in footer ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ---- Nav scroll state ----
const nav = document.getElementById('siteNav');
const onScroll = () => {
  if (!nav) return;
  if (window.scrollY > 24) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('menu-open', !expanded);
});
navLinks?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('menu-open');
  });
});

// ---- Hero console boot sequence ----
const consoleLines = document.querySelectorAll<HTMLElement>('.console-line');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
consoleLines.forEach((line, i) => {
  if (prefersReduced) {
    line.classList.add('show');
    return;
  }
  setTimeout(() => line.classList.add('show'), 220 * i + 150);
});

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if (prefersReduced) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---- Contact form (AJAX submit to web3forms) ----
const form = document.getElementById('contactForm') as HTMLFormElement | null;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement | null;
const formResult = document.getElementById('formResult');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!formResult || !submitBtn) return;

  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formResult.textContent = '';
  formResult.classList.remove('error');

  try {
    const formData = new FormData(form);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    const json = await res.json();

    if (json.success) {
      formResult.textContent = '→ Message sent. I\u2019ll reply within 48 hours.';
      form.reset();
    } else {
      throw new Error(json.message || 'Something went wrong.');
    }
  } catch (err) {
    formResult.classList.add('error');
    formResult.textContent = '→ Could not send. Please email fogbeni21@gmail.com directly.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});
