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

  window.onscroll = () => {
    navbar.classList.toggle("active", window.scrollY > 0);
  };
};
