/*
A theater employee wants to display every seat in the main room.
In said room, seats are arranged like this:
- There are 26 columns of seats, labelled from "1" to "26"
- Every column contains 100 seats, labelled from "1" to "100"
Your final list should like this:
  1-1
  1-2
  1-3
  .
  .
  .
  26-98
  26-99
  26-100
*/
/*  let listSeats=[]
function theaterSieges(columnas,filas) {
  for (let i=0; i<columnas;i++){
    
    for (let j=0; j<columnas;i++)
    console.log (`${i}- ${j}`)
  }
  
}

console.log(theaterSieges(26,100));

*/

let displaySeats=[]
function theaterSieges(columnas,filas) {
  
  for (let i=1; i<=columnas;i++){
    for (let j=1; j<=filas;j++)
    displaySeats.push(`${i}- ${j}`)
  }
  return displaySeats
}


console.log(theaterSieges(26,100));