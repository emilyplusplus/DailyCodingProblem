/*
Daily Coding Problem #26

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

const util = require('util')

class Node{
  constructor(data, next = null){
    this.data = data,
    this.next = next
  }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

LinkedList.prototype.insertAtEnd = function(data){
  let newNode = new Node(data);

  if(!this.head){
      this.head = newNode;
      return this.head;
  }

  let tail = this.head;
  while(tail.next !== null){
      tail = tail.next;
  }

  tail.next = newNode;

  return this.head;
}

let list = new LinkedList();

list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)
list.insertAtEnd(6)
list.insertAtEnd(7) //this is our target to remove, 2nd from the last
list.insertAtEnd(8)
list.insertAtEnd(9)

//this would need some sprucing up in in prod, i.e. to make sure k < list length and list wasn't empty etc.
function removeKFromEnd(list, k) {
  let slidingWindow = []
  let tail = list.head;

  while(tail.next !== null){
    slidingWindow.push(tail)
    if(slidingWindow.length > k+1) slidingWindow.shift()
    console.log(slidingWindow)
    tail = tail.next;
  }

  slidingWindow[0].next = slidingWindow[2]
}

console.log( util.inspect(list, false, null, true) )
removeKFromEnd(list, 2)
console.log( util.inspect(list, false, null, true) )
