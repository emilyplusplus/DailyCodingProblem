/*
Daily Coding Problem #10

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

function jobScheduler(f, n) {
  setTimeout(f, n)
}

console.log('startup')

jobScheduler(() => {
  console.log('run 3 seconds later')
}, 3000)
