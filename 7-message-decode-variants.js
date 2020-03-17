/*
Daily Coding Problem #7

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

function countDecodableVariants(message) {
  if(message.length == 0) {
    return 1
  }

  let result = countDecodableVariants(message.substring(1, message.length))

  if(message.length >= 2 && parseInt(message.substring(0,2)) <= 26) {
    result += countDecodableVariants(message.substring(2, message.length))
  }

  return result
}

console.log(countDecodableVariants('5')) //expect 1
console.log(countDecodableVariants('16')) //expect 2
console.log(countDecodableVariants('111')) //expect 3

console.log(countDecodableVariants('1231194892111234115'))
