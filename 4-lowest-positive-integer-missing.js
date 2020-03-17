/*
Daily Coding Problem #4

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function lowestPosIntMissing ( numbers ) {
  numbers = numbers.filter( number => number > 0) //filter to only keep positive integers
  numbers.sort( (a, b) => a - b ) //sort asecending

  console.log(numbers) //log sorted and filtered array for clarity sake

  /*
  Start with the lowest possible post integer
  Run through a loop N times where N is the number of elements in the array
  (this is to ensure that in a worst case scenario each integer is accounted for)
  Check if the array contains the current lowest possible integer
  If it doesn't break out of the loop and return that int as it's the lowest missing one
  IF it does, increment hte current lowest pos int and continue the next loop call with the new val
  */

  let lowestPosInt = 1

  for(let i = 0; i < numbers.length; i++) {
    if( !numbers.includes( lowestPosInt ) ) {
      break;
    }

    lowestPosInt++
  }

  return lowestPosInt
}

console.log( lowestPosIntMissing( [3, 4, -1, 1] ) ) //expecting 2
console.log( lowestPosIntMissing( [1, 2, 0] ) ) //expecting 3
console.log( lowestPosIntMissing( [1, 2, 7, -3, -2, 3, 4, 5, 6] ) ) //expecting 8
