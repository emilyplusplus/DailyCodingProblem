/*
Daily Coding Problem #30

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
*/

function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function min(a, b, c){
  let l = Math.min(a, b);
  return Math.min(l, c);
}

function dynamicEditDistance(str1, str2){
  let temp = Create2DArray(str1.length+1)
  
  for(let i=0; i < str2.length+1; i++){
    temp[0][i] = i;
  }
  
  for(let i=0; i < temp.length; i++){
    temp[i][0] = i;
  }
  
  for(let i=1;i <=str1.length; i++){
    for(let j=1; j <= str2.length; j++){
      if(str1[i-1] == str2[j-1]){
        temp[i][j] = temp[i-1][j-1];
      }else{
        temp[i][j] = 1 + min(temp[i-1][j-1], temp[i-1][j], temp[i][j-1]);
      }
    }
  }
  
  return temp[str1.length][str2.length]
}

console.log( dynamicEditDistance( 'kitten'.split(''), 'sitting'.split('') ) )


