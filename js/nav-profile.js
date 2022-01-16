// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {

// When the user scrolls the page, execute opaqueNav
window.onscroll = function() {opaqueNav()};


// Add the nav-opaque class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function opaqueNav() {

var nav = document.getElementById("nav");
var profile = document.getElementById("profile");
var content = document.getElementById("content");

  if (window.pageYOffset >= 60) {
    nav.classList.add("nav-opaque")
  } else {
    nav.classList.remove("nav-opaque");
  }

   if (window.pageYOffset >= 250) {
     profile.classList.add("sticky")
     content.classList.add("sticky")
    } else {
    profile.classList.remove("sticky");
    content.classList.remove("sticky");
   }
}

opaqueNav()

})
