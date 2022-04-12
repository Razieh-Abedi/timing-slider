let sliderImgs = document.querySelectorAll(".slider-img");
let index = 0;
sliderImgs[index].style.display = "block";
function nextSlide() {
  sliderImgs[index].style.display = "none"; //current
  index++;
  if (index >= sliderImgs.length) {
    index = 0;
  }
  sliderImgs[index].style.display = "block"; //next
}

let indicatorBtns = document.querySelectorAll(".indicator-btn");
let i = 0;
indicatorBtns[i].style.opacity = "1";
function nextIndicator() {
  indicatorBtns[i].style.opacity = "0.5";
  i++;
  if (i >= indicatorBtns.length) {
    i = 0;
  }
  indicatorBtns[i].style.opacity = "1";
}
// changing slides by clicking on the right arrow/////
document.getElementById("next-btn").addEventListener("click", () => {
  nextSlide();
  nextIndicator();
});
////********change slides and indicators by clicking on indicators******//////
for (let index = 0; index < indicatorBtns.length; index++) {
  indicatorBtns[index].addEventListener("click", () => {
    nextIndicator();
    nextSlide();
  });
}
////*********Timer sliders */
setInterval(() => {
  nextSlide();
  nextIndicator();
}, 10000);

/////changing slides by clicking on the left arrow/////
// let sliderImgs = document.querySelectorAll(".slider-img");
// let index2 = sliderImgs.length - 1;
// sliderImgs[0].style.display = "block";

// document.getElementById("previous-btn").addEventListener("click", () => {
//   for (let index = 0; index < sliderImgs.length; index++) {
//     sliderImgs[index].style.display = "none";
//   }
//   sliderImgs[index2].style.display = "block";
//   index2--;
//   if ((index2 = sliderImgs[0])) {
//     index2 = sliderImgs.length - 1;
//   }
//   sliderImgs[index2].style.display = "block";
// });
