const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  pagination: false,
  navigation: false,
});
