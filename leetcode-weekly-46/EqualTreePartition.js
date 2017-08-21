/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkEqualTree = function (root) {
  var sums = []
  var traverse = function (node) {
    var sum = node.val

    if (node.left) {
      sum += traverse(node.left)
    }
    if (node.right) {
      sum += traverse(node.right)
    }
    sums.push(sum)
    return sum
  }
  var sum = traverse(root)

  if (sum % 2 !== 0 || sums.length < 2) {
    return false
  }
  for (var i = 0; i < sums.length; i++) {
    if (sums[i] * 2 === sum) {
      return true
    }
  }
  return false
};

(function () {
  var root = { val: 5 }
  var node1 = { val: 10 }
  var node2 = { val: 10 }
  var node5 = { val: 2 }
  var node6 = { val: 3 }

  root.left = node1
  root.right = node2

  node2.left = node5
  node2.right = node6

  console.log(checkEqualTree(root))
})();

(function () {
  var root = { val: 1 }
  var node1 = { val: 2 }
  var node2 = { val: 10 }
  var node5 = { val: 2 }
  var node6 = { val: 20 }

  root.left = node1
  root.right = node2

  node2.left = node5
  node2.right = node6

  console.log(checkEqualTree(root))
})();

(function () {
  var root = { val: 0 }

  console.log(checkEqualTree(root))
})()
