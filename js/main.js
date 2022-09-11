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


/* *******************************************************                              Counter  Animation  ********************************************************/

let flag1 = 0;
let flag2 = 0;







setInterval(() => {

  
const box = document.querySelector('#subhead1');
const rect = box.getBoundingClientRect();

const isInViewport1 = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);




if(isInViewport1 == true && flag1 == 0){
  flag1++;

let valueDisplays = document.querySelectorAll(".num");
let interval = 600;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
});

}

  
}, 600);

setInterval(() => {

  
const box = document.querySelector('#subhead1');
const rect = box.getBoundingClientRect();

const isInViewport1 = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);




if(isInViewport1 == true && flag2 == 0){
  flag2++;

let valueDisplays = document.querySelectorAll(".num2");
let interval = 600;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 10;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
});

}

  
}, 600);







