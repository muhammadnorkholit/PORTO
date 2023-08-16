window.onload = () => {
  let toggle = document.querySelector('[data-toggle="collapse"]');
  let navbar = document.querySelector(".navbar");
  let target = toggle.dataset.target;

  toggle.addEventListener("click", function () {
    let menu = document.querySelector(target);
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (!navbar.classList.contains("active")) navbar.classList.add("active");
    else if (navbar.classList.contains("active") && window.scrollY < 0)
      navbar.classList.remove("active");
  });

  // cek element ada di viewport
  // Fungsi untuk memeriksa apakah elemen ada dalam viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    var halfHeight = rect.height / 1.5; // Setengah tinggi elemen
    return (
      rect.top + halfHeight >= 0 && rect.bottom - halfHeight <= windowHeight
    );
  }

  // Contoh penggunaan

  function cekViewport() {
    var sect = document.querySelectorAll("section"); // Ganti dengan selektor elemen Anda
    sect.forEach((s) => {
      if (isElementInViewport(s)) {
        // Elemen ada dalam viewport
        s.classList.add("active");
      } else {
        // Elemen tidak ada dalam viewport
        // s.classList.remove("active");
      }
    });
  }

  window.onscroll = () => {
    navbar.classList.toggle("active", window.scrollY > 0);
    cekViewport();
  };

  let mode = document.querySelectorAll(".mode");
  mode.forEach((m) => {
    m.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");
    });
  });
};
