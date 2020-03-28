/*
Daily Coding Problem #38

In this kata you have to create all permutations of an input string and
remove duplicates, if present. This means, you have to shuffle all
letters from the input in all possible orders.
*/

function permutations(str) {
  let letters = str.split('')
  let results = [[letters.shift()]]

  while (letters.length) {
      const currLetter = letters.shift()
      let tmpResults = []
      results.forEach(result => {
          let rIdx = 0
          while (rIdx <= result.length) {
              const tmp = [...result]
              tmp.splice(rIdx, 0, currLetter)
              tmpResults.push(tmp)
              rIdx++
          }
      })
      results = tmpResults
  }

  return results
    .map(letterArray => letterArray.join(''))
    .filter((el, idx, self) => (self.indexOf(el) === idx))
    .sort()
}

console.log( permutations('a') ) //['a']
console.log( permutations('ab') ) //['ab', 'ba']
console.log( permutations('aabb') ) //['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
