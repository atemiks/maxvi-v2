import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const initPromoSlider = () => {
  new Swiper(".swiper-promo", {
    modules: [Navigation, Pagination],
    rewind: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        spaceBetween: 36,
      },
      992: {
        spaceBetween: 42,
      },
      1280: {
        spaceBetween: 50,
      },
      1536: {
        spaceBetween: 50,
      },
    },
  });
};

export default initPromoSlider;
