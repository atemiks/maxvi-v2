import Swiper from "swiper";
import { Thumbs, Navigation } from "swiper/modules";

const initProduct = () => {
  const productGalleryContainer = document.querySelector(
    ".swiper-product-gallery",
  );
  const productThumbsContainer = document.querySelector(
    ".swiper-product-thumbs",
  );

  if (productGalleryContainer && productThumbsContainer) {
    const productThumbsSlider = new Swiper(productThumbsContainer, {
      modules: [Navigation],
      slidesPerView: 3,
      rewind: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          direction: "vertical",
        },
      },
    });

    new Swiper(productGalleryContainer, {
      modules: [Thumbs],
      slidesPerView: 1,
      rewind: true,
      thumbs: {
        swiper: productThumbsSlider,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
};

export default initProduct;
