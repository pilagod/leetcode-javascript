'use strict';
/**
* Definition for singly-linked list with a random pointer.
* function RandomListNode(label) {
*     this.label = label;
*     this.next = this.random = null;
* }
*/

function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}

/**
* @param {RandomListNode} head
* @return {RandomListNode}
*/
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  var map = {};
  var id = 0;
  var temp = head;

  while (temp) {
    temp.id = id;
    map[temp.id] = new RandomListNode(temp.label);
    temp = temp.next;
    id += 1;
  }
  temp = head;
  while (temp) {
    map[temp.id].next = temp.next ? map[temp.next.id] : null;
    map[temp.id].random = temp.random ? map[temp.random.id] : null;
    temp = temp.next;
  }
  return map[0];
};
