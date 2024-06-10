import { Dropdown } from "bootstrap";

const initDropdown = () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");
  const dropdownList = [...toggles].map(
    (dropdownToggleEl) => new Dropdown(dropdownToggleEl),
  );

  toggles.forEach((toggle) => {
    const container = toggle.closest(".dropdown");
    const dropdown = container.querySelector(".dropdown-menu");

    toggle.addEventListener("show.bs.dropdown", () => {
      dropdown.setAttribute("aria-hidden", false);
    });

    toggle.addEventListener("hide.bs.dropdown", () => {
      dropdown.setAttribute("aria-hidden", true);
    });
  });
};

export default initDropdown;
