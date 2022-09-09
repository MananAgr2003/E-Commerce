var speed = 10;
var i = 0;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {
      //Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

/*Function called on button click*/
function incNbr() {
  incEltNbr("nbr");
}

incEltNbr(
  "nbr"
); /*Call this funtion with the ID-name for that element to increase the number within*/
function animateBanner() {
  setInterval(function () {
   
    if(i == 12){
        i = 2;
    }
    if(i == 10){
        i = 3
    }
    if (i == 0) {
      setImg1();
      i = 12;
    }
    if (i == 2) {
      setImg2();
      i=10;
    }
    if (i == 3) {
      setImg3();
      i = 0;
    }
  }, 3000);
}

function setImg1() {
  $(".content1-img10").fadeOut(400, function () {
    $(".content1-img10").attr("src", "img/solarLarge.png");
    $(".content1-img10").fadeIn(400);
});
}

function setImg2() {
    $(".content1-img10").fadeOut(400, function () {
        $(".content1-img10").attr("src", "img/c1.png");
    });
    $(".content1-img10").fadeIn(400);
}

function setImg3() {
    $(".content1-img10").fadeOut(400, function () {
        $(".content1-img10").attr("src", "img/solarAlt.jpg");
        $(".content1-img10").fadeIn(400);
  });
}

function getImg1() {
  $(".imgg1").css({
    visibility: "hidden",
  });

  setTimeout(function () {
    $(".imgg1").css({
      visibility: "visible",
    });
  }, 380);

  $(".imgg1").animate({
    width: "0px",
  });

  setTimeout(function () {
    $(".content1-img10").attr("src", "img/solarLarge.png");
    $(".imgg1").animate({
      width: "100%",
    });
  }, 0);
}
function getImg2() {
  $(".imgg1").css({
    visibility: "hidden",
  });

  setTimeout(function () {
    $(".imgg1").css({
      visibility: "visible",
    });
  }, 380);

  $(".imgg1").animate({
    width: "0px",
  });

  setTimeout(function () {
    $(".content1-img10").attr("src", "img/c1.png");
    $(".imgg1").animate({
      width: "100%",
    });
  }, 0);
}
function getImg3() {
  $(".imgg1").css({
    visibility: "hidden",
  });

  setTimeout(function () {
    $(".imgg1").css({
      visibility: "visible",
    });
  }, 380);

  $(".imgg1").animate({
    width: "0px",
  });

  setTimeout(function () {
    $(".content1-img10").attr("src", "img/solarAlt.jpg");
    $(".imgg1").animate({
      width: "100%",
    });
  }, 0);
}







/* *******************************************************                    Line Animation ********************************************************/


