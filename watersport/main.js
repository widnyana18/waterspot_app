// slideShow
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {    
    showSlides(slideIndex += n);      
}

function currentSlide(n) {
  showSlides(slideIndex = n);      
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.querySelectorAll(".step i");
  const captionText = document.getElementById("info");
  
  if (n > slides.length) {slideIndex = slides.length}
  if (n < 1) {slideIndex = 1}       

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";      
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = "STEP " + slideIndex;
}
