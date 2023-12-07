let sitting = document.querySelector(".sitting");
let colors = document.querySelector(".colors");
let close = document.querySelector(".close");

console.log(sitting)
console.log(colors)


function switching(){
  colors.classList.toggle("close");

}
sitting.addEventListener("click",switching);
// darMood
let moon = document.querySelector(".fa-moon");
let form = document.querySelector(".form");
let jjj = document.querySelector(".jjj");

function switchMood(){
  form.classList.toggle("jjj");
}
moon.addEventListener("click",switchMood);
// sssssssssssssss

let lastButton =document.querySelector(".lastButton");
let move1 =document.querySelector(".move1");
let move2 =document.querySelector(".move2");
let move3 =document.querySelector(".move3");
let move4 =document.querySelector(".move4");
let moving = [move1 , move2 , move3 , move4];

























