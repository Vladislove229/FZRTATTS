// Функция для показа/скрытия заставки
function showLoader() {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    loader.classList.remove('hidden');
  }
}

function hideLoader() {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

// Показываем заставку при начале перехода
document.addEventListener('DOMContentLoaded', function() {
  // Скрываем заставку после загрузки страницы
  setTimeout(hideLoader, 800);
  
  // Обработка навигации
  document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
    link.addEventListener('click', function(e) {
      // Для внутренних ссылок показываем заставку
      if (this.href && this.href.includes(window.location.origin)) {
        e.preventDefault();
        showLoader();
        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      }
    });
  });
});
    // Год в футере
    document.getElementById('year').textContent = new Date().getFullYear();

    // Прогресс-бар скролла
    const progress = document.querySelector('.progress');
    document.addEventListener('scroll', () => {
      const sTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = Math.max(0, Math.min(1, sTop / docH));
      progress.style.width = `${ratio * 100}%`;
    });

    // Данные для галереи с наборами изображений
    const sets = [
      { 
        id: 'set 1',
        label: 'Set 1', 
        tag: 'new',
        images: [
          'img/1/1.CR2',
        ]
      },
      { 
        id: 'set 2',
        label: 'Set 2', 
        images: [
          'img/1/2.CR2',
        ]
      },
      { 
        id: 'set 3',
        label: 'Set 3', 
        images: [
          'img/1/3.JPG',
        ]
      },
      { 
        id: 'set 4',
        label: 'Set 4', 
        images: [
          'img/1/4.JPG',
        ]
      },
      { 
        id: 'set 5',
        label: 'Set 5', 
        images: [
          'img/1/5.JPG',
        ]
      },
      { 
        id: 'set 6',
        label: 'Set 6', 
        images: [
          'img/1/6.JPG',
        ]
      },
      { 
        id: 'set 7',
        label: 'Set 7', 
        images: [
          'img/1/7.JPG',
        ]
      },
      { 
        id: 'set 8',
        label: 'Set 8', 
        images: [
          'img/1/8.JPG',
        ]
      },
      { 
        id: 'set 9',
        label: 'Set 9', 
        images: [
          'img/1/9.JPG',
        ]
      },
      { 
        id: 'set 10',
        label: 'Set 10', 
        images: [
          'img/1/10.JPG',
        ]
      },
      { 
        id: 'set 11',
        label: 'Set 11', 
        images: [
          'img/1/11.JPG',
        ]
      },
      { 
        id: 'set 12',
        label: 'Set 12', 
        images: [
          'img/1/12.JPG',
        ]
      },
      { 
        id: 'set 13',
        label: 'Set 13', 
        images: [
          'img/1/13.JPG',
        ]
      },
      { 
        id: 'set 14',
        label: 'Set 14', 
        images: [
          'img/1/14.JPG',
        ]
      },
      { 
        id: 'set 15',
        label: 'Set 15', 
        images: [
          'img/1/15.JPG',
        ]
      },
      { 
        id: 'set 16',
        label: 'Set 16', 
        images: [
          'img/1/16.JPG',
        ]
      },
      { 
        id: 'set 17',
        label: 'Set 17', 
        images: [
          'img/1/17.JPG',
        ]
      },
      { 
        id: 'set 18',
        label: 'Set 18', 
        images: [
          'img/1/18.JPG',
        ]
      },
      { 
        id: 'set 19',
        label: 'Set 19', 
        images: [
          'img/1/19.JPG',
        ]
      },
      { 
        id: 'set 20',
        label: 'Set 20', 
        images: [
          'img/1/20.JPG',
        ]
      }
    ];

    // Данные для паков эскизов
    const sketchPacks = [
      {
        id: 'floral',
        title: 'NAME',
        cover: 'img/9/11.png',
        images: [
          'img/7/photo_2025-08-21_12-43-02.jpg',
          'img/7/photo_2025-08-21_12-43-06.jpg',
          'img/7/photo_2025-08-21_12-43-09.jpg',
          'img/7/photo_2025-08-21_12-43-11.jpg',
          'img/7/photo_2025-08-21_12-43-14.jpg',
          'img/7/photo_2025-08-21_12-43-17.jpg',
          'img/7/photo_2025-08-21_12-43-19.jpg',
        ]
      },
      {
        id: 'animals',
        title: 'NAME',
        cover: 'img/9/2.png',
        images: [
          'img/6/photo_2025-08-21_12-42-35.jpg',
          'img/6/photo_2025-08-21_12-42-38.jpg',
          'img/6/photo_2025-08-21_12-42-41.jpg',
          'img/6/photo_2025-08-21_12-42-43.jpg',
        ]
      },
      {
        id: 'geometric',
        title: 'NAME',
        cover: 'img/9/33.png',
        images: [
          'img/10/1.png',
          'img/10/2.png',
          'img/10/3.png',
          'img/10/4.png',
          'img/10/5.png',
          'img/10/6.png',
          'img/10/7.png',
        ]
      },
      {
        id: 'lettering',
        title: 'NAME',
        cover: 'img/9/44.png',
        images: [
          'img/11/1.png',
          'img/11/2.png',
          'img/11/3.png',
          'img/11/4.png',
          'img/11/5.png',
          'img/11/6.png',
          'img/11/7.png',
          'img/11/8.png',
        ]
      },
      {
        id: 'tribal',
        title: 'NAME',
        cover: 'img/9/55.png',
        images: [
          'img/5/1.jpg',
          'img/5/2.jpg',
          'img/5/3.jpg',
          'img/5/4.jpg',
          'img/5/5.jpg',
        ]
      }
    ];

    // Переменные для слайдера
    let currentSet = null;
    let currentIndex = 0;

    // Рендер галереи
    const galleryContainer = document.getElementById('galleryContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    
    // Функция для скрытия части работ на мобильных устройствах
    function setupMobileGallery() {
      const galleryItems = document.querySelectorAll('.card-sketch');
      
      // Проверяем, мобильное ли устройство
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile && galleryItems.length > 4) {
        // Скрываем все элементы, кроме первых 6
        galleryItems.forEach((item, index) => {
          if (index >= 4) {
            item.classList.add('mobile-hidden');
          }
        });
        
        // Показываем кнопку "Загрузить еще"
        loadMoreContainer.style.display = 'flex';
      } else {
        // На десктопе показываем все элементы и скрываем кнопку
        galleryItems.forEach(item => {
          item.classList.remove('mobile-hidden');
        });
        loadMoreContainer.style.display = 'none';
      }
    }
    
    // Обработчик для кнопки "Загрузить еще"
    loadMoreBtn.addEventListener('click', () => {
      const hiddenItems = document.querySelectorAll('.card-sketch.mobile-hidden');
      hiddenItems.forEach(item => {
        item.classList.remove('mobile-hidden');
      });
      loadMoreContainer.style.display = 'none';
    });
    
    // Создаем элементы галереи
    sets.forEach(set => {
      const card = document.createElement('figure');
      card.className = 'card-sketch';
      card.innerHTML = `
        <img src="${set.images[0]}" alt="${set.label}" loading="lazy" />
        <div class="paper"></div>
        <figcaption class="label">${set.label}</figcaption>
        ${set.tag ? `<div class="tag">${set.tag}</div>` : ''}
      `;
      card.addEventListener('click', () => openSlider(set, 0));
      galleryContainer.appendChild(card);
    });
    
    // Настраиваем мобильную галерею после загрузки элементов
    setTimeout(() => {
      setupMobileGallery();
    }, 100);
    
    // Также настраиваем при изменении размера окна
    window.addEventListener('resize', setupMobileGallery);

    // Рендер паков эскизов
    const sketchesContainer = document.getElementById('sketchesContainer');
    sketchPacks.forEach(pack => {
      const packElement = document.createElement('div');
      packElement.className = 'sketch-pack';
      packElement.innerHTML = `
        <img src="${pack.cover}" alt="${pack.title}" />
        <div class="sketch-pack-info">
          <h3 class="sketch-pack-title">${pack.title}</h3>
          <div class="sketch-pack-count">${pack.images.length} эскизов</div>
        </div>
      `;
      packElement.addEventListener('click', () => openSlider(pack, 0));
      sketchesContainer.appendChild(packElement);
    });

    // Функция открытия слайдера
    function openSlider(set, index) {
      currentSet = set;
      currentIndex = index;
      updateSlider();
      openLightbox();
    }

    // Функция обновления слайдера
    function updateSlider() {
      if (!currentSet) return;
      
      const lbImg = document.querySelector('.lightbox-img');
      const counter = document.querySelector('.lightbox-counter');
      const prevBtn = document.querySelector('.lightbox-prev');
      const nextBtn = document.querySelector('.lightbox-next');
      
      lbImg.src = currentSet.images[currentIndex];
      lbImg.alt = currentSet.label || currentSet.title;
      counter.textContent = `${currentIndex + 1} / ${currentSet.images.length}`;
      
      // Показываем/скрываем стрелки в зависимости от позиции
      prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
      nextBtn.style.display = currentIndex === currentSet.images.length - 1 ? 'none' : 'flex';
    }

    // Функции навигации по слайдеру
    function nextImage() {
      if (currentSet && currentIndex < currentSet.images.length - 1) {
        currentIndex++;
        updateSlider();
      }
    }

    function prevImage() {
      if (currentSet && currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    }

    // Лайтбокс
    const lightbox = document.getElementById('lightbox');
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbClose = lightbox.querySelector('.lightbox-close');
    const lbPrev = lightbox.querySelector('.lightbox-prev');
    const lbNext = lightbox.querySelector('.lightbox-next');

    function openLightbox() {
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      currentSet = null;
      currentIndex = 0;
    }
    
    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', prevImage);
    lbNext.addEventListener('click', nextImage);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    
    // Обработка клавиатуры
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('is-open')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    });

    // Бургер-меню
    const burger = document.getElementById('burger');
    const nav = document.getElementById('mainNav');

    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
    });

    // Переключение между основной страницей и страницей эскизов
    const sketchesLink = document.getElementById('sketchesLink');
    const mainContent = document.getElementById('main-content');
    const sketchesPage = document.getElementById('sketches-page');
    const backButton = document.getElementById('backButton');

    sketchesLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.style.display = 'none';
      sketchesPage.classList.add('active');
      window.scrollTo(0, 0);
    });

    backButton.addEventListener('click', () => {
      sketchesPage.classList.remove('active');
      mainContent.style.display = 'block';
      window.scrollTo(0, 0);
    });

    // Модальное окно записи
    const bookingModal = document.getElementById('bookingModal');
    const modalClose = document.getElementById('modalClose');
    const bookBtns = document.querySelectorAll('.book-btn');
    const bookingForm = document.getElementById('bookingForm');
    const formMessage = document.getElementById('formMessage');

    bookBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        bookingModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    modalClose.addEventListener('click', () => {
      bookingModal.classList.remove('is-open');
      document.body.style.overflow = '';
    });

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Имитация отправки формы
      formMessage.textContent = document.querySelector('[data-i18n="modal.success"]').textContent;
      formMessage.className = 'form-message success';
      formMessage.classList.remove('hidden');
      
      // Очистка формы через 3 секунды
      setTimeout(() => {
        bookingForm.reset();
        formMessage.classList.add('hidden');
        bookingModal.classList.remove('is-open');
        document.body.style.overflow = '';
      }, 3000);
    });

    // Мультиязычность
    const translations = {
      ru: {
        "nav.work": "Портфолио",
        "nav.sketches": "Эскизы",
        "nav.school": "Улуги",
        "nav.camp": "Сертификат",
        "nav.merch": "Заживление",
        "nav.book": "Записаться",
        "hero.line1": "на связи",
        "hero.line2": "FZRTATTS—",
        "hero.p1": "индивидуальные эскизы, графические линии и внимание к деталям",
        "hero.p2": "Приходи ко мне за твоей татуировкой!",
        "button.book": "Записаться",
        "button.portfolio": "Смотреть работы",
        "button.loadMore": "Загрузить еще",
        "claim.line1": "эскиз татуировки,",
        "claim.line2": "созданный под твои желания",
        "sections.school.title": "Как выбрать первую татуировку?",
        "sections.school.description": "Индивидуальные и групповые занятия по рисунку, эскизам, гигиене и технике.",
        "sections.school.button": "Читать статью→",
        "sections.camp.title": "Как подготовиться к сеансу татуировки?",
        "sections.camp.description": "Выезды и гостевые сессии. Следи за анонсами — будут новые города.",
        "sections.camp.button": "Читать статью→",
        "sections.merch.title": "Расчитать стоимость своей тату",
        "sections.merch.description": "Принты, стикеры, худи. Пока в разработке.",
        "sections.merch.button": "Расчитать→",
        "info.about.title": "Обо мне",
        "info.about.p1": "Меня зовут Марьям, и я делаю татуировки в Казани. Опыт работы 2 года",
        "info.about.list1": "Стерильные одноразовые расходники",
        "info.about.list2": "Консультация и подбор размера/расположения",
        "info.about.list3": "Сопровождение заживления",
        "info.contacts.title": "Контакты",
        "info.contacts.description": "Лучше писать в Telegram — отвечаю быстрее:",
        "info.contacts.email": "или email: you@example.com",
        "footer.copyright": "Тату мастер",
        "footer.about": "О нас",
        "footer.privacy": "Политика",
        "footer.terms": "Условия",
        "modal.title": "Запись на сессию",
        "modal.name": "Имя",
        "modal.contact": "Telegram или телефон",
        "modal.service": "Услуга",
        "modal.service.tattoo": "Татуировка",
        "modal.service.school": "Обучение",
        "modal.service.camp": "Tattoo Camp",
        "modal.service.other": "Другое",
        "modal.description": "Опишите вашу идею",
        "modal.submit": "Отправить заявку",
        "modal.success": "Заявка отправлена! Скоро свяжусь с вами.",
        "sketches.title": "Эскизы",
        "sketches.back": "Назад"
      },
      en: {
        "nav.work": "Portfolio",
        "nav.sketches": "Sketches",
        "nav.school": "Services",
        "nav.camp": "Certificate",
        "nav.merch": "Healing",
        "nav.book": "Book Session",
        "hero.line1": "hello there,",
        "hero.line2": "tattoo artist here, can you hear me?",
        "hero.p1": "I create tattoos based on my own designs: each one is unique and done only once. I can adapt any idea to your body and style.",
        "hero.p2": "By the way, you can book not only a tattoo session but also training.",
        "button.book": "Book Session",
        "button.portfolio": "View Portfolio",
        "button.loadMore": "Load More",
        "claim.line1": "tattoo sketch",
        "claim.line2": "created just for you",
        "sections.school.title": "How to choose your first tattoo?",
        "sections.school.description": "Individual and group classes in drawing, sketches, hygiene and technique.",
        "sections.school.button": "Read article→",
        "sections.camp.title": "How to prepare for a tattoo session?",
        "sections.camp.description": "Guest sessions and trips. Follow announcements - new cities coming soon.",
        "sections.camp.button": "Read article→",
        "sections.merch.title": "Calculate tattoo cost",
        "sections.merch.description": "Prints, stickers, hoodies. Coming soon.",
        "sections.merch.button": "Calculate→",
        "info.about.title": "About Me",
        "info.about.p1": "My name is Maryam, and I do tattoos in Kazan. 2 years of experience",
        "info.about.list1": "Sterile disposable supplies",
        "info.about.list2": "Consultation and size/placement selection",
        "info.about.list3": "Healing support",
        "info.contacts.title": "Contacts",
        "info.contacts.description": "Better to write on Telegram - I respond faster:",
        "info.contacts.email": "or email: you@example.com",
        "footer.copyright": "Tattoo Artist",
        "footer.about": "About",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "modal.title": "Book a Session",
        "modal.name": "Name",
        "modal.contact": "Telegram or Phone",
        "modal.service": "Service",
        "modal.service.tattoo": "Tattoo",
        "modal.service.school": "Training",
        "modal.service.camp": "Tattoo Camp",
        "modal.service.other": "Other",
        "modal.description": "Describe your idea",
        "modal.submit": "Submit Request",
        "modal.success": "Request sent! I'll contact you soon.",
        "sketches.title": "Sketches",
        "sketches.back": "Back"
      }
    };

    // Установка языка
    function setLanguage(lang) {
      // Обновляем активную кнопку
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
      
      // Обновляем атрибут lang
      document.documentElement.lang = lang;
      
      // Обновляем все элементы с атрибутом data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      
      // Сохраняем язык в localStorage
      localStorage.setItem('preferredLanguage', lang);
    }

    // Инициализация языка
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 
                              (navigator.language.startsWith('ru') ? 'ru' : 'en');
    setLanguage(preferredLanguage);

    // Обработчики переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    // Закрытие меню при клике на ссылку (для мобильных)
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
      });
    });