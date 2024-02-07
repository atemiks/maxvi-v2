const initCardProducts = () => {
  const products = document.querySelectorAll(".card-product");
  products.forEach((product) => {
    const productImage = product.querySelector(".card-product__media");
    const productColors = product.querySelectorAll(".card-product__color");
    productColors.forEach((productColor) => {
      productColor.addEventListener("click", () => {
        // const {target} = event;
        const productTargetImageUrl = productColor.getAttribute(
          "data-product-image-url",
        );

        console.log("productImage", productImage);
        if (productImage) {
          productImage.setAttribute("src", productTargetImageUrl);
        }

        productColors.forEach((productColor) => {
          productColor.setAttribute("aria-selected", false);
        });

        productColor.setAttribute("aria-selected", true);
      });
    });
  });
};

export default initCardProducts;
