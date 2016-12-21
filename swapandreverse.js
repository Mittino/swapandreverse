// Implement a swap function for arrays. What are the inputs your function should take? What are the outputs?

// Implement a reverse function for arrays using your swap function.

// Write pseudo-code to solve this, then write javascript.
'use strict';
var array = [1,2,3,4,5];
console.log(array);
console.log(swap(array,0,2));

function swap(arry, index1, index2){
  var value1 = arry[index1];
  var newArray = arry.slice(0);
  newArray[index1] = newArray[index2];
  newArray[index2] = value1;
  return newArray;
}

function reverse(arry){
  var length = arry.length -1;
  var looptimes = Math.ceil(length/2);
  var i;
  var newArray = arry.slice(0);

  for (i=0; i<looptimes; i++){
    newArray = swap(newArray, i, length-i);
  }
  return newArray;
}

console.log(reverse(array));
console.log(array);
