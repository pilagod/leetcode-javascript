/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export interface Node {
  val: number;
  next: Node | null;
}
export class ListNode implements Node {
  public next: Node | null = null

  constructor(
    public val: number,
  ) { }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function addTwoNumbers(
  l1: Node,
  l2: Node
): Node {
  let result: Node = new ListNode(0)
  let curR: Node = result

  for (let cur1 = l1, cur2 = l2; cur1 || cur2;) {
    const digit1 = cur1 ? cur1.val : 0
    const digit2 = cur2 ? cur2.val : 0

    curR.val = digit1 + digit2 + curR.val

    if (curR.val > 9) {
      curR.val = curR.val - 10
      curR.next = new ListNode(1)
    }
    cur1 && (cur1 = <Node>cur1.next);
    cur2 && (cur2 = <Node>cur2.next);
    if (cur1 || cur2) {
      curR = curR.next || (curR.next = new ListNode(0))
    }
  }
  return result
}