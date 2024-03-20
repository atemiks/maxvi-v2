import Swiper from "swiper";
import { Thumbs, Navigation, EffectFade } from "swiper/modules";

const initLoyaltySlider = () => {
  const loyaltyContainer = document.querySelector(".section-loyalty");
  const loyaltySliderContainer = document.querySelector(".swiper-loyalty");
  const loyaltyDate = document.querySelector("#loyalty-date-select");

  if (loyaltyContainer && loyaltySliderContainer) {
    const loyaltySwiper = new Swiper(loyaltySliderContainer, {
      modules: [Navigation],
      slidesPerView: 1,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-loyalty-button-next",
        prevEl: ".swiper-loyalty-button-prev",
      },
      on: {
        slideChange: (swiper) => {
          loyaltyDate.value = swiper.realIndex;
        },
      },
    });

    loyaltyDate.addEventListener("change", (event) => {
      loyaltySwiper.slideTo(event.target.value);
    });

    loyaltySwiper.slides.forEach((slide) => {
      const loyaltyMonths = slide.querySelector(".swiper-loyalty-months");
      const loyaltyPanels = slide.querySelector(".swiper-loyalty-panels");

      if (loyaltyMonths && loyaltyPanels) {
        const monthsSwiper = new Swiper(loyaltyMonths, {
          modules: [Navigation],
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
          rewind: true,
          nested: true,
          navigation: {
            nextEl: ".swiper-loyalty-months-button-next",
            prevEl: ".swiper-loyalty-months-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 16,
            },
          },
        });

        new Swiper(loyaltyPanels, {
          modules: [Thumbs, EffectFade],
          slidesPerView: 1,
          rewind: true,
          nested: true,
          allowTouchMove: false,
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          thumbs: {
            swiper: monthsSwiper,
          },
        });
      }
    });
  }
};

export default initLoyaltySlider;
