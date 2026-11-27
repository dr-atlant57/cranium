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
  const destination = lang => {const same=routes[lang].includes(rest);return base + '/' + lang + (same ? rest : '/') + location.search + (same ? location.hash : '');};
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
  // Footer switches preserve the equivalent route and record the visitor's language choice.
  document.querySelectorAll('footer a[hreflang]').forEach(a => {
    const lang=a.getAttribute('hreflang');
    if(!languages.includes(lang))return;
    a.href=destination(lang);
    if(lang===locale)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');
    a.addEventListener('click',()=>write('locale',lang));
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
  // CRANIO_BOOKING_EMAIL: human-confirmed booking channel, no form data is sent automatically.
  const bookingCopy = {
    ru: ['Записаться по почте', 'Здравствуйте! Хочу записаться на сеанс CRANIO по работе с головой и шеей. Подскажите место, стоимость и доступное время.'],
    en: ['Book by email', 'Hello! I would like to book a CRANIO head and neck session. Please tell me the location, price and available times.'],
    de: ['Termin per E-Mail', 'Hallo! Ich möchte einen CRANIO-Termin für Kopf und Nacken vereinbaren. Bitte teilen Sie mir Ort, Preis und verfügbare Zeiten mit.'],
    fr: ['Réserver par e-mail', 'Bonjour ! Je souhaite réserver une séance CRANIO pour la tête et le cou. Quels sont le lieu, le tarif et les horaires disponibles ?'],
    es: ['Reservar por correo', 'Hola. Quiero reservar una sesión CRANIO para cabeza y cuello. ¿Cuáles son el lugar, el precio y los horarios disponibles?'],
    it: ['Prenota via e-mail', 'Buongiorno! Vorrei prenotare una sessione CRANIO per testa e collo. Quali sono la sede, il prezzo e gli orari disponibili?'],
    pt: ['Agendar por e-mail', 'Olá! Gostaria de agendar uma sessão CRANIO para cabeça e pescoço. Qual é o local, preço e horário disponível?'],
    tr: ['E-posta ile randevu', 'Merhaba! Baş ve boyun için CRANIO seansı ayırtmak istiyorum. Yer, ücret ve uygun saatleri paylaşır mısınız?'],
    ar: ['الحجز عبر البريد الإلكتروني', 'مرحباً، أود حجز جلسة CRANIO للرأس والرقبة. يرجى إخباري بالموقع والسعر والمواعيد المتاحة.'],
    zh: ['通过电子邮件预约', '您好！我想预约 CRANIO 头颈护理服务。请告知地点、价格和可预约时间。'],
    ja: ['メールで予約', 'こんにちは。CRANIOの頭と首のセッションを予約したいです。場所、料金、予約可能な時間を教えてください。'],
    ko: ['이메일 예약', '안녕하세요. CRANIO 머리와 목 세션을 예약하고 싶습니다. 장소, 가격, 가능한 시간을 알려주세요.']
  };
  const bookingText = bookingCopy[locale] || bookingCopy.en;
  const bookingHref = 'mailto:rootfrontier.office@gmail.com';
  const newBookingLink = (classes) => {
    const link = document.createElement('a');
    link.href = bookingHref;
    link.className = classes;
    link.textContent = bookingText[0];
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', bookingText[0] + ' — CRANIO');
    return link;
  };
  const navLinks = document.querySelector?.('header .navlinks');
  if (navLinks && !navLinks.querySelector('[data-booking]')) {
    const link = newBookingLink('');
    link.dataset.booking = 'email';
    link.href=base+'/'+locale+'/start/';link.removeAttribute('target');
    navLinks.prepend(link);
  }
  // Accessible native dropdown on small screens. Desktop links remain in the DOM for fallback.
  const headerBook = document.querySelector?.('header .preferences .start');
  if (headerBook) {
    const shortLabels = {ru:'Записаться',en:'Book',de:'Buchen',fr:'Réserver',es:'Reservar',it:'Prenota',pt:'Agendar',tr:'Randevu',ar:'احجز',zh:'预约',ja:'予約',ko:'예약'};
    headerBook.href = bookingHref;
    headerBook.target = '_blank';
    headerBook.rel = 'noopener noreferrer';
    headerBook.dataset.booking = 'email';
    headerBook.textContent = shortLabels[locale] || bookingText[0];
    headerBook.href=base+'/'+locale+'/start/';headerBook.removeAttribute('target');
  }
  const headerNav = document.querySelector?.('header nav');
  if (headerNav && navLinks && !headerNav.querySelector('.mobile-menu')) {
    const menu = document.createElement('details');
    menu.className = 'mobile-menu';
    const summary = document.createElement('summary');
    const menuLabels = {ru:'Меню',en:'Menu',de:'Menü',fr:'Menu',es:'Menú',it:'Menu',pt:'Menu',tr:'Menü',ar:'القائمة',zh:'菜单',ja:'メニュー',ko:'메뉴'};
    summary.textContent = menuLabels[locale] || 'Menu';
    summary.setAttribute('aria-label', summary.textContent);
    const contents = document.createElement('div');
    contents.className = 'mobile-menu-links';
    navLinks.querySelectorAll('a').forEach(a => contents.appendChild(a.cloneNode(true)));
    menu.append(summary, contents);
    headerNav.appendChild(menu);
    document.addEventListener?.('keydown', event => {
      if (event.key === 'Escape') menu.open = false;
    });
  }
  const primaryActions = document.querySelector?.('.hero .actions');
  if (primaryActions) primaryActions.prepend(newBookingLink('btn dark'));
  // Give information and Start pages a direct contact route, not an imitation of a sent form.
  const articleLead = document.querySelector?.('.article > .lead');
  if (articleLead) {
    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.appendChild(newBookingLink('btn dark'));
    articleLead.insertAdjacentElement('afterend', actions);
  }
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

/* RFS Corporate Identity Standard 001 */
(function(){
 const email='rootfrontier.office@gmail.com', source=location.origin+location.pathname, lang=(document.documentElement.lang||'en').slice(0,2);
 const labels={"ru":"Записаться по почте","en":"Book by email","de":"Termin per E-Mail","fr":"Réserver par e-mail","es":"Reservar por correo","it":"Prenota via e-mail","pt":"Agendar por e-mail","tr":"E-posta ile randevu","ar":"الحجز عبر البريد الإلكتروني","zh":"通过电子邮件预约","ja":"メールで予約","ko":"이메일 예약"}, membership={"ru":"Часть экосистемы","en":"Part of the ecosystem of","de":"Teil des Ökosystems","fr":"Une partie de l’écosystème","es":"Parte del ecosistema","it":"Parte dell’ecosistema","pt":"Parte do ecossistema","tr":"Ekosistemin bir parçası","ar":"جزء من منظومة","zh":"生态系统的一部分","ja":"エコシステムの一部","ko":"생태계의 일부"};
 const label=labels[lang]||labels.en, part=membership[lang]||membership.en;
 const address=()=>'mailto:'+email;
 function init(){
  document.querySelectorAll('a[href*="wa.me/996998066098"]').forEach(a=>{let msg='';try{msg=new URL(a.href).searchParams.get('text')||''}catch(e){}a.href=address(msg);a.removeAttribute('target');if(/whatsapp|واتساب|998[\s-]*066/i.test(a.textContent))a.textContent=label;a.setAttribute('aria-label',label);});
  const footer=document.querySelector('footer');if(footer&&!footer.querySelector('[data-rfs-corporate]')&&!(footer.querySelector('a[href^="mailto:rootfrontier.office@gmail.com"]')&&footer.querySelector('a[href*="rootfrontier.systems"]'))){const p=document.createElement('p');p.dataset.rfsCorporate='';p.style.cssText='text-align:center;padding:12px 16px;margin:0;font-size:.85rem;overflow-wrap:anywhere';p.append(part+' ');const a=document.createElement('a');a.href='https://rootfrontier.systems';a.textContent='ROOT FRONTIER SYSTEMS';a.style.color='inherit';p.append(a,' · ');const m=document.createElement('a');m.href=address();m.textContent=email;m.style.color='inherit';p.append(m);footer.append(p);}

 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
