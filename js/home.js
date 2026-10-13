(() => {
  'use strict';
  const et = {
    brandLabel: 'RS AUTO — avalehele', navLabel: 'Põhinavigatsioon', navServices: 'Teenused', navPrice: 'Maksumus', navAbout: 'Autoteenindusest', navContacts: 'Kontakt', languageLabel: 'Keele valik', book: 'Broneeri aeg',
    heroTitle: 'Autode remont<br>ja hooldus', heroIntro: 'Diagnostikast korralise hoolduseni — kõik teie auto jaoks ühes teeninduses.', heroCta: 'Broneeri hooldusaeg', heroGuaranteeTitle: 'Garantii tehtud töödele', heroGuaranteeText: 'Tehtud töödele ja osutatud teenustele.', heroHaynesTitle: 'Arvestus HaynesPro abil', heroHaynesText: 'Professionaalne süsteem tööde maksumuse arvutamiseks.', heroServicesTitle: 'Teenused ühes kohas', heroServicesText: 'Remont, diagnostika, rehvid, kliimaseade ja automaatkäigukasti hooldus.', workshopAlt: 'Valgusküllane autotöökoda autode ja tõstukitega',
    manifestoLabel: 'Autod. Inimesed. Tähelepanu detailidele.', manifestoLine1: 'KAASAEGNE AUTOTEENINDUS,', manifestoLine2: 'KUS TEIE AUTO EEST HOOLITSETAKSE', manifestoLine3: 'TEHNOLOOGIA JA TEADMISTE ABIL', manifestoLine4: 'NING OMA TÖÖD TUNDES.',
    servicesLabel: 'Millega saame aidata', servicesTabsLabel: 'Valige teenus', repairTitle: 'HOOLDUS JA AUTOREMONT', repairShort: 'Teie auto hooldus ja remont.', diagnosticsTitle: 'DIAGNOSTIKA JA AUTOELEKTER', diagnosticsShort: 'Leiame põhjuse, et lahendada probleem.', alignmentTitle: 'SILLA REGULEERIMINE', alignmentShort: 'Täpne seadistus kindlaks sõiduks.', tiresTitle: 'REHVITÖÖD JA<br>RATASTE TASAKAALUSTAMINE', tiresShort: 'Rehvivahetus, remont ja hooajaks valmistumine.', climateTitle: 'AUTO KLIIMASEADME HOOLDUS', climateShort: 'Mugav temperatuur igal aastaajal.', gearboxTitle: 'AUTOMAATKÄIGUKASTI ÕLIVAHETUS', gearboxShort: 'Automaatkäigukasti õli vahetamine.', panelLabel: 'Tähelepanu keskmes on teie auto', carAlt: 'Avatud kapotiga autod autotöökojas', serviceBook: 'Broneeri see teenus',
    estimateLabel: 'Hoolduse maksumus', estimateTitle: 'MÕISTAME ÜLESANNET.<br>ARVESTAME TÖÖDEGA.', estimateIntro: 'Maksumus sõltub autost ja tööde mahust. Kirjeldage ülesannet — teenindus ütleb, milliseid andmeid arvutuseks vaja on.', estimateCta: 'Räägime maksumusest', estimateCarTitle: 'TEIE AUTO', estimateCar: 'Auto mark, mudel ja eripärad aitavad ülesannet täpsustada.', estimateWorkTitle: 'VAJALIKUD TÖÖD', estimateWork: 'Remont, diagnostika või hooldus — öelge, millega abi vajate.', estimateHaynesTitle: 'ARVESTUS HAYNESPRO ABIL', estimateHaynes: 'Professionaalne süsteem tööde hinna arvutamiseks ja tööaja arvestuseks.', estimateStep4Title: 'VALMISTAGE ETTE PÄRING', estimateStep4: 'Valige teenus ja kirjeldage ülesannet päringuvormis.', estimateRequest: 'Koosta hoolduspäring',
    engineAlt: 'Auto mootori metallist detailid', whyTitle: 'Miks valida RS AUTO?', whyBadge: 'Tähelepanu teie autole', aboutIntro: 'RS AUTO OÜ — sõidu- ja tarbesõidukite hooldus ning remont Jõhvis.', reasonHaynesTitle: 'Professionaalne arvestus', reasonHaynes: 'Tööde hinna ja aja arvestuseks kasutame HaynesPro veebisüsteemi.', reasonGuaranteeTitle: 'Garantii tehtud töödele', reasonGuarantee: 'Tehtud töödele ja osutatud teenustele kehtib garantii.', reasonPlaceTitle: 'Autoteenindus Jõhvis', reasonAllTitle: 'Teenused ühes kohas', reasonAll: 'Diagnostikast ja autoremondist rehvitööde ning kliimaseadme hoolduseni.',
    journeyLabel: 'Enne külastust', journeyTitle: 'ALUSTAME KOOS LIHTSA VESTLUSEGA.', journeyIntro: 'Neli lihtsat sammu enne külastust: võtke meiega ühendust, rääkige oma autost ja leppige sobiv aeg kokku.', call: 'Helista meile', step1Title: 'Võtke ühendust', step1: 'Helistage või koostage päring e-posti teel.', step2Title: 'Teie auto', step2: 'Öelge mark ja mudel. Kirjeldage ülesannet või sümptomeid.', step3Title: 'Visiidi detailid', step3: 'Arutage vajalikke töid, maksumust ja sobivat aega.', step4Title: 'Kohtume Jõhvis', step4: 'Teenindus asub aadressil Tartu mnt 30a.',
    seasonLabel: 'Hooaeg muutub. Hool jääb.', seasonTitle: 'UUS HOOAEG.<br>SAMA TÄHELEPANU.', seasonIntro: 'Rehvid, juhitavus ja salongimugavus. Arutage hooajalist hooldust aegsasti, et oma sõite rahulikult planeerida.', seasonCta: 'Vali vajalik hooldus',
    faqLabel: 'Kasulik teada', faqTitle: 'MÕNED KÜSIMUSED ENNE KÜLASTUST.', faqIntro: 'Ei leidnud vastust? Helistage — rääkige oma autost ja ülesandest.', faq1Question: 'Milliseid autosid RS AUTO hooldab?', faq1Answer: 'Teenindus tegeleb sõidu- ja tarbesõidukite tehnilise hoolduse ning remondiga.', faq2Question: 'Kuidas tööde maksumus kujuneb?', faq2Answer: 'Maksumus sõltub autost ja vajalikest töödest. RS AUTO kasutab hinna ja tööaja arvestuseks HaynesPro süsteemi. Täpsustage maksumus teenindusega ühendust võttes.', faq3Question: 'Kas töödele kehtib garantii?', faq3Answer: 'RS AUTO annab tehtud töödele ja osutatud teenustele garantii. Täpsustage tingimused remonditööde arutamisel.', faq4Question: 'Kuidas külastusaeg kokku leppida?', faq4Answer: 'Helistage numbril +372 56 178 168. Võite koostada allpool päringu ja saata selle oma e-posti kaudu aadressile info@rsauto.ee. Külastusaeg lepitakse kokku teenindusega.', faq5Question: 'Kus teenindus asub ja millal see avatud on?', faq5Answer: 'Jõhvi, Tartu mnt 30a. Esmaspäevast reedeni 09:00–18:00.',
    bookingLabel: 'VÕTKE MEIEGA ÜHENDUST', bookingTitle: 'RÄÄGIME TEIE AUTOST.', bookingTaskText: 'Kirjeldage ülesannet oma sõnadega.', bookingDescription: 'Te ei pea teadma rikke nimetust, et abi küsida.', fieldName: 'Teie nimi', placeholderName: 'Kuidas teie poole pöörduda', fieldPhone: 'Telefon', fieldCar: 'Auto mark ja mudel', placeholderCar: 'Näiteks Volkswagen Passat', fieldService: 'Vajalik teenus', fieldDate: 'Soovitud kuupäev', fieldMessage: 'Mida on vaja teha?', placeholderMessage: 'Kirjeldage ülesannet või seda, mis teile muret teeb', optionUnsure: 'Soovin nõu küsida', optionRepair: 'Hooldus ja autoremont', optionDiagnostics: 'Diagnostika ja autoelekter', optionAlignment: 'Silla reguleerimine', optionTires: 'Rehvitööd', optionClimate: 'Kliimaseade', optionGearbox: 'Automaatkäigukasti õlivahetus', prepareEmail: 'Koosta e-kiri', copyRequest: 'Kopeeri päring', formNote: 'Päring avaneb teie e-postis. Saatke kiri, et teenindus selle kätte saaks. Soovitud kuupäeva kinnitab teenindus.',
    contactsLabel: 'Kohtume Jõhvis', contactsTitle: 'KONTAKTID', contactDaysTitle: 'Töötame teie jaoks', contactHoursTitle: 'Oleme avatud', contactPhoneTitle: 'Helistage meile', contactEmailTitle: 'Kirjutage meile', contactAddressTitle: 'Meie aadress', hoursLabel: 'Esmaspäevast reedeni', route: 'Näita teekonda', facebookLabel: 'Ava Facebook', footerDescription: 'Autode remont ja hooldus', footerTop: 'Tagasi lehe algusesse ↑', backTop: 'Lehe algusesse'
  };
  const ru = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { ru[el.dataset.i18n] = el.innerHTML; });
  const attributeBindings = [['data-i18n-placeholder', 'placeholder'], ['data-i18n-alt', 'alt'], ['data-i18n-aria', 'aria-label']];
  attributeBindings.forEach(([dataAttribute, targetAttribute]) => {
    document.querySelectorAll('[' + dataAttribute + ']').forEach(el => { ru[el.getAttribute(dataAttribute)] = el.getAttribute(targetAttribute); });
  });
  const text = { ru, et };
  const serviceDescriptions = {
    ru: {
      repair: ['ТО и авторемонт', 'Обслуживание и ремонт легковых и коммерческих автомобилей. Расскажите, что нужно вашему автомобилю — начнём с этого.'],
      diagnostics: ['Диагностика и автоэлектрика', 'Поиск неисправностей в электронных системах и других узлах. Опишите симптомы, ошибки на панели или изменения в работе автомобиля.'],
      alignment: ['Развал-схождение', 'Настройка ходовой части для управляемости автомобиля. Если машину ведёт в сторону или шины изнашиваются неравномерно, обсудите регулировку с сервисом.'],
      tires: ['Шиномонтаж и балансировка', 'Сезонная замена, балансировка колёс и ремонт шин. Уточните тип работ и подходящее время для вашего автомобиля.'],
      climate: ['Обслуживание кондиционера', 'Обслуживание и ремонт системы кондиционирования. Расскажите, что изменилось: температура, поток воздуха или работа системы.'],
      gearbox: ['Замена масла в АКПП', 'Замена масла в автоматической коробке передач. Назовите модель автомобиля, чтобы сервис мог уточнить необходимые работы.']
    },
    et: {
      repair: ['Hooldus ja autoremont', 'Sõidu- ja tarbesõidukite hooldus ning remont. Rääkige, mida teie auto vajab — alustame sellest.'],
      diagnostics: ['Diagnostika ja autoelekter', 'Rikete otsing elektroonikasüsteemides ja teistes sõlmedes. Kirjeldage sümptomeid, veateateid või muutusi auto töös.'],
      alignment: ['Silla reguleerimine', 'Veermiku reguleerimine hea juhitavuse jaoks. Kui auto kaldub kõrvale või rehvid kuluvad ebaühtlaselt, arutage teenindusega reguleerimist.'],
      tires: ['Rehvitööd ja tasakaalustamine', 'Hooajaline rehvivahetus, rataste tasakaalustamine ja rehvide remont. Täpsustage vajalikud tööd ja sobiv külastusaeg.'],
      climate: ['Kliimaseadme hooldus', 'Auto kliimaseadme hooldus ja remont. Rääkige, mis on muutunud: temperatuur, õhuvool või süsteemi töö.'],
      gearbox: ['Automaatkäigukasti õlivahetus', 'Õli vahetamine automaatkäigukastis. Öelge auto mudel, et teenindus saaks vajalikud tööd täpsustada.']
    }
  };
  const servicePhotos = {
    repair: {
      src: 'assets/services-workshop-silver.png', position: '50% 50%', scale: 1,
      alt: { ru: 'Автомобили с открытыми капотами в мастерской', et: 'Avatud kapotiga autod autotöökojas' }
    },
    diagnostics: {
      src: 'assets/service-photos/mechanic.jpg', position: '50% 56%', scale: 1, archive: true,
      alt: { ru: 'Механик работает под открытым капотом автомобиля', et: 'Mehaanik töötab auto avatud kapoti all' }
    },
    alignment: {
      src: 'assets/service-photos/alignment.jpg', position: '50% 51%', scale: 1, archive: true,
      alt: { ru: 'Автомобиль на стенде развала-схождения с датчиками на колесе', et: 'Auto sillastendis, mõõteandurid rattal' }
    },
    tires: {
      src: 'assets/service-photos/workshop.jpg', position: '0% 50%', scale: 1, archive: true,
      alt: { ru: 'Колёса и зимние шины белого автомобиля в мастерской', et: 'Valge auto rattad ja talverehvid töökojas' }
    },
    climate: {
      src: 'assets/service-photos/workshop.jpg', position: '100% 50%', scale: 1, archive: true,
      alt: { ru: 'Оборудование для обслуживания автомобилей в мастерской', et: 'Autode hooldusseadmed töökojas' }
    },
    gearbox: {
      src: 'assets/service-photos/mechanic.jpg', position: '50% 42%', scale: 1.18, origin: '25% 50%', archive: true,
      alt: { ru: 'Общий снимок работы механика с автомобилем', et: 'Üldvaade mehaaniku tööst autoga' }
    }
  };
  // Preload local files once so selecting a tab does not wait for a network request.
  const photoPreloads = Array.from(new Set(Object.values(servicePhotos).map(photo => photo.src))).map(src => {
    const image = new Image();
    image.src = src;
    return image;
  });
  let language = 'ru';
  let selectedService = 'repair';
  let pendingService = selectedService;
  let serviceTransitionRunning = false;
  let serviceTransitionToken = 0;
  let serviceScrollFrame = 0;
  const tabs = Array.from(document.querySelectorAll('.service-tab'));
  let activeServiceFrame = document.querySelector('.service-frame.is-current');
  let standbyServiceFrame = document.querySelector('.service-frame.is-standby');
  const serviceFrames = [activeServiceFrame, standbyServiceFrame];
  const servicesSection = document.querySelector('.services');
  const servicesPin = document.querySelector('.services-pin');
  const servicePinQuery = window.matchMedia('(min-width: 1101px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)');
  let serviceScrollPinEnabled = servicePinQuery.matches;
  const form = document.getElementById('booking-form');
  const serviceSelect = document.getElementById('booking-service');
  const status = document.getElementById('form-status');

  function renderServiceFrame(frame, serviceKey) {
    if (!frame) return;
    const image = frame.querySelector('.service-frame-image');
    const titleElement = frame.querySelector('[data-service-title]');
    const descriptionElement = frame.querySelector('[data-service-description]');
    const isActiveFrame = frame === activeServiceFrame;
    const [title, description] = serviceDescriptions[language][serviceKey];
    const photo = servicePhotos[serviceKey];
    if (image.getAttribute('src') !== photo.src) image.src = photo.src;
    image.alt = isActiveFrame ? photo.alt[language] : '';
    image.style.objectPosition = photo.position;
    image.style.setProperty('--photo-scale', photo.scale);
    image.style.transformOrigin = photo.origin || '50% 50%';
    image.classList.toggle('is-archive-photo', Boolean(photo.archive));
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    frame.querySelectorAll('a').forEach(link => { link.tabIndex = isActiveFrame ? 0 : -1; });
  }
  function renderServiceTabs() {
    document.getElementById('service-panel').setAttribute('aria-labelledby', 'tab-' + selectedService);
    tabs.forEach(tab => {
      const active = tab.dataset.service === selectedService;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
  }
  function renderService() {
    serviceFrames.forEach(frame => renderServiceFrame(frame, selectedService));
    activeServiceFrame.setAttribute('aria-hidden', 'false');
    standbyServiceFrame.setAttribute('aria-hidden', 'true');
    renderServiceTabs();
  }
  function cancelServiceTransition() {
    serviceTransitionToken += 1;
    serviceTransitionRunning = false;
    pendingService = selectedService;
    servicesSection.classList.remove('is-service-transitioning');
    activeServiceFrame.classList.remove('is-standby', 'is-entering', 'is-entering-from-top', 'is-sliding-in');
    activeServiceFrame.classList.add('is-current', 'is-resetting');
    standbyServiceFrame.classList.remove('is-current', 'is-entering', 'is-entering-from-top', 'is-sliding-in');
    standbyServiceFrame.classList.add('is-standby', 'is-resetting');
    activeServiceFrame.setAttribute('aria-hidden', 'false');
    standbyServiceFrame.setAttribute('aria-hidden', 'true');
    activeServiceFrame.getBoundingClientRect();
    standbyServiceFrame.getBoundingClientRect();
    activeServiceFrame.classList.remove('is-resetting');
    standbyServiceFrame.classList.remove('is-resetting');
  }
  function waitForImage(image) {
    if (image.complete) return image.decode ? image.decode().catch(() => {}) : Promise.resolve();
    return new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    }).then(() => image.decode ? image.decode().catch(() => {}) : undefined);
  }
  function getServiceScrollRange() {
    const exitRunway = serviceScrollPinEnabled ? window.innerHeight : 0;
    return Math.max(1, servicesSection.offsetHeight - servicesPin.offsetHeight - exitRunway);
  }
  function transitionService(nextService) {
    if (!servicePhotos[nextService]) return;
    pendingService = nextService;
    if (serviceTransitionRunning || nextService === selectedService) return;
    serviceTransitionRunning = true;
    const token = ++serviceTransitionToken;
    const animate = async () => {
      while (token === serviceTransitionToken && pendingService !== selectedService) {
        const target = pendingService;
        const photo = servicePhotos[target];
        const incoming = standbyServiceFrame;
        const incomingImage = incoming.querySelector('.service-frame-image');
        if (incomingImage.getAttribute('src') !== photo.src) incomingImage.src = photo.src;
        renderServiceFrame(incoming, target);
        await waitForImage(incomingImage);
        if (token !== serviceTransitionToken) return;
        if (pendingService !== target) continue;

        incoming.classList.add('is-resetting');
        incoming.classList.remove('is-standby', 'is-sliding-in');
        const currentIndex = tabs.findIndex(tab => tab.dataset.service === selectedService);
        const targetIndex = tabs.findIndex(tab => tab.dataset.service === target);
        incoming.classList.toggle('is-entering-from-top', targetIndex < currentIndex);
        incoming.classList.add('is-entering');
        incoming.getBoundingClientRect();
        incoming.classList.remove('is-resetting');
        incoming.getBoundingClientRect();
        await new Promise(resolve => window.requestAnimationFrame(resolve));
        if (token !== serviceTransitionToken) return;
        servicesSection.classList.add('is-service-transitioning');
        incoming.classList.add('is-sliding-in');
        selectedService = target;
        renderServiceTabs();
        const motionDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 20 : 680;
        await new Promise(resolve => window.setTimeout(resolve, motionDuration));
        if (token !== serviceTransitionToken) return;

        servicesSection.classList.remove('is-service-transitioning');
        selectedService = target;
        activeServiceFrame.classList.remove('is-current', 'is-entering', 'is-entering-from-top', 'is-sliding-in');
        activeServiceFrame.classList.add('is-standby');
        activeServiceFrame.setAttribute('aria-hidden', 'true');
        incoming.classList.remove('is-entering', 'is-entering-from-top', 'is-sliding-in', 'is-standby');
        incoming.classList.add('is-current');
        incoming.setAttribute('aria-hidden', 'false');
        const previousFrame = activeServiceFrame;
        activeServiceFrame = incoming;
        standbyServiceFrame = previousFrame;
        renderService();
      }
      if (token === serviceTransitionToken) serviceTransitionRunning = false;
    };
    animate();
  }
  function scrollToService(index) {
    const nextService = tabs[index].dataset.service;
    if (!serviceScrollPinEnabled) {
      transitionService(nextService);
      return;
    }
    const sectionTop = window.scrollY + servicesSection.getBoundingClientRect().top;
    const scrollRange = getServiceScrollRange();
    const serviceProgress = (index + 0.5) / tabs.length;
    window.scrollTo({ top: sectionTop + scrollRange * serviceProgress, behavior: 'smooth' });
  }
  function syncServiceToScroll() {
    if (!serviceScrollPinEnabled || !tabs.length) return;
    const sectionTop = window.scrollY + servicesSection.getBoundingClientRect().top;
    const scrollRange = getServiceScrollRange();
    const progress = Math.max(0, Math.min(0.999999, (window.scrollY - sectionTop) / scrollRange));
    const activeIndex = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
    transitionService(tabs[activeIndex].dataset.service);
  }
  function queueServiceScrollSync() {
    if (serviceScrollFrame) return;
    serviceScrollFrame = window.requestAnimationFrame(() => {
      serviceScrollFrame = 0;
      syncServiceToScroll();
    });
  }
  function updateServicePinMode() {
    serviceScrollPinEnabled = servicePinQuery.matches;
    servicesSection.toggleAttribute('data-scroll-pinned', serviceScrollPinEnabled);
    queueServiceScrollSync();
  }
  function setLanguage(nextLanguage) {
    language = nextLanguage === 'et' ? 'et' : 'ru';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = text[language][el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    attributeBindings.forEach(([dataAttribute, targetAttribute]) => {
      document.querySelectorAll('[' + dataAttribute + ']').forEach(el => {
        const value = text[language][el.getAttribute(dataAttribute)];
        if (value !== undefined) el.setAttribute(targetAttribute, value);
      });
    });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    document.title = language === 'et' ? 'RS AUTO — autoteenindus Jõhvis' : 'RS AUTO — автосервис в Йыхви';
    document.querySelector('meta[name="description"]').content = language === 'et'
      ? 'RS AUTO — sõidu- ja tarbesõidukite remont, diagnostika ja hooldus Jõhvis. Tartu mnt 30a. +372 56 178 168.'
      : 'RS AUTO — ремонт, диагностика и обслуживание легковых и коммерческих автомобилей в Йыхви. Tartu mnt 30a. +372 56 178 168.';
    status.textContent = '';
    cancelServiceTransition();
    renderService();
    try { localStorage.setItem('rsauto-v4-language', language); } catch (_) { /* File previews can restrict storage. */ }
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => scrollToService(index));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      scrollToService(next);
      tabs[next].focus();
    });
  });
  window.addEventListener('scroll', queueServiceScrollSync, { passive: true });
  window.addEventListener('resize', queueServiceScrollSync);
  if (servicePinQuery.addEventListener) servicePinQuery.addEventListener('change', updateServicePinMode);
  else servicePinQuery.addListener(updateServicePinMode);
  updateServicePinMode();
  serviceFrames.forEach(frame => frame.querySelector('a').addEventListener('click', () => { serviceSelect.value = selectedService; }));

  const hero = document.querySelector('.hero');
  function fitHeroToWindow() {
    hero.style.height = Math.max(680, window.innerHeight) + 'px';
  }
  fitHeroToWindow();
  window.addEventListener('resize', fitHeroToWindow);

  const revealTargets = [document.querySelector('.manifesto'), document.querySelector('.services'), document.querySelector('.booking-intro-copy')].filter(Boolean);
  if (revealTargets.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealTargets.forEach(target => {
      target.dataset.scrollReveal = '';
      target.dataset.revealInitializing = '';
    });
    const revealOnScroll = () => {
      // Start while the heading is entering the viewport so the motion is visible
      // before the visitor has already scrolled past the text.
      const revealPoint = window.innerHeight * 0.8;
      revealTargets.forEach(target => {
        target.classList.toggle('is-revealed', target.getBoundingClientRect().top <= revealPoint);
      });
    };
    let scrollFrame = 0;
    const queueRevealCheck = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        revealOnScroll();
      });
    };
    window.addEventListener('scroll', queueRevealCheck, { passive: true });
    window.addEventListener('resize', queueRevealCheck);
    revealOnScroll();
    window.requestAnimationFrame(() => {
      revealTargets.forEach(target => { delete target.dataset.revealInitializing; });
    });
  }

  const today = new Date();
  form.elements.date.min = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  function requestText() {
    const fields = new FormData(form);
    const labels = language === 'et'
      ? ['RS AUTO — hoolduspäring', 'Nimi', 'Telefon', 'Auto', 'Teenus', 'Soovitud kuupäev', 'Ülesanne', 'Pole määratud', 'Palun kinnitage sobiv külastusaeg.']
      : ['RS AUTO — заявка на обслуживание', 'Имя', 'Телефон', 'Автомобиль', 'Услуга', 'Желаемая дата', 'Задача', 'Не указано', 'Пожалуйста, подтвердите подходящее время визита.'];
    return [labels[0], '', labels[1] + ': ' + String(fields.get('name')).trim(), labels[2] + ': ' + String(fields.get('phone')).trim(), labels[3] + ': ' + String(fields.get('car')).trim(), labels[4] + ': ' + serviceSelect.options[serviceSelect.selectedIndex].text, labels[5] + ': ' + (fields.get('date') || labels[7]), labels[6] + ': ' + (String(fields.get('message')).trim() || labels[7]), '', labels[8]].join('\n');
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const subject = language === 'et' ? 'RS AUTO — hoolduspäring' : 'RS AUTO — заявка на обслуживание';
    window.location.href = 'mailto:info@rsauto.ee?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(requestText());
    status.textContent = language === 'et'
      ? 'Kiri on ette valmistatud. Saatke see oma e-postis. Kui e-post ei avanenud, kopeerige päring või helistage meile.'
      : 'Письмо подготовлено. Отправьте его в своей почте. Если почта не открылась, скопируйте заявку или позвоните нам.';
  });
  document.getElementById('copy-request').addEventListener('click', async () => {
    if (!form.reportValidity()) return;
    let fallback;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(requestText());
      else {
        fallback = document.createElement('textarea');
        fallback.value = requestText();
        fallback.style.position = 'fixed';
        fallback.style.left = '-10000px';
        document.body.appendChild(fallback);
        fallback.select();
        if (!document.execCommand('copy')) throw new Error('Copy unavailable');
      }
      status.textContent = language === 'et' ? 'Päring on kopeeritud. Kleepige see kirja ja saatke aadressile info@rsauto.ee.' : 'Заявка скопирована. Вставьте её в письмо и отправьте на info@rsauto.ee.';
    } catch (_) {
      status.textContent = language === 'et' ? 'Kopeerimine pole selles brauseris saadaval. Kasutage nuppu „Koosta e-kiri” või helistage meile.' : 'Копирование недоступно в этом браузере. Используйте «Подготовить письмо» или позвоните нам.';
    } finally { if (fallback) fallback.remove(); }
  });
  let savedLanguage = 'ru';
  try { savedLanguage = localStorage.getItem('rsauto-v4-language') || 'ru'; } catch (_) { /* The site also works without localStorage. */ }
  setLanguage(savedLanguage);
})();
