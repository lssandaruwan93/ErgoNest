document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('[data-nav-toggle]');
  const primaryNav = document.getElementById('primary-nav');
  if (nav && primaryNav) {
    nav.addEventListener('click', () => {
      const open = primaryNav.classList.toggle('is-open');
      nav.setAttribute('aria-expanded', String(open));
      nav.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchClose = document.querySelector('[data-search-close]');
  const overlay = document.getElementById('site-search');
  const searchInput = overlay?.querySelector('input');
  const setSearch = (open) => {
    if (!overlay) return;
    overlay.hidden = !open;
    searchToggle?.setAttribute('aria-expanded', String(open));
    if (open) searchInput?.focus();
  };
  searchToggle?.addEventListener('click', () => setSearch(true));
  searchClose?.addEventListener('click', () => setSearch(false));
  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) setSearch(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setSearch(false);
  });

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector('[data-newsletter-note]');
      if (note) {
        note.hidden = false;
        note.textContent = 'Thanks — newsletter signup will be available soon.';
      }
    });
  });
});
