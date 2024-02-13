const initAria = () => {
  const expanders = document.querySelectorAll("[aria-expanded]");

  const expandItem = (item) => {
    const target = item.getAttribute("aria-controls");
    const targetContainer = document.getElementById(target);
    const isFocusabled =
      item.getAttribute("data-controls-focusabled") === "true";

    item.setAttribute("aria-expanded", true);

    if (targetContainer) {
      targetContainer.setAttribute("aria-hidden", false);

      if (isFocusabled) {
        targetContainer.focus();
      }
    }
  };

  const collapseItem = (item) => {
    const target = item.getAttribute("aria-controls");
    const targetContainer = document.getElementById(target);

    item.setAttribute("aria-expanded", false);

    if (targetContainer) {
      targetContainer.setAttribute("aria-hidden", true);
    }
  };

  expanders.forEach((item) => {
    item.addEventListener("click", () => {
      const isExpanded = item.getAttribute("aria-expanded") === "true";
      isExpanded ? collapseItem(item) : expandItem(item);
    });
  });
};

export default initAria;
