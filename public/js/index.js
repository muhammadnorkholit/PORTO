"use strict";

window.onload = () => {
  let init = () => {
    console.log("1");
    try {
      const section = document.querySelectorAll("section");
      const toggle = document.querySelector('[data-toggle="collapse"]');
      const navbar = document.querySelector(".navbar");
      const target = toggle?.dataset?.target;
      toggle.addEventListener("click", () => {
        const menu = document.querySelector(target);

        if (!navbar.classList.contains("active")) {
          navbar.classList.add("active");
        } else if (
          navbar.classList.contains("active") &&
          menu.classList.contains("active")
        ) {
          navbar.classList.remove("active");
        }
        menu.classList.toggle("active");
        document.body.style.overflow = menu.classList.contains("active")
          ? "hidden"
          : "auto";
      });

      // Mengubah kelas "active" pada navbar saat menggulir dan memanggil checkViewport
      window.onscroll = () => {
        navbar.classList.toggle("active", window.scrollY > 0);
        checkViewport();
      };

      // Toggle mode gelap/cahaya
      const modeButtons = [...document.querySelectorAll(".mode")];
      modeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // document.body.classList.toggle("dark");
          // document.body.classList.toggle("light");
          if (document.body.classList.contains("light")) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            console.log("kesatu " + document.body.classList);
          } else if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            console.log("kedua " + document.body.classList);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  init();
  let currentUrl = window.location.href;
  let intervalId;

  function startInterval() {
    intervalId = setInterval(() => {
      let url = window.location.href;
      if (currentUrl !== url) {
        currentUrl = url;
        clearInterval(intervalId); // Clear the existing interval
        init();
        init();
        // startInterval(); // Start a new interval
      }
    }, 1000);
  }

  // Call startInterval to begin the first interval
  startInterval();
};

// Fungsi untuk memeriksa apakah elemen ada dalam viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const halfHeight = rect.height / 2; // Setengah tinggi elemen
  return rect.top + halfHeight >= 0 && rect.bottom - halfHeight <= windowHeight;
}

// Memeriksa apakah elemen dalam viewport dan menambahkan kelas "active" jika ada
function checkViewport() {
  const sections = document.querySelectorAll("section"); // Ganti dengan selektor elemen Anda
  sections.forEach((section) => {
    // section.classList.toggle("active", isElementInViewport(section));
    if (isElementInViewport(section)) section.classList.add("active");
  });
}

window.addEventListener("popstate", () => {
  // Kode yang akan dijalankan saat URL berubah
});
