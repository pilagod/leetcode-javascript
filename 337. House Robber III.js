'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} node
 * @return {Array} [0]: rob value, [1]: not rob value
 */
var dfs = function (node) {
  var leftValues, rightValues;

  if (node.left) {
    leftValues = dfs(node.left);
  } else {
    leftValues = [0, 0];
  }

  if (node.right) {
    rightValues = dfs(node.right);
  } else {
    rightValues = [0, 0];
  }

  return [
    leftValues[1] + rightValues[1] + node.val, // rob
    Math.max.apply(null, leftValues) + Math.max.apply(null, rightValues)  // not rob
  ];
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max.apply(null, dfs(root));
};

var root;

// test case 1
root = null;

console.log(rob(root));

// test case 2
root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);

console.log(rob(root));

// test case 3
root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);

console.log(rob(root));

// test case 4
root = new TreeNode(4);
root.left = new TreeNode(1);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(3);

console.log(rob(root));
// [4,1,null,2,null,3]
