/*
Daily Coding Problem #16

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
*/

const MAX_LOG_RECORDS = 3

let log = []

function record(order_id) {
  log.push(order_id)

  if(log.length > MAX_LOG_RECORDS) log.shift() //keep at max length of N
  console.log(log)
}

function get_last(i) {
  return log[i]
}

record(3)
record(4)
record(55)
record(22)

console.log(get_last(1)) //expect 55
