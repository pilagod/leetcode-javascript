import { expect } from 'chai'
import addTwoNumbers, { Node, ListNode } from '../src/002.AddTwoNumbers'

describe('002.AddTwoNumbers', () => {
  function verifyListByArray(
    got: Node,
    expected: number[]
  ) {
    expect(listToArray(got)).to.deep.equal(expected)
  }
  function listToArray(list: Node): number[] {
    const result = []

    for (let cur = list; cur != null; cur = cur.next) {
      result.push(cur.val)
    }
    return result
  }
  function arrayToList(digits: number[]): Node {
    let head = null
    let cur = null

    digits.map((digit) => {
      if (head === null) {
        head = new ListNode(digit)
        cur = head
      } else {
        cur.next = new ListNode(digit)
        cur = cur.next
      }
    })
    return head
  }

  it('should return (0) given two list (null) and (null)', () => {
    const l1 = null
    const l2 = null

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [0])
  })

  it('should return (0) given two list (0) and (0)', () => {
    const l1 = arrayToList([0])
    const l2 = arrayToList([0])

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [0])
  })

  it('should return (5) given two list (2) and (3)', () => {
    const l1 = arrayToList([2])
    const l2 = arrayToList([3])

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [5])
  })

  it('should return (2 -> 1) given two list (5) and (7)', () => {
    const l1 = arrayToList([5])
    const l2 = arrayToList([7])

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [2, 1])
  })

  it('should return (5 -> 3) given two list (2 -> 1) and (3 -> 2)', () => {
    const l1 = arrayToList([2, 1])
    const l2 = arrayToList([3, 2])

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [5, 3])
  })

  it('should return (7 -> 0 -> 8) given two list (2 -> 4 -> 3) and (5 -> 6 -> 4)', () => {
    const l1 = arrayToList([2, 4, 3])
    const l2 = arrayToList([5, 6, 4])

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [7, 0, 8])
  })

  it('should return (1 -> 1 -> 2 -> 1) given two list (2 -> 4 -> 7) and (9 -> 6 -> 4)', () => {
    const l1 = arrayToList([2, 4, 7])
    const l2 = arrayToList([9, 6, 4])

    const result = addTwoNumbers(l1, l2)

    verifyListByArray(result, [1, 1, 2, 1])
  })
})