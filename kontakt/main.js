var navbar = document.querySelector("#navbar");
var leftnav = document.querySelector("#leftNav img");
var rightNavLinks = document.querySelectorAll("#rightNav a");
var lastOfNav = document.querySelector("#lastOfNav");

function checkScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 0.4 * window.innerHeight) {
    navbar.style.boxShadow = "0px 0px 22px 0px #313638";
    leftnav.style.fontSize = "x-large";
    leftnav.style.height = 40 + "px";

    rightNavLinks.forEach(function (link) {
      link.style.fontSize = "small";
    });

    lastOfNav.style.border = "2px solid black";
  } else {
    leftnav.style.fontSize = "xx-large";
    navbar.style.boxShadow = "none";

    leftnav.style.height = 50 + "px";

    rightNavLinks.forEach(function (link) {
      link.style.fontSize = "medium";
    });
  }
}
window.addEventListener("scroll", checkScroll);

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
  }
}
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
