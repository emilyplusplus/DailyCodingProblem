/*
Daily Coding Problem #13

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/

function longestSubWithKChars(s, k) {
  currentLongestSub = ''

  for(let i = 0; i < s.length; i++) {
    for(let j = i + 1; j < s.length + 1; j++) {
      
      let currentSub = s.substring(i,j)
      console.log(i, j, currentSub)

      let noDuplicates = currentSub.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('')

      if(noDuplicates.length <= k) {
        if(currentSub.length > currentLongestSub.length) {
          currentLongestSub = currentSub
        }
      }
    }
  }

  return currentLongestSub
}

console.log( longestSubWithKChars( 'abcba', 2 ) )
