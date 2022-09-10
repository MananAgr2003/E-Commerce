


        let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("#subhead5-1");
            count.innerHTML=++upto;
            if(upto===2400)
            {
                clearInterval(counts);
            }
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


