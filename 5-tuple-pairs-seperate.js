/*
Daily Coding Problem #5

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

Implement car and cdr.
*/

function cons(a, b) {
  function pair(f) {
    return f(a, b)
  }
  return pair
}

// Essentially what's going on here is cons is returning a function that expects another function as a parameter
// and it calls that provided funciton with a,b as the parameters.

// So we need two functions (car, cdr) that accept a paramater which will be a function (pair) that will need to be
// called with another function as its parameter, in which the actual selective returning of a or b will be done

function car(pair) {
  return pair( (a, b) => {
    return a;
  } )
}

function cdr(pair) {
  return pair( (a, b) => {
    return b;
  } )
}

console.log( car( cons(3, 4) ) ) // expect 3
console.log( cdr( cons(3, 4) ) ) // expect 4
