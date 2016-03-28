'use strict';

var ListNode = function (val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var swap = function (node) {
  var newPairStartNode, nextPairStartNode;

  if (!node) {
    return null;
  }

  if (!node.next) {
    return node;
  }

  newPairStartNode = node.next;
  nextPairStartNode = node.next.next;

  node.next.next = node;
  node.next = swap(nextPairStartNode);
  return newPairStartNode;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  return swap(head);
};

var printList = function (head) {
  var curNode = head;

  while (curNode) {
    console.log(curNode.val);
    curNode = curNode.next;
  }
}

var head;

// test1
head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log('test1:');
printList(swapPairs(head));

// test2
head = new ListNode(1);

console.log('test2:');
printList(swapPairs(head));

// test3
head = null;

console.log('test3:');
printList(swapPairs(head));

// test4
head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log('test4:');
printList(swapPairs(head));
