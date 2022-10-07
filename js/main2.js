let SlideIndex = 1;

showSlides(SlideIndex);

// Next/previous controls
function plusSlides1(n) {
  showSlides(SlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(SlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  console.log(i);
  console.log(n);
  if(n == 4 || n == 0){


    document.getElementById("cat1img").src = "img/cat1.png";
      document.getElementById("cat2img").src = "img/cat2.png";
      document.getElementById("cat3img").src = "img/cat3.png";
      document.getElementById("cat4img").src = "img/cat4.png";
  }
  if(n == 2){

    
    document.getElementById("cat1img").src = "img/cat5.png";
    document.getElementById("cat2img").src = "img/cat6.png";
    document.getElementById("cat3img").src = "img/cat7.png";
    document.getElementById("cat4img").src = "img/cat2.png";

  }

  if(n == 3 || n == 1){
    document.getElementById("cat1img").src = "img/cat4.png";
    document.getElementById("cat2img").src = "img/cat5.png";
    document.getElementById("cat3img").src = "img/cat7.png";
    document.getElementById("cat4img").src = "img/cat1.png";
  }
}
