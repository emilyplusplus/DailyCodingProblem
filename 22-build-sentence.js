/*
Daily Coding Problem #22

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

let dict = [
  'quick',
  'brown',
  'the',
  'fox'
]
  
let dict2 = [
  'bed',
  'bath',
  'bedbath',
  'and',
  'beyond'
]

function buildSentence( dictionary, sentence ) {
  let output = []
  let length = 1

  for(let i = 0; length < sentence.length && i < sentence.length; length++) {
    console.log(i, length)

    let word = sentence.substring( i, i+length )

    if( dictionary.includes( word ) ) {
      console.log( word )
      output.push( word )

      i += length
      length = 0
    }
  }

  return (output.length > 0) ? output : null
}

console.log( buildSentence( dict, 'thequickbrownfox' ) )
console.log( buildSentence( dict2, 'bedbathandbeyond' ) )
