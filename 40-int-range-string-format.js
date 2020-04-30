/*
Daily Coding Problem #40

A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a tilde, '~'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15~17")

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
*/

function solution(list){
  let output = ''

  if(list.length == 1) {
    output += list[0]
    return output
  }

  let prev = list[0]
  let rangeStart = null

  for(let i = 1; i < list.length; i++) {
    let curr = list[i]

    if(curr - prev == 1) {
      if(rangeStart == null) {
        rangeStart = prev
      }
      prev = curr
      if(i != list.length - 1) continue;
    }

    if(rangeStart != null) {
      if(prev - rangeStart < 2) {
        if(output.length == 0) {
          output += rangeStart + ', ' + prev
        } else {
          output += ', ' + rangeStart + ', ' + prev
        }
      } else {
        if(output.length == 0) {
          output += rangeStart + '~' + prev
        } else {
          output += ', ' + rangeStart + '~' + prev
        }
      }

      rangeStart = null
    } else {
      if(output.length == 0) {
        output += prev
      } else {
        output += ', ' + prev
      }

      if(i == list.length - 1) output += ', ' + curr;
    }

    

    prev = curr
  }

  return output
}

console.log(solution(
  [-6]
)) // -6

console.log(solution(
  [-6, -2]
)) //-6, -2

console.log(solution(
  [-6, -3, -2, -1]
)) //-6, -3~-1

console.log(solution(
  [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
)) // -6,-3~1,3~5,7~11,14,15,17~20
