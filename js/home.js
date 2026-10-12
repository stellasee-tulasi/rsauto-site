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
    bookingLabel: 'VÕTKE MEIEGA ÜHENDUST', bookingEmailLabel: 'E-post', bookingPhoneLabel: 'Telefon', bookingSocialLabel: 'Sotsiaalmeedia', bookingFacebook: 'RS AUTO Facebookis', bookingPrompt: 'Rääkige meile oma autost ja kirjeldage ülesannet oma sõnadega.', fieldName: 'Teie nimi', placeholderName: 'Kuidas teie poole pöörduda', fieldPhone: 'Telefon', fieldCar: 'Auto mark ja mudel', placeholderCar: 'Näiteks Volkswagen Passat', fieldService: 'Vajalik teenus', fieldDate: 'Soovitud kuupäev', fieldMessage: 'Mida on vaja teha?', placeholderMessage: 'Kirjeldage ülesannet või seda, mis teile muret teeb', optionUnsure: 'Soovin nõu küsida', optionRepair: 'Hooldus ja autoremont', optionDiagnostics: 'Diagnostika ja autoelekter', optionAlignment: 'Silla reguleerimine', optionTires: 'Rehvitööd', optionClimate: 'Kliimaseade', optionGearbox: 'Automaatkäigukasti õlivahetus', prepareEmail: 'Koosta e-kiri', copyRequest: 'Kopeeri päring', formNote: 'Päring avaneb teie e-postis. Saatke kiri, et teenindus selle kätte saaks. Soovitud kuupäeva kinnitab teenindus.',
    contactsLabel: 'Kohtume Jõhvis', contactsTitle: 'KONTAKTID', contactDaysTitle: 'Töötame teie jaoks', contactHoursTitle: 'Oleme avatud', contactPhoneTitle: 'Helistage meile', contactEmailTitle: 'Kirjutage meile', hoursLabel: 'Esmaspäevast reedeni', route: 'Näita teekonda', facebookLabel: 'RS AUTO Facebookis', footerDescription: 'Autode remont ja hooldus', footerTop: 'Tagasi lehe algusesse ↑', backTop: 'Lehe algusesse'
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
  const tabs = Array.from(document.querySelectorAll('.service-tab'));
  const serviceImage = document.getElementById('selected-service-image');
  const form = document.getElementById('booking-form');
  const serviceSelect = document.getElementById('booking-service');
  const status = document.getElementById('form-status');

  function renderService() {
    const [title, description] = serviceDescriptions[language][selectedService];
    const photo = servicePhotos[selectedService];
    if (serviceImage.getAttribute('src') !== photo.src) serviceImage.src = photo.src;
    serviceImage.alt = photo.alt[language];
    serviceImage.style.objectPosition = photo.position;
    serviceImage.style.transform = 'scale(' + photo.scale + ')';
    serviceImage.style.transformOrigin = photo.origin || '50% 50%';
    serviceImage.classList.toggle('is-archive-photo', Boolean(photo.archive));
    document.getElementById('selected-service-title').textContent = title;
    document.getElementById('selected-service-description').textContent = description;
    document.getElementById('service-panel').setAttribute('aria-labelledby', 'tab-' + selectedService);
    tabs.forEach(tab => {
      const active = tab.dataset.service === selectedService;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
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
    renderService();
    try { localStorage.setItem('rsauto-v4-language', language); } catch (_) { /* File previews can restrict storage. */ }
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { selectedService = tab.dataset.service; renderService(); });
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectedService = tabs[next].dataset.service;
      renderService();
      tabs[next].focus();
    });
  });
  document.getElementById('selected-service-book').addEventListener('click', () => { serviceSelect.value = selectedService; });

  const hero = document.querySelector('.hero');
  function fitHeroToWindow() {
    hero.style.height = Math.max(680, window.innerHeight) + 'px';
  }
  fitHeroToWindow();
  window.addEventListener('resize', fitHeroToWindow);

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
