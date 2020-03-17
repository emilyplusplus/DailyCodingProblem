/*
Daily Coding Problem #11

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

let dictionary = [
  'dog',
  'deer',
  'deal'
]

function search( query ) {
  return dictionary.filter(function (word) {
    return word.substr(0, query.length) === query
  })
}

console.log( search( 'de' ) )

/*
If you needed more efficiency you could split the dictionary up into categories based on the first letter so that there would be no need to search through all the words only a subset of them.
*/
