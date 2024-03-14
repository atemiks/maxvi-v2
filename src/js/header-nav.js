const initHeaderNav = () => {
  const headerNav = document.querySelector("#header-nav");

  if (headerNav) {
    const headerNavItems = headerNav.querySelectorAll(".group\\/item");
    let activeItemIndex = undefined;
    let timeoutNav = undefined;
    let timeoutSubnav = undefined;

    headerNav.addEventListener("mouseover", () => {
      clearTimeout(timeoutNav);
    });

    headerNav.addEventListener("mouseleave", () => {
      timeoutNav = setTimeout(() => {
        clearTimeout(timeoutSubnav);
        activeItemIndex = undefined;

        headerNavItems.forEach((item) => {
          item.classList.remove("hover");
        });
      }, 300);
    });

    headerNavItems.forEach((item, index) => {
      item.setAttribute("data-item-index", index);

      item.addEventListener("mouseover", (event) => {
        clearTimeout(timeoutSubnav);

        timeoutSubnav = setTimeout(() => {
          const targetItem = event.target.closest(".group\\/item");
          const targetItemIndex = targetItem.getAttribute("data-item-index");

          if (targetItemIndex !== activeItemIndex) {
            activeItemIndex = targetItemIndex;

            headerNavItems.forEach((item) => {
              item.classList.remove("hover");
            });

            item.classList.add("hover");
          }
        }, 300);
      });

      item.addEventListener("mouseleave", () => {
        clearTimeout(timeoutSubnav);
      });
    });
  }
};

export default initHeaderNav;
