
var navbar = document.querySelector("#navbar");
var leftnav = document.querySelector("#leftNav img");
var rightNavLinks = document.querySelectorAll("#rightNav a");
var lastOfNav = document.querySelector("#lastOfNav");
const hamburger = document.querySelector("#hamburger");
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const hamburgerMenu = document.querySelector("#hamburgerMenu");
const logo = document.querySelector("#leftNav img");

var isHidden = true;
hamburger.addEventListener("click", hamburgerShowing);
window.addEventListener("resize", function () {
  isHidden = false;
  hamburgerShowing();
});
function hamburgerShowing() {
  if (isHidden) {
    hamburgerMenu.style.transform = "translateX(0px)";
    isHidden = false;
    document.body.style.overflow = "hidden";
    logo.style.opacity = "0%";
    hamburger.src = "../icons/close.svg";
  } else {
    hamburgerMenu.style.transform = "translateX(200%)";
    isHidden = true;
    document.body.style.overflow = "auto";
    logo.style.opacity = "100%";
    hamburger.src = "../icons/menu.svg";

    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition < 0.4 * window.innerHeight) {
    }
  }
}
