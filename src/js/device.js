const initDevice = () => {
  const phoneQuery = "(max-width: 479px)";
  const phabletQuery = "(min-width: 480px) and (max-width: 639px)";
  const tabletQuery = "(min-width: 640px) and (max-width: 991px)";
  const laptopQuery = "(min-width: 992px) and (max-width: 1199px)";
  const desktopQuery = "(min-width: 1200px)";

  const phoneMatchMedia = window.matchMedia(phoneQuery);
  const phabletMatchMedia = window.matchMedia(phabletQuery);
  const tabletMatchMedia = window.matchMedia(tabletQuery);
  const laptopMatchMedia = window.matchMedia(laptopQuery);
  const desktopMatchMedia = window.matchMedia(desktopQuery);

  phoneMatchMedia.addEventListener("change", (event) => {
    window.isPhone = event.matches;
  });

  phabletMatchMedia.addEventListener("change", (event) => {
    window.isPhablet = event.matches;
  });

  tabletMatchMedia.addEventListener("change", (event) => {
    window.isTablet = event.matches;
  });

  laptopMatchMedia.addEventListener("change", (event) => {
    window.isLaptop = event.matches;
  });

  desktopMatchMedia.addEventListener("change", (event) => {
    window.isDesktop = event.matches;
  });

  window.isPhone = phoneMatchMedia.matches;
  window.isPhablet = phabletMatchMedia.matches;
  window.isTablet = tabletMatchMedia.matches;
  window.isLaptop = laptopMatchMedia.matches;
  window.isDesktop = desktopMatchMedia.matches;
};

export default initDevice;
