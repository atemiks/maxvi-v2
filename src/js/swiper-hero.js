import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const initHeroSlider = () => {
  const swiperHero = new Swiper(".swiper-hero", {
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

export default initHeroSlider;
