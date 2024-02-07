const initHeaderNav = () => {
  const headerNav = document.querySelector("#header-nav");
  const headerNavItems = headerNav.querySelectorAll(".group\\/item");
  let activeItemIndex = undefined;
  let timeout = undefined;

  headerNav.addEventListener("mouseleave", (event) => {
    activeItemIndex = undefined;
    timeout = undefined;

    headerNavItems.forEach((item) => {
      item.classList.remove("hover");
    });
  });

  headerNavItems.forEach((item, index) => {
    item.setAttribute("data-item-index", index);

    item.addEventListener("mouseover", (event) => {
      timeout = setTimeout(() => {
        const targetItem = event.target.closest(".group\\/item");
        const targetItemIndex = targetItem.getAttribute("data-item-index");

        if (targetItemIndex !== activeItemIndex) {
          activeItemIndex = targetItemIndex;

          headerNavItems.forEach((item) => {
            item.classList.remove("hover");
          });

          item.classList.add("hover");
        }
      }, 100);
    });

    item.addEventListener("mouseleave", (event) => {
      clearTimeout(timeout);
    });
  });
};

export default initHeaderNav;
