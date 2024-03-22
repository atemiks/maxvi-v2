import Swiper from "swiper";
import { Thumbs, Navigation, EffectFade } from "swiper/modules";
import { endpoint } from "/src/js/API.js";

const initProduct = () => {
  const initProductGallery = () => {
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
        spaceBetween: 16,
        rewind: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            spaceBetween: 0,
            direction: "vertical",
          },
        },
      });

      new Swiper(productGalleryContainer, {
        modules: [Thumbs, EffectFade],
        slidesPerView: 1,
        rewind: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: productThumbsSlider,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  };

  // TODO: change product color
  const initProductColors = () => {
    // const productColors = document.querySelectorAll(".group\\/color");
    // const fetchProductGallery = async (color) => {
    //   const response = await fetch(`${endpoint}/product`);
    //   console.log("response", response);
    // };
    // productColors.forEach((productControl) => {
    //   productControl.addEventListener("click", () => {
    //     const color = productControl.getAttribute("data-color");
    //     if (color) {
    //       fetchProductGallery();
    //     }
    //   });
    // });
  };

  const initProductBuyPopup = () => {
    const productBuyCotainer = document.querySelector(".product-buy");
    const productBuyToggle = document.querySelector(".product-buy__toggle");
    const productPartners = document.querySelector("#product-partners");

    if (productBuyCotainer && productBuyToggle && productPartners) {
      productBuyCotainer.addEventListener("mouseleave", () => {
        productBuyToggle.setAttribute("aria-expanded", false);
        productPartners.setAttribute("aria-hidden", true);
      });
    }
  };

  initProductGallery();
  initProductColors();
  initProductBuyPopup();
};

export default initProduct;
