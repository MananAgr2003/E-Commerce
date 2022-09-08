var speed = 10;

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

function getImg1() {
    $(".imgg1").css({
        visibility : "hidden"
    });

    setTimeout(function(){

        $(".imgg1").css({
            visibility : "visible"
        });


    } , 370);

    $(".imgg1").animate({
        width : "0px",
       
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
        visibility : "hidden"
    });

    setTimeout(function(){

        $(".imgg1").css({
            visibility : "visible"
        });


    } , 370);

    $(".imgg1").animate({
        width : "0px",
       
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
        visibility : "hidden"
    });

    setTimeout(function(){

        $(".imgg1").css({
            visibility : "visible"
        });


    } , 370);

    $(".imgg1").animate({
        width : "0px",
       
      });
    
      setTimeout(function () {
        $(".content1-img10").attr("src", "img/p1.png");
        $(".imgg1").animate({
            width: "100%",
          
        });
      }, 0);
}
