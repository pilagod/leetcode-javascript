/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  var levelMap = {}
  var traverse = function (node, index, level) {
    if (node.val !== null) {
      if (!levelMap.hasOwnProperty(level)) {
        levelMap[level] = {
          min: index,
          max: index
        }
      } else {
        if (index < levelMap[level].min) {
          levelMap[level].min = index
        }
        if (index > levelMap[level].max) {
          levelMap[level].max = index
        }
      }
    }
    if (node.left) {
      traverse(node.left, index * 2 + 1, level + 1)
    }
    if (node.right) {
      traverse(node.right, index * 2 + 2, level + 1)
    }
  }
  traverse(root, 0, 0)

  return Object.keys(levelMap).reduce(function (maxWidth, level) {
    var levelWidth = levelMap[level].max - levelMap[level].min
    return levelWidth > maxWidth ? levelWidth : maxWidth
  }, 0) + 1
};

(function () {
  var root = { val: 1 }
  var node1 = { val: 3 }
  var node2 = { val: 2 }
  var node3 = { val: 5 }
  var node4 = { val: 3 }
  var node6 = { val: 9 }

  root.left = node1
  root.right = node2

  node1.left = node3
  node1.right = node4

  node2.right = node6

  console.log(widthOfBinaryTree(root))
})();

(function () {
  var root = { val: 0 }
  var node1 = { val: 0 }
  var node2 = { val: 0 }
  var node3 = { val: 0 }
  var node6 = { val: 0 }
  var node14 = { val: 0 }

  root.left = node1
  root.right = node2

  node1.left = node3

  node2.right = node6

  node6.right = node14

  console.log(widthOfBinaryTree(root))
})()
