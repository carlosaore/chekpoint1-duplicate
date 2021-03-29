const avatar= document.getElementById("avatar");
const button= document.getElementById("but-name");


avatar.addEventListener('click', function(){
    avatar.src= "image/avatar.svg"
})

button.addEventListener('click', function(){
    const name= document.getElementById("name");
    const color= document.getElementById("presentation-container");
    const colorText1= document.getElementById("text1");
    const colorText2= document.getElementById("text2");
    const colorText3= document.getElementById("text3");
    const colorText4= document.getElementById("text4");


    let newColor=prompt("Introduce a new color");
    colorText1.style.color=newColor;
    colorText2.style.color=newColor;
    colorText3.style.color=newColor;
    colorText4.style.color=newColor;
    color.style.background=newColor;
   
    
    let newName= prompt("Introduce your name");
    name.textContent=newName
    name.style.color="white"
    
})