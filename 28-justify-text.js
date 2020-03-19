/*
Daily Coding Problem #28

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly
*/

function justify( words, lineLength ) {
  let output = []
  let currentLine = 0

  for(word of words) {
    //console.log(word)

    if(output[currentLine] == undefined) {
      output[currentLine] = word + ' '
    }
    else if(output[currentLine].length + word.length + 1 <= lineLength) {
      output[currentLine] += word + ' '
    }
    else {
      currentLine++

      if(output[currentLine] == undefined) {
      output[currentLine] = word + ' '
      }
      else if(output[currentLine].length + word.length + 1 <= lineLength) {
        output[currentLine] += word + ' '
      }
    }
  }

  output.forEach((line, i) => {
    line = line.trim()
    
    let currentLength = line.length
    while(currentLength < lineLength) {

      if(line.match(/\w \w/) != null) {
        let found = line.match(/\w \w/)
        line = line.slice(0,found.index+1) + ' ' + line.slice(found.index+1,line.length)
      }
      else if(line.match(/\w  \w/) != null) {
        let found = line.match(/\w  \w/)
        line = line.slice(0,found.index+1) + ' ' + line.slice(found.index+1,line.length)
      }
      else if(line.match(/\w   \w/) != null) {
        let found = line.match(/\w   \w/)
        line = line.slice(0,found.index+1) + ' ' + line.slice(found.index+1,line.length)
      }

      currentLength = line.length
    }

    output[i] = line
  })

  return output
}

console.log( justify( ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16 ) )
 