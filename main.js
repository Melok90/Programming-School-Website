let yes = "Yes_55";

console.log (yes);

//swiper/////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination-2",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 45,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 45,
        },
    },
});
// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//   });
