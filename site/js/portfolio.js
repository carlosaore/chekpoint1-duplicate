//change avatar
const image = document.querySelector("#imgavatar");

image.addEventListener("click", function(event) {
  image.src = "image/avatar.svg"
});

//change avatar and backgroundcolor
const btn = document.querySelector("#btnNameColor");
const surName = document.querySelector("#name");
const colorBack = document.querySelectorAll(".pink-bg");
const colorText = document.querySelectorAll(".pink-text");
const colorLink = document.querySelectorAll("a");


btn.addEventListener("click", function(event) {
    surName.innerHTML = prompt("type Name");
    surName.style.color = "white";
    let valor = prompt("type color");
    for(let i = 0; i < colorBack.length;i++){
       colorBack[i].style.backgroundColor = valor;
    }
    for(let j = 0; j < colorText.length;j++){
        colorText[j].style.color = valor;
    }
    for(let z = 0; z < colorLink.length;z++){
        colorLink[z].style.color = valor;
    }
});

/*change the color of all the html links
const colorBack = document.querySelectorAll("a");



btn.addEventListener("click", function(event) {
   surName.innerHTML = prompt("type Name");
   surName.style.color = "white";
   let valor = prompt("type color");
   for(let i = 0; i < colorBack.length;i++){
    colorBack[i].style.backgroundColor = valor;
  }
   for(let j = 0; j < colorText.length;j++){
    colorText[j].style.color = valor;
   }
});*/

