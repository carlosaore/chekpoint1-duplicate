/*
Write a function which, given two angles from a triangle, will return the value of the third one.
(Reminder: the sum of the values of the three angles in a triangle is **always** 180°)
Ex: 
thirdAngle(90, 30) should return 60
thirdAngle(20, 80) should return 80
*/

function thirdAngle(a, b) {
  // Your code here !
  //the two angles are added and subtracted with 180 which is the total sum of the angles 
  rest = 180 - (a + b);
  return rest
}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));