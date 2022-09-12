let flag1 = 0;
let flag2 = 0;

setInterval(() => {
  const box = document.querySelector("#subhead1");
  const rect = box.getBoundingClientRect();

  const isInViewport1 =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if(isInViewport1 == false){
      flag1 = 0;
    }

  if (isInViewport1 == true && flag1 == 0) {
    flag1++;

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 2000;

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
  const box = document.querySelector("#subhead1");
  const rect = box.getBoundingClientRect();

  const isInViewport1 =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    
    if(isInViewport1 == false){
      flag2 = 0;
    }

  if (isInViewport1 == true && flag2 == 0) {
    flag2++;

    let valueDisplays = document.querySelectorAll(".num2");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;

      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 5;
        valueDisplay.textContent = startValue;
        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
}, 600);
