/*
Daily Coding Problem #6

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
*/

/* Mock JS Pointer Implementation */
let pointers = {}
let pointerCount = 0

get_pointer = function(node) {
    if (pointers.hasOwnProperty(JSON.stringify(node))) return pointers[node];
    pointerCount++;
    pointers[JSON.stringify(node)]=pointerCount;
    pointers[pointerCount]=node;
    return pointerCount;
}

dereference_pointer = function(pointer) {
    return (pointers.hasOwnProperty(pointer)) ? pointers[pointer] : null;
}
/* End Mock JS Pointer Implementation */

class Node {
  constructor(data) {
    this.data = data
  }
}

class XORLinkedList {
  constructor() {
    this.head = null
  }

  add(element) {
    let node = new Node(element)

    if(this.head == null) {
      this.head = get_pointer(node)
      node.both = null ^ this.head + 1
    } else {
      let curr_p = get_pointer(node)

      let prev_p = curr_p - 1
      let next_p = curr_p + 1
      
      node.both = prev_p ^ next_p
    }

    //console.log(node)
  }

  getNode(index) {
    if(index == 0) return dereference_pointer(this.head)

    let next_p = null

    for(let i = 0; i < index; i++) {
      if(i == 0) {
        next_p = dereference_pointer(this.head).both
      } else {
        let prev_p = next_p - 1
        
        next_p = dereference_pointer(next_p).both ^ prev_p
      }
    }

    return dereference_pointer(next_p)
  }
}

let efficientList = new XORLinkedList()
efficientList.add('A')
efficientList.add('B')
efficientList.add('C')
efficientList.add('D')
efficientList.add('E')
efficientList.add('F')
efficientList.add('G')
efficientList.add('H')
efficientList.add('I')
efficientList.add('J')
efficientList.add('K')

console.log(pointers)

console.log(efficientList.getNode(5))
