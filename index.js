window.onload = () => {
  let toggle = document.querySelector('[data-toggle="collapse"]');
  let navbar = document.querySelector(".navbar");
  let target = toggle.dataset.target;
  toggle.addEventListener("click", function () {
    let menu = document.querySelector(target);
    menu.classList.toggle("active");
    if (!navbar.classList.contains("active")) navbar.classList.add("active");
    else if (navbar.classList.contains("active") && window.scrollY < 100)
      navbar.classList.remove("active");
  });

  window.onscroll = () => {
    navbar.classList.toggle("active", window.scrollY > 100);
  };
};
