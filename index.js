let menuBtn = document.getElementById("hamb-btn");
let headerNav = document.getElementById("header-nav");
let hambIcon = document.getElementById("hamb-icon");
let isOpened = false;
menuBtn.addEventListener("click", () => {
  hambIcon.src = isOpened
    ? "images/icon-hamburger.svg"
    : "images/icon-close.svg";

  headerNav.classList.toggle("open-menu");
  isOpened = !isOpened;
});
