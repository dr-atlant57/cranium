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

  // CRANIO_BOOKING_WHATSAPP: human-confirmed booking channel, no form data is sent automatically.
  const bookingCopy = {
    ru: ['Запись в WhatsApp', 'Здравствуйте! Хочу записаться на сеанс CRANIO по работе с головой и шеей. Подскажите место, стоимость и доступное время.'],
    en: ['Book via WhatsApp', 'Hello! I would like to book a CRANIO head and neck session. Please tell me the location, price and available times.'],
    de: ['Termin per WhatsApp', 'Hallo! Ich möchte einen CRANIO-Termin für Kopf und Nacken vereinbaren. Bitte teilen Sie mir Ort, Preis und verfügbare Zeiten mit.'],
    fr: ['Réserver via WhatsApp', 'Bonjour ! Je souhaite réserver une séance CRANIO pour la tête et le cou. Quels sont le lieu, le tarif et les horaires disponibles ?'],
    es: ['Reservar por WhatsApp', 'Hola. Quiero reservar una sesión CRANIO para cabeza y cuello. ¿Cuáles son el lugar, el precio y los horarios disponibles?'],
    it: ['Prenota via WhatsApp', 'Buongiorno! Vorrei prenotare una sessione CRANIO per testa e collo. Quali sono la sede, il prezzo e gli orari disponibili?'],
    pt: ['Agendar pelo WhatsApp', 'Olá! Gostaria de agendar uma sessão CRANIO para cabeça e pescoço. Qual é o local, preço e horário disponível?'],
    tr: ['WhatsApp ile randevu', 'Merhaba! Baş ve boyun için CRANIO seansı ayırtmak istiyorum. Yer, ücret ve uygun saatleri paylaşır mısınız?'],
    ar: ['الحجز عبر واتساب', 'مرحباً، أود حجز جلسة CRANIO للرأس والرقبة. يرجى إخباري بالموقع والسعر والمواعيد المتاحة.'],
    zh: ['通过 WhatsApp 预约', '您好！我想预约 CRANIO 头颈护理服务。请告知地点、价格和可预约时间。'],
    ja: ['WhatsAppで予約', 'こんにちは。CRANIOの頭と首のセッションを予約したいです。場所、料金、予約可能な時間を教えてください。'],
    ko: ['WhatsApp 예약', '안녕하세요. CRANIO 머리와 목 세션을 예약하고 싶습니다. 장소, 가격, 가능한 시간을 알려주세요.']
  };
  const bookingText = bookingCopy[locale] || bookingCopy.en;
  const bookingHref = 'https://wa.me/996998066098?text=' + encodeURIComponent(bookingText[1]);
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
  const navLinks = document.querySelector('header .navlinks');
  if (navLinks && !navLinks.querySelector('[data-booking]')) {
    const link = newBookingLink('');
    link.dataset.booking = 'whatsapp';
    navLinks.prepend(link);
  }
  const primaryActions = document.querySelector('.hero .actions');
  if (primaryActions) primaryActions.prepend(newBookingLink('btn dark'));
  // Give information and Start pages a direct contact route, not an imitation of a sent form.
  const articleLead = document.querySelector('.article > .lead');
  if (articleLead) {
    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.appendChild(newBookingLink('btn dark'));
    articleLead.insertAdjacentElement('afterend', actions);
  }
  const footerBottom = document.querySelector('footer .footer-bottom');
  if (footerBottom) {
    const link = newBookingLink('');
    link.textContent = 'WhatsApp: +996 998 066 098';
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
