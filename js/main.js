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

$("#c3-categories-img1 img").hover(
  function () {
    $("#cat-1-div1").css("width", "100%");
  },
  function () {
    $("#cat-1-div1").css("width", "0%");
  }
);
$("#c3-categories-img2 img").hover(
  function () {
    $("#cat-1-div2").css("width", "100%");
  },
  function () {
    $("#cat-1-div2").css("width", "0%");
  }
);
$("#c3-categories-img3 img").hover(
  function () {
    $("#cat-1-div3").css("width", "100%");
  },
  function () {
    $("#cat-1-div3").css("width", "0%");
  }
);
$("#c3-categories-img4 img").hover(
  function () {
    $("#cat-1-div4").css("width", "100%");
  },
  function () {
    $("#cat-1-div4").css("width", "0%");
  }
);
$("#c3-categories-img5 img").hover(
  function () {
    $("#cat-1-div5").css("width", "100%");
  },
  function () {
    $("#cat-1-div5").css("width", "0%");
  }
);
$("#c3-categories-img6 img").hover(
  function () {
    $("#cat-1-div6").css("width", "100%");
  },
  function () {
    $("#cat-1-div6").css("width", "0%");
  }
);
$("#c3-categories-img7 img").hover(
  function () {
    $("#cat-1-div7").css("width", "100%");
  },
  function () {
    $("#cat-1-div7").css("width", "0%");
  }
);
$("#c3-categories-img8 img").hover(
  function () {
    $("#cat-1-div8").css("width", "88%");
  },
  function () {
    $("#cat-1-div8").css("width", "0%");
  }
);
