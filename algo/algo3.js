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




let displaySeats = []

function theaterSieges(column, seat) {
  for(let i = 1; i <= column;  i++){
   for(let j = 1; j<= seat; j++){
     displaySeats.push(`${i} and ${j}`)
   }
  }
  return displaySeats; 
}

console.log(theaterSieges(26,100));