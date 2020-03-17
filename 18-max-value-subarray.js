/*
Daily Coding Problem #18

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
*/

function maxValues(array, k) {
  let maxVals = []

  for(let i = 0; i <= array.length - k; i++) {
    let sub = array.slice(i, i + k)

    console.log(sub)
    maxVals.push(Math.max(...sub))
  }

  return maxVals
}

console.log(maxValues([10, 5, 2, 7, 8, 7], 3)) //[10, 7, 8, 8]