const initFilter = () => {
  const fitlerContainer = document.querySelector("#filter-wrapper");
  const filterToggle = document.querySelector("#filter-toggle");
  const filterClose = document.querySelector("#filter-close");
  const filterCollapseToggle = document.querySelector(
    ".filter-collapse-toggle",
  );
  const filterSecondaryParams = fitlerContainer?.querySelectorAll(
    '[aria-expanded="false"]',
  );

  const handleFilterOpen = () => {
    fitlerContainer.setAttribute("aria-hidden", false);
  };

  const handleFilterClose = () => {
    fitlerContainer.setAttribute("aria-hidden", true);
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

  if (filterToggle) {
    filterToggle.addEventListener("click", handleFilterOpen);
  }

  if (filterClose) {
    filterClose.addEventListener("click", handleFilterClose);
  }

  if (filterCollapseToggle) {
    filterCollapseToggle.addEventListener("click", handleFilterToggleParams);
  }
};

export default initFilter;
