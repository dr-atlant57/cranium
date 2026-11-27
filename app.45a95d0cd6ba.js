(() => {
  const UI = {"en":{"language":"Language","theme":"Theme","themes":["Auto","Light","Neutral","Dark"],"offline":"TwinMind is not connected yet. Your text has not been sent. Copy it to keep your observations."},"ru":{"language":"Язык","theme":"Тема","themes":["Авто","Светлая","Нейтральная","Тёмная"],"offline":"TwinMind пока не подключён. Текст не отправлен. Скопируйте его, чтобы сохранить свои наблюдения."},"de":{"language":"Sprache","theme":"Darstellung","themes":["Automatisch","Hell","Neutral","Dunkel"],"offline":"TwinMind ist noch nicht angeschlossen. Ihr Text wurde nicht gesendet. Kopieren Sie ihn, um Ihre Beobachtungen zu behalten."},"fr":{"language":"Langue","theme":"Thème","themes":["Auto","Clair","Neutre","Sombre"],"offline":"TwinMind n’est pas encore connecté. Votre texte n’a pas été envoyé. Copiez-le pour conserver vos observations."},"es":{"language":"Idioma","theme":"Tema","themes":["Auto","Claro","Neutro","Oscuro"],"offline":"TwinMind aún no está conectado. Tu texto no se ha enviado. Cópialo para conservar tus observaciones."},"it":{"language":"Lingua","theme":"Tema","themes":["Auto","Chiaro","Neutro","Scuro"],"offline":"TwinMind non è ancora collegato. Il testo non è stato inviato. Copialo per conservare le tue osservazioni."},"pt":{"language":"Idioma","theme":"Tema","themes":["Auto","Claro","Neutro","Escuro"],"offline":"TwinMind ainda não está conectado. Seu texto não foi enviado. Copie-o para guardar suas observações."},"tr":{"language":"Dil","theme":"Tema","themes":["Otomatik","Açık","Nötr","Koyu"],"offline":"TwinMind henüz bağlı değil. Metniniz gönderilmedi. Gözlemlerinizi saklamak için kopyalayın."},"ar":{"language":"اللغة","theme":"المظهر","themes":["تلقائي","فاتح","محايد","داكن"],"offline":"TwinMind غير متصل بعد. لم يُرسل النص. انسخه للاحتفاظ بملاحظاتك."},"zh":{"language":"语言","theme":"主题","themes":["自动","浅色","中性","深色"],"offline":"TwinMind尚未连接。文字没有发送，请复制以保留观察记录。"},"ja":{"language":"言語","theme":"テーマ","themes":["自動","ライト","ニュートラル","ダーク"],"offline":"TwinMindはまだ接続されていません。文章は送信されていません。記録を残すにはコピーしてください。"},"ko":{"language":"언어","theme":"테마","themes":["자동","밝게","중립","어둡게"],"offline":"TwinMind는 아직 연결되지 않았습니다. 글은 전송되지 않았습니다. 관찰 기록을 보관하려면 복사하세요."}};
  const routes = {"en":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"ru":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"de":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"fr":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"es":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"it":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"pt":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"tr":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"ar":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"zh":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"ja":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"],"ko":["/","/c0-c1/","/cases/","/configuration/","/education/","/experience/","/experience/body-workload/","/experience/cognitive-load/","/experience/comfortable-head/","/experience/eyes-screen/","/experience/facial-asymmetry/","/experience/head-forward/","/experience/head-neck-settle/","/experience/head-not-centered/","/experience/head-tension/","/experience/headache-concentration/","/experience/heavy-head/","/experience/holding-myself/","/experience/jaw-tension/","/experience/mental-overload/","/experience/morning-neck/","/experience/neck-stiffness/","/experience/neck-tension/","/experience/neck-wont-relax/","/experience/one-side-active/","/experience/physical-fatigue/","/experience/posture-correction/","/experience/screen-work/","/experience/something-off/","/experience/standing-walking/","/explore/","/head-and-neck/","/how-it-works/","/logbook/","/method/","/primordocciput/","/site-map/","/start/","/technology/","/twinmind/","/your-cranium/"]};
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
  // CRANIO_BOOKING_WHATSAPP: human-confirmed booking channel, no form data is sent automatically.
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
    if (locale==='ru'||locale==='en') {link.href=base+'/'+locale+'/start/';link.textContent=locale==='ru'?'Контакты':'Contact';link.removeAttribute('target');link.setAttribute('aria-label',link.textContent);}
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
    if (locale==='ru'||locale==='en') {headerBook.href=base+'/'+locale+'/start/';headerBook.removeAttribute('target');headerBook.textContent=locale==='ru'?'Контакты':'Contact';}
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
  const footerBottom = document.querySelector?.('footer .footer-bottom');
  if (footerBottom && !document.querySelector('footer [data-rfs-corporate]')) {
    const link = newBookingLink('');
    link.textContent = 'rootfrontier.office@gmail.com';
    footerBottom.appendChild(link);
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
  const footer=document.querySelector('footer');if(footer&&!footer.querySelector('[data-rfs-corporate]')){const p=document.createElement('p');p.dataset.rfsCorporate='';p.style.cssText='text-align:center;padding:12px 16px;margin:0;font-size:.85rem;overflow-wrap:anywhere';p.append(part+' ');const a=document.createElement('a');a.href='https://rootfrontier.systems';a.textContent='ROOT FRONTIER SYSTEMS';a.style.color='inherit';p.append(a,' · ');const m=document.createElement('a');m.href=address();m.textContent=email;m.style.color='inherit';p.append(m);footer.append(p);}
  document.querySelectorAll('[data-intake]').forEach(form=>{
   const input=form.querySelector('textarea');if(!input)return;
   const button=form.querySelector('button[type="submit"],button:not([type])');if(button)button.textContent=label;
   form.addEventListener('submit',async event=>{event.preventDefault();event.stopImmediatePropagation();if(!input.value.trim()){input.focus();return;}const status=form.querySelector('.status'),button=form.querySelector('button[type="submit"],button:not([type])');if(button)button.disabled=true;if(status)status.textContent=lang==='ru'?'Отправляем заявку…':'Sending request…';try{const response=await fetch('https://formsubmit.co/ajax/rootfrontier.office@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'CRANIO SYSTEMS — website request',source_site:'cranio.systems',source_page:source,observation:input.value.trim(),submitted_at:new Date().toISOString()})});const result=await response.json();const accepted=response.ok&&(result.success===true||result.success==='true');if(!accepted)throw new Error('FormSubmit did not accept the request');if(status)status.textContent=lang==='ru'?'Заявка отправлена.':'Request sent.';form.reset();}catch(error){if(status)status.textContent=lang==='ru'?'Не удалось подтвердить отправку. Напишите на rootfrontier.office@gmail.com.':'Delivery could not be confirmed. Email rootfrontier.office@gmail.com.';console.error('CRANIO request submission failed:',error);}finally{if(button)button.disabled=false}},true);
  });
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
