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
    //console.log("3 sec");
    anim();
  }, 0);

  /* 5000 */
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

/* Animation Delay */
//Animations Elements
const introLine1 = document.querySelector(".intro_content_h3");
const introLine2 = document.querySelector(".intro_content_h2");
const introLine3 = document.querySelector(".intro_content_build_h2");
const introLine4 = document.querySelector(".intro_content_p");
const contactLine1 = document.querySelector(".contact_content_h3");
const contactLine2 = document.querySelector(".contact_content_h2");
const contactLine3 = document.querySelector(".contact_content_h2");
const contactLine4 = document.querySelector(".contact_content_p");
const myWorkBtn = document.querySelector(".my_work_btn");
const navBar = document.querySelector(".navbar_menu");
const navLogo = document.getElementById("navbar_logo");
const navLogoAnim = document.querySelector(".navbar_links");

//Anim Function
const anim = function () {
  introLine1.style.animation = "moveInRight ease-in-out 1.5s 1 normal";
  introLine1.style.animationFillMode = "forwards";

  introLine2.style.animation = "moveInRight ease-in-out 1.5s 1 0.5s normal";
  introLine2.style.animationFillMode = "forwards";

  introLine3.style.animation = "moveInRight ease-in-out 1.5s 1 1s normal";
  introLine3.style.animationFillMode = "forwards";

  introLine4.style.animation = "moveInRight ease-in-out 1.5s 1 1.5s normal";
  introLine4.style.animationFillMode = "forwards";

  myWorkBtn.style.animation = "fadeIn ease-in-out 1.5s 1 2s normal";
  myWorkBtn.style.animationFillMode = "forwards";

  navBar.style.animation = "moveInDown ease-in-out 1.5s 1 0.5s normal";
  navBar.style.animationFillMode = "forwards";

  navLogo.style.animation = "moveInDown ease-in-out 1.5s 1 0.5s normal";
  navLogo.style.animationFillMode = "forwards";

  navLogoAnim.style.transition = "all 0.3 ease";
};

//Fade in on scroll & move in left to right
const faders = document.querySelectorAll(".fade-scroll");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -400px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

faders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
