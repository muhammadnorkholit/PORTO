// scrollHandler.js
const toggle = document.querySelector('[data-toggle="collapse"]');
const navbar = document.querySelector(".navbar");
const target = toggle?.dataset?.target;

const handleClick = () => {
  const menu = document.querySelector(target);
  menu.classList.toggle("active");
  document.body.style.overflow = menu.classList.contains("active")
    ? "hidden"
    : "auto";
  navbar.classList.toggle("active", !navbar.classList.contains("active"));
};

toggle.addEventListener("click", handleClick);

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const halfHeight = rect.height / 1.5;
  return rect.top + halfHeight >= 0 && rect.bottom - halfHeight <= windowHeight;
};

const checkViewport = () => {
  const sections = document.querySelectorAll("section"); // Ganti dengan selektor elemen Anda
  sections.forEach((section) => {
    section.classList.toggle("active", isElementInViewport(section));
  });
};

const handleScroll = () => {
  navbar.classList.toggle("active", window.scrollY > 0);
  checkViewport();
};

window.addEventListener("scroll", handleScroll);

const modeButtons = document.querySelectorAll(".mode");
modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });
});
