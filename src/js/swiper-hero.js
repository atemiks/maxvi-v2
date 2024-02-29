import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const initHeroSlider = () => {
  new Swiper(".swiper-hero", {
    modules: [Navigation, Pagination],
    rewind: true,
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
