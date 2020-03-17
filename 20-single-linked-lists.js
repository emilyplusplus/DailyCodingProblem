/*
Daily Coding Problem #20

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.
*/

class Node {
  constructor (data = null, next = null) {
    this.data = data
    this.next = next
  }
}

function createLinkedList(data) {
  let head = new Node(data[0])
  let prev = null

  for(let i = 1; i < data.length; i++) {
    current = new Node(data[i])

    if(prev != null) {
      prev.next = current
    } else {
      //attach to head
      head.next = current
    }

    prev = current
  }

  return head
}

function commonNode(a, b) {
  let node = null

  while(a.next != null && b.next != null) {
    if(node == null && a.data == b.data) node = a
    else if(node != null && a.data != b.data) node = null

    a = a.next
    b = b.next
  }

  return node
}

console.log( commonNode( 
  createLinkedList( [3,7,8,10] ),
  createLinkedList( [99,1,8,10] )
))
