/*
Daily Coding Problem #29

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

function encode(message) {
  let encoded = ''
  let currentChar = message.split('')[0]
  let currentCharCount = 0

  message.split('').forEach(character => {
    if(currentChar == character) currentCharCount++
    else {
      encoded += currentCharCount.toString() + '' + currentChar

      currentChar = character
      currentCharCount = 1
    }
  })
  encoded += currentCharCount.toString() + '' + currentChar //handle last set of chars

  return encoded
}

function decode(message) {
  let decoded = ''
  let chars = message.split('')

  for(let i = 0; i < message.length; i+=2) {
    //console.log(chars[i], chars[i+1])
    decoded += chars[i+1].repeat(chars[i])
  }

  return decoded
}

let original = 'AAAABBBCCDAA'

let encoded = encode( original )
let decoded = decode( encoded )

console.log( encoded )
console.log( decoded )
