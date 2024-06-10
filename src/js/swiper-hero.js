import Swiper from "swiper";
import {EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

const initHeroSlider = () => {

  new Swiper(".swiper-hero", {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    rewind: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

export default initHeroSlider;
