const initMegamenu = () => {
  const megamenuContainer = document.querySelector("#megamenu");

  if (megamenuContainer) {
    const tabs = megamenuContainer.querySelectorAll('[role="tab"]');
    const panels = megamenuContainer.querySelectorAll('[role="tabpanel"]');
    let activeTab = megamenuContainer.querySelector(
      '[role="tab"][aria-selected="true"]',
    );
    let timeout;

    tabs.forEach((tab) => {
      tab.addEventListener("mouseover", (event) => {
        timeout = setTimeout(() => {
          const target = event.target.closest('[role="tab"]');
          const targetPanelId = target.getAttribute("aria-controls");
          if (target !== activeTab) {
            activeTab = target;

            tabs.forEach((tab) => {
              tab.setAttribute("aria-selected", false);
            });

            panels.forEach((panel) => {
              panel.setAttribute("aria-hidden", true);

              if (panel.id === targetPanelId) {
                panel.setAttribute("aria-hidden", false);
              }
            });

            target.setAttribute("aria-selected", true);
          }
        }, 100);
      });

      tab.addEventListener("mouseleave", (event) => {
        clearTimeout(timeout);
      });
    });
  }
};

export default initMegamenu;
