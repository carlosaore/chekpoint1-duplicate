const avatar= document.getElementById("avatar");
const button= document.getElementById("but-name");


avatar.addEventListener('click', function(){
    avatar.src= "image/avatar.svg"
})

button.addEventListener('click', function(){
    const name= document.getElementById("name");
    const color= document.getElementById("presentation-container");
    const text=document.getElementsByClassName("pink-text")
    const links = document.getElementsByTagName("a");



    let newColor=prompt("Introduce a new color");
    color.style.background=newColor;
    for (let j = 0; j < text.length; j++) {
        text[j].style.color = newColor;
    }

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = newColor;
    }
   
    
    let newName= prompt("Introduce your name");
    name.textContent=newName
    name.style.color="white"
    
})