/*
Daily Coding Problem #36

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let output = ''
	let chars = s.split('')
  
  for(let i = 0; i < chars.length; i++) {
    if(i != 0) output += '-'
    let line = chars[i].toLowerCase().repeat(i+1)
    output += line.charAt(0).toUpperCase() + line.substring(1)
  }
  
  return output
}

console.log(accum("ZpglnRxqenU")) //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")) //"N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
    