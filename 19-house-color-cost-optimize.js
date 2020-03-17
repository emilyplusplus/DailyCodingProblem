/*
Daily Coding Problem #19

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
*/

//3x2 matrix
const priceTable = [
  [2,3],
  [4,6],
  [3,5]
]

function minCost() {
  let minCost = 0
  let lastColor

  priceTable.forEach((house, i) => {
    let cheapest = Math.min(...house)

    if(lastColor == house.indexOf(cheapest)) {
      let temp = [...house]
      temp.splice(lastColor, 1)
      cheapest = Math.min(...temp)
      lastColor = house.indexOf(cheapest)
    } else {
      lastColor = house.indexOf(cheapest)
    }

    console.log(house)
    console.log(lastColor)
    console.log(cheapest)

    minCost += cheapest
  })

  return minCost
}

console.log(minCost())