// assets/js/main.js
(() => {
  // Run after DOM is ready so element lookups are safe
  const onReady = (fn) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  };

  onReady(() => {
    try {
      const body = document.body;
      const lamp = document.getElementById("mode"); // theme toggle
      const cbox = document.getElementById("menu-trigger"); // menu checkbox
      const area = document.querySelector(".wrapper");

      const currentData = body ? body.getAttribute("data-theme") : null;

      const initTheme = (state) => {
        if (!body) return;
        if (state === "dark") {
          body.setAttribute("data-theme", "dark");
        } else if (state === "light") {
          body.removeAttribute("data-theme");
        } else {
          // fallback - persist the existing data-theme if present
          if (currentData) localStorage.setItem("theme", currentData);
        }
      };

      const toggleTheme = (state) => {
        if (!body) return;
        if (state === "dark") {
          localStorage.setItem("theme", "light");
          body.removeAttribute("data-theme");
        } else if (state === "light") {
          localStorage.setItem("theme", "dark");
          body.setAttribute("data-theme", "dark");
        } else {
          initTheme(state);
        }
      };

      // Initialize theme from localStorage (if available)
      initTheme(localStorage.getItem("theme"));

      // Only attach listener if toggle element exists
      if (lamp) {
        lamp.addEventListener("click", () =>
          toggleTheme(localStorage.getItem("theme"))
        );
      }

      // Menu blur handling — only if checkbox and area exist
      if (cbox && area) {
        cbox.addEventListener("change", function () {
          this.checked ? area.classList.add("blurry") : area.classList.remove("blurry");
        });
      }
    } catch (err) {
      // Avoid breaking the rest of the page if something unexpected happens
      console.warn("main.js error:", err);
    }
  });
})();
