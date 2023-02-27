$(window).scroll(function() {
  if ($(document).scrollTop() >= 100) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        380: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
    
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});