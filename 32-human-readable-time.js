/*
Daily Coding Problem #32

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600)
  seconds %= 3600
  let mins = Math.floor(seconds / 60)
  seconds %= 60
  return hours.toString().padStart(2, 0) + ':' + mins.toString().padStart(2, 0) + ':' + seconds.toString().padStart(2, 0)
}

console.log( humanReadable(0) )
console.log( humanReadable(5) )
console.log( humanReadable(60) )
console.log( humanReadable(86399) )
console.log( humanReadable(359999) )
