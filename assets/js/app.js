////////*****change slides by clicking on arrows*******//////
let sliderImgs = document.querySelectorAll(".slider-img");
document.getElementById("next-btn").addEventListener("click", () => {
  let sliderImgTemp = sliderImgs[0];
  let sliderToShow;
  for (let index = 0; index < sliderImgs.length; index++) {
    if (sliderImgs[index] == sliderImgTemp) {
      sliderImgs[index].style.display = "none";
      sliderImgs[index].style.display = "block";
      sliderImgTemp++;
    }
    // sliderImgs[index].style.display = "none";
    // sliderImgs[0].style.display = "block";
    // sliderImgTemp += sliderImgs[index].style.display = "block";
  }
});

document.getElementById("previous-btn").addEventListener("click", () => {
  for (let index = 0; index < sliderImgs.length; index++) {
    sliderImgs[index].style.display = "none";
    sliderImgs[0].style.display = "block";
  }
});

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
