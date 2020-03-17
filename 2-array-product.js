/*
Daily Coding Problem #2

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

function productArray (numbers) {
  let productAll = numbers.reduce((a,b) => a*b)
  return numbers.map((number) => productAll / number )
}

console.log( productArray( [3,2,1] ) )
console.log( productArray( [1, 2, 3, 4, 5] ) )

/*
Bonus Answer:
You can always do a nested for loop if division isn't available, It'll just be less efficient.

You could also multiple by the inverse of the current array item inside the map callback as an equivalent to division.
*/
