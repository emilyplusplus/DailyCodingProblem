/*
Daily Coding Problem #37

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
*/

function listSquared( m, n ) {
  let output = []

  for(let i = m; i <= n; i++) {
    let divisors = []

    for(let j = 1; j <= Math.sqrt(i); j++) {
      if(i % j == 0) {
        if(i / j == j) divisors.push(j)
        else divisors.push(j, i/j)
      }
    }

    divisors = divisors.map(x => x ** 2)
    let sum_squared_div = divisors.reduce((a, b) => a + b, 0)

    if (sum_squared_div > 0 && Math.sqrt(sum_squared_div) % 1 === 0) {
      output.push([i,sum_squared_div])
    }
  }

  return output
}

console.log( listSquared( 1, 250 ) ) // [[1, 1], [42, 2500], [246, 84100]]
console.log( listSquared( 42, 250 ) ) // [[42, 2500], [246, 84100]]
console.log( listSquared( 250, 500 ) ) // [[287, 84100]]
