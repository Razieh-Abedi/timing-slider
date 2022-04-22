let sliderImgs = document.querySelectorAll(".slider-img");
let indicatorBtns = document.querySelectorAll(".indicator-btn");
let index = 0;
sliderImgs[index].style.display = "block";
indicatorBtns[index].style.opacity = "1";

// changing slides by clicking on the right arrow/////
document.getElementById("next-btn").addEventListener("click", nextSlide);

// changing slides by clicking on the left arrow/////
document
  .getElementById("previous-btn")
  .addEventListener("click", previousSlide);

////********changing slides and indicators by clicking on indicators******//////
for (let index = 0; index < indicatorBtns.length; index++) {
  indicatorBtns[index].addEventListener("click", nextSlide);
}
////*********Timer sliders */
setInterval(() => {
  nextSlide();
}, 10000);

function nextSlide() {
  sliderImgs[index].style.display = "none"; //current
  indicatorBtns[index].style.opacity = "0.5";

  index++;
  if (index >= sliderImgs.length) {
    index = 0;
  }

  sliderImgs[index].style.display = "block"; //next
  indicatorBtns[index].style.opacity = "1";
}
function previousSlide() {
  sliderImgs[index].style.display = "none"; //current
  indicatorBtns[index].style.opacity = "0.5";
  index--;
  if (index <= 0) {
    index = sliderImgs.length - 1;
  }
  sliderImgs[index].style.display = "block"; //next
  indicatorBtns[index].style.opacity = "1";
}
