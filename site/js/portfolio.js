//change avatar
const image = document.querySelector("#imgavatar");

image.addEventListener("click", function(event) {
  image.src = "image/avatar.svg"
});

//change avatar
const btn = document.querySelector("#btnNameColor");
const surName = document.querySelector("#name");
const colorBack = document.querySelector(".pink-bg");


btn.addEventListener("click", function(event) {
   surName.innerHTML = prompt("type Name");
   surName.style.color = "white";
   colorBack.style.backgroundColor = prompt("type color");
   //colorBack.style.backgroundColor = colorBack;
});

