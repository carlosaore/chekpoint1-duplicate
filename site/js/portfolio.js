const avatar = document.querySelector('.avatar-img');
const btnChangeColorAndText = document.querySelector('.btn-presentation');
const name = document.getElementById("name");
const backgroundColor = document.querySelector('.pink-bg');

avatar.addEventListener('click', function(){
    avatar.src="image/avatar.svg";
})

btnChangeColorAndText.addEventListener('click', function(){
    //conts newBackgroundColor = prompt("Enter your color:".value);
    const newText = prompt("Enter your name:".value);
    name.innerHTML = newText;
    name.style.color = "white";

    //backgroundColor.style.backgroundColor = newBackgroundColor;
    //let myArray= [name, backgroundColor]
    //for(let i=0; i <myArray.length; i++){
    //  return myArray[i];
    //}
    //return name;

})