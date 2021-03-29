const clickPicture = document.getElementById("firstImg"); 

clickPicture.addEventListener("click", function(){
    clickPicture.src = "image/avatar.svg";
})

let buttonModifier = document.getElementById("btn"); 
let textChange = document.getElementById("name");
let containerDescribtion = document.querySelectorAll(".pink-bg")
let changeAllColors = document.getElementById("html");

buttonModifier.addEventListener("click",function(){
    buttonModifier = prompt("Modify the name")
    textChange.innerHTML = buttonModifier; 
    for (let i = 0; i < containerDescribtion.length; i++) {
    containerDescribtion[i].style.backgroundColor = prompt("what color?"); 
    }
    changeAllColors.style.backgroundColor = prompt("what color?"); 
    changeAllColors.style.color = prompt("what color?"); 
})