let swiper = new Swiper(document.querySelector('.mySwiper'), {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: 'fade',
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
        enabled: true,
        elay: 1,
    },
    loop: true,
});