const initSearch = () => {
  const searchToggle = document.querySelector(".search-toggle");
  const popSearchContainer = document.querySelector("#pop-search");
  const popSearchContainerBackdrop = document.querySelector(
    "#pop-search-backdrop",
  );
  const popSearchInput = document.querySelector("#pop-search-input");
  const popSearchSuggestionsContainer = document.querySelector(
    "#pop-search-suggestions",
  );

  const openSearch = () => {
    popSearchContainer.setAttribute("aria-hidden", false);
    popSearchInput.focus();
  };

  const closeSearch = () => {
    searchToggle.setAttribute("aria-expanded", false);
    popSearchContainer.setAttribute("aria-hidden", true);
  };

  const showSuggestions = () => {
    popSearchContainer.classList.add("has-suggestions");
    popSearchSuggestionsContainer.setAttribute("aria-hidden", false);
  };

  const hideSuggestions = () => {
    popSearchContainer.classList.remove("has-suggestions");
    popSearchSuggestionsContainer.setAttribute("aria-hidden", true);
  };

  if (searchToggle) {
    searchToggle.addEventListener("click", openSearch);
  }

  if (popSearchContainer) {
    popSearchContainer.addEventListener("keydown", (event) => {
      const { key } = event;

      if (key === "Escape") {
        closeSearch();
      }
    });
  }

  if (popSearchContainerBackdrop) {
    popSearchContainerBackdrop.addEventListener("click", closeSearch);
  }

  if (popSearchInput) {
    popSearchInput.addEventListener("input", (event) => {
      const valueLength = event.target.value.length;

      valueLength ? showSuggestions() : hideSuggestions();
    });
  }
};

export default initSearch;
