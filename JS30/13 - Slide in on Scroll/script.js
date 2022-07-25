"use strict";

//this was copied from the internet
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  //console.count(e); //this creates to much outputs we need a function to slow it down so we do not have performance issues
  //console.log(window.scrollY); show how many pixels i am scroll down from the top of browser
  sliderImages.forEach((sliderImage) => {
    //half way throught the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    //bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", checkSlide);
