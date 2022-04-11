////////*****change slides by clicking on arrows*******//////
let sliderImgs = document.querySelectorAll(".slider-img");
let index = 0;
sliderImgs[index].style.display = "block";
// changing slides by clicking on the right arrow/////
document.getElementById("next-btn").addEventListener("click", () => {
  /////*******loop through the slides////
  sliderImgs[index].style.display = "none"; //current
  index++;
  if (index >= sliderImgs.length) {
    index = 0;
  }
  sliderImgs[index].style.display = "block"; //next
  //*******/ slides stop at the last image////
  // if (index < sliderImgs.length-1) {
  //   sliderImgs[index].style.display = "none";
  //   index++;
  //   sliderImgs[index].style.display = "block";
  // }
});
// changing slides by clicking on the left arrow/////
// document.getElementById("previous-btn").addEventListener("click", () => {
//   sliderImgs[index].style.display = "none";
//   index = sliderImgs.length;
//   sliderImgs[index].style.display = "block";
//   index--;
//   if ((index = sliderImgs[0])) {
//     index = sliderImgs.length + 1;
//   }
//   sliderImgs[index].style.display = "block";
// });

////********change slides and the opacity of indicators by clicking on indicators******//////
// document
//   .getElementsByClassName("indicator-btn")
//   .addEventListener("click", () => {
//     for (let index = 0; index < sliderImgs.length; index++) {
//       sliderImgs[index].style.display = "none";
//       sliderImgs[0].style.display = "block";
//     }
//   });

document.getElementById("indicator-btn1").addEventListener("click", () => {
  let indicatorBtns = document.getElementsByClassName("indicator-btn");
  for (let index = 0; index < sliderImgs.length; index++) {
    sliderImgs[index].style.display = "none";
    sliderImgs[0].style.display = "block";
  }
  for (let index = 0; index < indicatorBtns.length; index++) {
    indicatorBtns[index].style.opacity = "0.5";
    indicatorBtns[0].style.opacity = "1";
  }
});

// let indicatorBtns = document.getElementsByClassName("indicator-btn");
// indicatorBtns.forEach(element => {
//     element.addEventListener
// });
