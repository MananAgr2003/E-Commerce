$(function() {
    $(".HeartAnimation").click(function() {
      $(this).toggleClass("animate");
    });
  });

  var i = 1;
var j = 1;
var k = 1;
$(".plus1").click(function () {
  i++;
  $("p.num1").html(i);
});
$(".minus1").click(function () {
  i--;
  $("p.num1").html(i);
});
$(".plus2").click(function () {
  j++;
  $("p.num2").html(j);
});
$(".minus2").click(function () {
  j--;
  $("p.num2").html(j);
});
$(".plus3").click(function () {
  k++;
  $("p.num3").html(k);
});
$(".minus3").click(function () {
  k--;
  $("p.num3").html(k);
});


$("#down img").click(function () { 

    $(".content2-null").toggleClass("invisible");
 });


 
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
}





/* *******************************************************                        button click animations
********************************************************/







function changeImage1() {

    document.getElementById("cat1img").src = "img/cat1.png";
    document.getElementById("cat2img").src = "img/cat2.png";
    document.getElementById("cat3img").src = "img/cat3.png";
    document.getElementById("cat4img").src = "img/cat4.png";


}
function changeImage2() {

    document.getElementById("cat1img").src = "img/cat5.png";
    document.getElementById("cat2img").src = "img/cat6.png";
    document.getElementById("cat3img").src = "img/cat7.png";
    document.getElementById("cat4img").src = "img/cat2.png";


}
function changeImage3() {

    document.getElementById("cat1img").src = "img/cat7.png";
    document.getElementById("cat2img").src = "img/cat5.png";
    document.getElementById("cat3img").src = "img/cat2.png";
    document.getElementById("cat4img").src = "img/cat3.png";


}