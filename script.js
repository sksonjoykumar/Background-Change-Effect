const imgContainer = document.getElementById("img-container");
const imgWrap = document.getElementById("img-wrap");
const removeBg = document.getElementById("remove-img");
const originalImg = document.getElementById("original-img");
const arrow = document.getElementById("arrow");

originalImg.style.width = imgContainer.offsetWidth + "px";
let leftSpace = imgContainer.offsetLeft;

imgContainer.addEventListener("mousemove", function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  arrow.style.left = boxWidth;
});
