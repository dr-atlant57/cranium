(() => {
  const UI = __UI__;
  const routes = __ROUTES__;
  const languages = Object.keys(UI);
  const root = document.documentElement;
  const base = new URL('.', document.currentScript.src).pathname.replace(/\/$/, '');
  const path = location.pathname.slice(base.length).replace(/index\.html$/, '') || '/';
  const match = path.match(/^\/(en|ru|de|fr|es|it|pt|tr|ar|zh|ja|ko)(?:\/|$)/);
  const locale = match ? match[1] : 'en';
  const rest = (match ? path.slice(match[0].length - (match[0].endsWith('/') ? 1 : 0)) : path) || '/';
  const read = key => { try { return localStorage.getItem('cranio_' + key) || localStorage.getItem('cranium_' + key); } catch { return null; } };
  const write = (key, value) => { try { localStorage.setItem('cranio_' + key, value); } catch {} };
  const resolveLanguage = () => {
    const saved = read('locale');
    if (languages.includes(saved)) return saved;
    const preferences = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
    return preferences.map(tag => tag.toLowerCase().split(/[-_]/)[0]).find(lang => languages.includes(lang)) || 'en';
  };
  const destination = lang => base + '/' + lang + (routes[lang].includes(rest) ? rest : '/') + location.search + location.hash;
  // An explicit language URL wins; only unlocalized entry routes are detected.
  if (!match) {
    location.replace(destination(resolveLanguage()));
    return;
  }
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let theme = read('theme');
  if (!['system','light','neutral','dark'].includes(theme)) theme = 'system';
  const applyTheme = () => {
    root.dataset.theme = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;
    root.style.colorScheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
    document.querySelectorAll('[data-theme-select]').forEach(select => select.value = theme);
  };
  applyTheme();
  if (media.addEventListener) media.addEventListener('change', applyTheme);
  else if (media.addListener) media.addListener(applyTheme);
  document.querySelectorAll('[data-theme-select]').forEach(select => select.addEventListener('change', () => {
    theme = select.value;
    write('theme', theme);
    applyTheme();
  }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-language]').forEach(select => {
    select.value = locale;
    select.addEventListener('change', () => {
      write('locale', select.value);
      location.assign(destination(select.value === 'auto' ? resolveLanguage() : select.value));
    });
  });
  document.querySelectorAll('[data-intake]').forEach(form => {
    const input = form.querySelector('textarea');
    const status = form.querySelector('.status');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!input.value.trim()) { input.focus(); return; }
      status.textContent = UI[locale].offline;
    });
  });
})();
