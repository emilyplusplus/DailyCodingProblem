/*
Daily Coding Problem #27

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

function bracketsBalanced(brackets) {
  let stack = []
  
  let chars = brackets.split('')

  for(let i = 0; i < chars.length; i++) {
    let char = chars[i]

    if('{[('.includes(char)) stack.push(char)
    else if('}])'.includes(char)) {
      let popped = stack.pop()
      if(popped == '(' && char != ')') return false;
      if(popped == '[' && char != ']') return false;
      if(popped == '{' && char != '}') return false;
    }
  }

  return stack.length == 0;
}

console.log( bracketsBalanced('([])[]({})') )
console.log( bracketsBalanced('([)]') )
console.log( bracketsBalanced('((()') )
