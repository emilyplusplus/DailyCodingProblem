/*
Daily Coding Problem #9

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

function largestSumNonAdjacent(numbers) {
  let incl = numbers[0]
  let excl = 0

  numbers.forEach((number, i) => {
    if( i == 0) return;

    let excl_temp = Math.max(incl, excl)

    incl = excl + number
    excl = excl_temp
  })

  return Math.max(incl, excl)
}

console.log(largestSumNonAdjacent([2,4,6,2,5])) //expect 2+6+5=13
console.log(largestSumNonAdjacent([5,1,1,5])) //expect 5+5=10
