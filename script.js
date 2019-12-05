// Google maps clip for footer - Owner: Rylie //
function myMap() { 
var mapID= { 
    center: new google.maps.LatLng(44.355000, -78.742930), 
    zoom: 5,
};
var map = new google.maps.Map(document.getElementById("googleMap"), mapID);
}

// Moving Images - Owner: Dan //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// End of Moving Images - Owner: Dan //


//Start of navbar, Owner: Lauren//
//Inspiration from https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp//
function myFunction() {
  var x = document.getElementById("Laurensnavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}