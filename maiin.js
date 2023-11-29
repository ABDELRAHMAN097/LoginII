let sitting = document.querySelector(".sitting");
let colors = document.querySelector(".colors");
let close = document.querySelector(".close");

console.log(sitting)
console.log(colors)


function switching(){
  colors.classList.toggle("close");

}
sitting.addEventListener("click",switching);
