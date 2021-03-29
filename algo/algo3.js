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

function theaterSieges() {
  // Your code here !
  let columns = [];
  let columnSeat = 0;
  let rows = [];
  let rowSeat = 0;
  

  while(columnSeat<26){
    columnSeat +=1;
    columns.push(columnSeat);
  }
  //console.log(columns);
  
  while(rowSeat<100){
    rowSeat +=1;
    rows.push(rowSeat);
  }
  //console.log(rows)

 // for(let i=0; columns.length; i++){
  //  return columns[i];
 // }
}

console.log(theaterSieges());