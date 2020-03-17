/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

let numbers = [10,15,3,7]
let k = 17

function sumAvailable(numbers, sum) {
  //console.log(numbers)
  let found = false

  numbers.forEach((number, i) => {
    let remainingNumbers = numbers.slice(i + 1)
    //console.log('Current Number:' + number)
    //console.log(remainingNumbers)

    if(remainingNumbers.length > 0) {
      remainingNumbers.forEach(remainingNumber => {
        //console.log(number + remainingNumber)
        if(number + remainingNumber === 17) found = true;
      }) 
    }
  })

  return found;
}

function sumAvailableEfficient(numbers, sum) {
  let found = false
  let numbersDiff = []

  numbers.forEach((number, i) => {
    if(numbersDiff[sum - number]) found = true;
    else numbersDiff[number] = 1
  })

  return found;
}


let t1 = process.hrtime();
console.log(sumAvailable(numbers, k))
let t2 = process.hrtime(t1);
console.log('benchmark took %d seconds and %d nanoseconds', t2[0], t2[1]);

t1 = process.hrtime();
console.log(sumAvailableEfficient(numbers, k))
t2 = process.hrtime(t1);
console.log('benchmark took %d seconds and %d nanoseconds', t2[0], t2[1]);
