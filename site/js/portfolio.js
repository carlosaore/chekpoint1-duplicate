const imgAvatar = document.querySelector('.avatar')


imgAvatar.addEventListener('click', function(){
    imgAvatar.src = "./image/avatar.svg"
})

let buttonChange = document.querySelector('.button')
let nameChange = document.querySelector('.name')

let divStyle = document.querySelector('.description pink-bg')

buttonChange.addEventListener('click', function(){
buttonChange = prompt('Whats your name?')
nameChange.innerHTML = buttonChange
nameChange.style.color = 'white'

 })

 buttonChange.addEventListener('click', function(){
    buttonChange = prompt('color?')
    divStyle.style.backgroundColor = buttonChange
    
     })
    
 
  
  