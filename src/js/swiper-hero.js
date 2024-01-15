import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

const initHeroSlider = () => {
  const swiperHero = new Swiper(".swiper-hero", {
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
    },
  });
};

export default initHeroSlider;
