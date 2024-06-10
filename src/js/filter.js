const initFilter = () => {
  const filterContainer = document.querySelector("#filter-wrapper");
  const filterCollapseToggle = document.querySelector(
    ".filter-collapse-toggle",
  );
  const filterSecondaryParams = filterContainer?.querySelectorAll(
    '[aria-expanded="false"]',
  );

  const handleFilterClose = () => {
    const filterToggles = document.querySelectorAll(".filter-toggle");

    filterToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", false);
    });

    filterContainer.setAttribute("aria-hidden", true);
  };

  const handleFilterToggleParams = () => {
    const handleExpandParams = () => {
      filterSecondaryParams.forEach((item) => {
        item.setAttribute("aria-expanded", true);
        item.setAttribute("aria-hidden", false);
      });
    };

    const handleCollapseParams = () => {
      filterSecondaryParams.forEach((item) => {
        item.setAttribute("aria-expanded", false);
        item.setAttribute("aria-hidden", true);
      });
    };

    if (filterSecondaryParams.length) {
      const isExpanded = filterSecondaryParams[0].getAttribute("aria-expanded");

      isExpanded ? handleExpandParams() : handleCollapseParams();
    }
  };

  if (filterCollapseToggle) {
    filterCollapseToggle.addEventListener("click", handleFilterToggleParams);
  }

  document.addEventListener("click", (event) => {
    const { target } = event;

    if (target.closest("#filter-close")) {
      handleFilterClose();
    }
  });
};

export default initFilter;
