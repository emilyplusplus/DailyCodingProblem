/*
Daily Coding Problem #24

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

-is_locked, which returns whether the node is locked

-lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.

-unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.
*/

const util = require('util')

class Node {
  constructor(data)
  {
    this.locked = false
    this.data = data
    this.left = null
    this.right = null
    this.parent = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  is_locked(node) {
    return node.locked
  }

  lock(node) {
    if(this.lock_check(node.left)) return false;
    if(this.lock_check(node.right)) return false;

    if(node.parent != null) {
      let upstream = node.parent
      do {
        if(upstream.locked) return false;
        upstream = upstream.parent
      } while(upstream != null)
    }

    node.locked = true
    return true;
  }

  unlock(node) {
    if(this.lock_check(node.left)) return false;
    if(this.lock_check(node.right)) return false;

    if(node.parent != null) {
      let upstream = node.parent
      do {
        if(upstream.locked) return false;
        upstream = upstream.parent
      } while(upstream != null)
    }

    node.locked = false
    return true;
  }

  insert(data)
  {
    let node = new Node(data)
  
    if(this.root === null)
      this.root = node
    else
      this.insertNode(this.root, node)
  }
  
  insertNode(node, newNode) 
  { 
    newNode.parent = node

    if(newNode.data < node.data) { 
      if(node.left === null) 
        node.left = newNode
      else
        this.insertNode(node.left, newNode)
    } else { 
      if(node.right === null) 
        node.right = newNode
      else
        this.insertNode(node.right,newNode)
    } 
  }

  lock_check(node) 
  { 
    if(node !== null) 
    { 
      if(node.locked) return true;
      let locked = this.lock_check(node.left); 
      locked = this.lock_check(node.right); 

      if(locked) return locked
    } 

    return false;
  } 

  search(node, data) 
  { 
    if(node === null) 
      return null; 
    else if(data < node.data) 
      return this.search(node.left, data); 
    else if(data > node.data) 
      return this.search(node.right, data); 
    else
      return node; 
  } 

}

let tree = new BinaryTree()

tree.insert(5)
tree.insert(7)
tree.insert(10)
tree.insert(6)
tree.insert(2)

console.log( util.inspect(tree, false, null, true) + '\n' )

let node7 = tree.search(tree.root, 7)

let node5 = tree.search(tree.root, 5)
let node6 = tree.search(tree.root, 6)

console.log( 'N7 Locked: ' + tree.is_locked(node7) )
console.log( 'Lock Action Success: ' + tree.lock(node7) )
console.log( 'N7 Locked: ' + tree.is_locked(node7) + '\n' )

console.log( 'N6 Locked: ' + tree.is_locked(node6) )
console.log( 'Lock Action Success: ' + tree.lock(node6) )
console.log( 'N6 Locked: ' + tree.is_locked(node6) + '\n' )

console.log( 'N5 Locked: ' + tree.is_locked(node5) )
console.log( 'Lock Action Success: ' + tree.lock(node5) )
console.log( 'N5 Locked: ' + tree.is_locked(node5) + '\n' )

console.log( 'N7 Locked: ' + tree.is_locked(node7) )
console.log( 'Unlock Action Success: ' + tree.unlock(node7) )
console.log( 'N7 Locked: ' + tree.is_locked(node7) + '\n' )

console.log( 'N6 Locked: ' + tree.is_locked(node6) )
console.log( 'Lock Action Success: ' + tree.lock(node6) )
console.log( 'N6 Locked: ' + tree.is_locked(node6) )
console.log( 'Unlock Action Success: ' + tree.unlock(node6) )
console.log( 'N6 Locked: ' + tree.is_locked(node6) + '\n' )
