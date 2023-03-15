new Swiper('.swiper-container', {
    slidesPerView: 1,

    loop: false,

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        990: {
            slidesPerView: 4,
        },
    }

});