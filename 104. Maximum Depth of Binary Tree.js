/**
 * Definition for a binary tree Node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === undefined || root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


function Node (val) {
  this.val = val
  this.left = this.right = null
}

let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(3)
root.left.right = new Node(4)
root.left.left.left = new Node(5)

console.log(maxDepth(root))
