const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  /* Nav Bar Animation */
  menu.classList.toggle("is-active");

  /* Nav bar scoll down */
  menuLinks.classList.toggle("active");
});
