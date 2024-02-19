var navbar = document.querySelector('#navbar');
var leftnav = document.querySelector('#leftNav');
var rightNavLinks = document.querySelectorAll('#rightNav a');
var lastOfNav = document.querySelector('#lastOfNav');

function checkScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 0.4 * window.innerHeight) {
    navbar.style.boxShadow = "0px 0px 22px 0px #313638";
    leftnav.style.fontSize = "x-large";

    rightNavLinks.forEach(function(link) {
      link.style.fontSize = "small";
    });

    lastOfNav.style.border = "2px solid black";
  } else {
    leftnav.style.fontSize = "xx-large";
    navbar.style.boxShadow = "none";


    rightNavLinks.forEach(function(link) {
      link.style.fontSize = "medium";

    });

  }
}

window.addEventListener('scroll', checkScroll);

