//Preloader
const loader = document.querySelector(".loader");

//Stop Scrolling
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

/* //Time Variables
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000); */

//Function LoadWait
const loadWait = function () {
  setTimeout(function () {
    loader.style.display = "none";
    enableScroll();
  }, 5000);
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

//Countdown Date
let countDownDate = new Date("June 1, 2022 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  //Time Variables
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("launch").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("launch").innerHTML = "EXPIRED";
  }
}, 1000);

function initialiser() {
  loadWait();
  disableScroll();
}

initialiser();
