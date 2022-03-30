//Preloader
const loader = document.querySelector(".loader");

//Stop Scrolling
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//Function LoadWait
const loadWait = function () {
  setTimeout(function () {
    loader.style.display = "none";
    enableScroll();
  }, 0); /* 5000 */
};

//Function Disable Scroll on Desktops
const disableScroll = function () {
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

//Fucntion Re-enable Scroll on Desktops
const enableScroll = function () {
  window.onscroll = function () {};
};

//REQUIRED (DISABLE SCROLL ON PHONES)

function initialiser() {
  loadWait();
  disableScroll();
}

initialiser();
