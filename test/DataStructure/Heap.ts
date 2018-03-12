import { expect } from 'chai'
import Heap from '../../src/DataStructure/Heap'

describe('Heap', () => {
  describe('build heap', () => {
    it('should build heap from top correctly', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7]
      const expected = [7, 4, 6, 1, 3, 2, 5]

      const heap = Heap.heapifyFromTop(nums)

      expect(heap.getCurrentHeapAsArray()).to.deep.equal(expected)
    })

    it('should build heap from bottom correctly', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7]
      const expected = [7, 5, 6, 4, 2, 1, 3]

      const heap = Heap.heapifyFromBottom(nums)

      expect(heap.getCurrentHeapAsArray()).to.deep.equal(expected)
    })
  })

  describe('insert to Heap', () => {
    it('should insert new number properly', () => {
      const heap = new Heap()

      heap.insert(1)
      heap.insert(2)
      heap.insert(3)

      expect(heap.getCurrentHeapAsArray()).to.deep.equal([3, 1, 2])
    })
  })

  describe('remove from Heap', () => {
    it('should return the largest num in Heap and reorgnize the Heap', () => {
      const heap = Heap.heapifyFromBottom([5, 4, 3, 2, 1])

      const result = heap.remove()

      expect(result).to.equal(5)
      expect(heap.getCurrentHeapAsArray()).to.deep.equal([4, 2, 3, 1])
    })
  })

  describe('sort from Heap', () => {
    it('should return a new sorted array from Heap', () => {
      const heap = Heap.heapifyFromBottom([1, 4, 2, 7, 6, 8, 3, 5])

      const result = heap.sort()

      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
    })
  })
})