/*
Daily Coding Problem #15

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
*/

let queue = []

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

let interval = setInterval(() => {
  queue.push(getRandomIntInclusive(1, 100))

  if(queue.length > 10) queue.shift()
  console.log(queue)
}, 100)

setTimeout(() => {
  console.log(queue[queue.length - 1])

  //I'm stopping this here for test purposes but if you left it running it'd simulate an infinite stream
  setTimeout(() => {
    clearInterval(interval)
  }, getRandomIntInclusive(200, 800))
}, getRandomIntInclusive(1500, 3000))
