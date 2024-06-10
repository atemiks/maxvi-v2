const initAria = () => {
  const toggleExpander = (toggle) => {
    console.log("toggleExpander", toggle);
    const target = toggle.getAttribute("aria-controls");
    const targetContainer = document.getElementById(target);
    const toggleExpandedText = toggle.getAttribute("data-expanded-text");
    const toggleCollapsedText = toggle.getAttribute("data-collapsed-text");
    const toggleTargetInject =
      toggle.querySelector("[data-target-inject]") || toggle;
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    const expand = () => {
      toggle.setAttribute("aria-expanded", true);

      if (toggleCollapsedText) {
        toggleTargetInject.textContent = toggleCollapsedText;
      }

      if (targetContainer) {
        targetContainer.setAttribute("aria-hidden", false);
        targetContainer.focus();
      }
    };

    const collapse = () => {
      toggle.setAttribute("aria-expanded", false);

      if (toggleExpandedText) {
        toggleTargetInject.textContent = toggleExpandedText;
      }

      if (targetContainer) {
        targetContainer.setAttribute("aria-hidden", true);
      }
    };

    isExpanded ? collapse() : expand();
  };

  document.addEventListener("click", (event) => {
    console.log("document addEventListener", event);

    const { target } = event;
    const toggle = target.closest("[aria-expanded]:not([data-bs-toggle])");

    if (toggle) {
      toggleExpander(toggle);
    }
  });
};

export default initAria;
