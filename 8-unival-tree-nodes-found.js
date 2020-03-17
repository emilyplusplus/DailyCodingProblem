/*
Daily Coding Problem #8

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
*/

let root = {
  val: 0,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 0,
    left: {
      val: 1,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    },
    right: {
      val: 0,
      left: null,
      right: null
    }
  }
}

function univalNodesFound(tree) {
  if(tree.left == null && tree.right == null) {
    return 1
  }

  let left = univalNodesFound(tree.left)
  let right = univalNodesFound(tree.right)

  let curr = (left > 0 && right > 0 && tree.val == tree.left.val && tree.val == tree.right.val) ? 1 : 0

  return left + right + curr
}

console.log(univalNodesFound(root)) //expect 5