'use strict';

var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

var preOrderFlatten = function (node) {
  var tempNode, leftRightMostNode, rightRightMostNode;

  if (!node) {
    return null;
  }

  if (!node.left && !node.right) {
    return node;
  }

  tempNode = node.left;
  node.left = node.right;
  node.right = tempNode;

  leftRightMostNode = preOrderFlatten(node.left);
  rightRightMostNode = preOrderFlatten(node.right);

  if (!rightRightMostNode) {
    node.right = node.left;
    node.left = null;
    tempNode = leftRightMostNode;
  } else if (!leftRightMostNode) {
    tempNode = rightRightMostNode;
  } else {
    rightRightMostNode.right = node.left;
    node.left = null;
    tempNode = leftRightMostNode;
  }

  return tempNode;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  preOrderFlatten(root);
};

var rootNode = new TreeNode(1);
var treeNode = rootNode;

rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(5);

rootNode.left.left = new TreeNode(3);
rootNode.left.right = new TreeNode(4);

rootNode.right.right = new TreeNode(6);

flatten(rootNode);

while (treeNode) {
  console.log('left: ', treeNode.left);
  console.log('right: ', treeNode.right);
  console.log(treeNode.val);
  treeNode = treeNode.right;
}
