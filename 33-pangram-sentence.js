/*
Daily Coding Problem #33

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(sentence){
    sentence = sentence.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
    for(let i = 0; i < alphabet.length; i++) {
      let found = sentence.indexOf(alphabet[i])
      if(found == -1) return false
    }
  
    return true
  }
  
  console.log( isPangram( 'The quick brown fox jumps over the lazy dog.' ) )
  console.log( isPangram( 'This is not a pangram.' ) )