import Swiper, { Navigation, Pagination } from 'swiper';

(function () {
  Swiper.use([Navigation, Pagination]);

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    noSwiping: false,
    slideActiveClass: 'slider_active',
    breakpoints: {
      1366: {
        noSwiping: true,
      },
    },

    pagination: {
      el: '.slider-pagination',
      type: 'bullets',
      bulletElement: 'li',
      bulletClass: 'slider-pagination__bullet',
      bulletActiveClass: 'slider-pagination__bullet_active',
      clickableClass: 'slider-pagination__bullet_clickable',
      horizontalClass: 'slider-pagination_horizontal',
      clickable: true,
      totalClass: 'slider-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 5,
    },

    navigation: {
      prevEl: '.btn.btn-slider.btn-arrow.btn-arrow_slider-prev',
      nextEl: '.btn.btn-slider.btn-arrow.btn-arrow_slider-next',
      lockClass: 'btn-slider_lock',
      disabledClass: 'btn-arrow_slider-disabled',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})();
