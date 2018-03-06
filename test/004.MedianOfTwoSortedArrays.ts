import { expect } from 'chai'
import findMedianSortedArrays, {
  findKthElementFrom
} from '../src/004.MedianOfTwoSortedArrays'

describe('004.MedianOfTwoSortedArrays', () => {
  it('should return 0 given nums1 = [0] and nums2 = [0]', () => {
    const nums1 = [0]
    const nums2 = [0]

    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).to.deep.equal(0)
  })

  it('should return 0.5 given nums1 = [0] and nums2 = [1]', () => {
    const nums1 = [0]
    const nums2 = [1]

    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).to.deep.equal(0.5)
  })

  it('should return 3 given nums1 = [3] and nums2 = [1, 3, 5]', () => {
    const nums1 = [3]
    const nums2 = [1, 3, 5]

    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).to.deep.equal(3)
  })

  it('should return 3 given nums1 = [2, 3, 4] and nums2 = [1, 3, 5]', () => {
    const nums1 = [2, 3, 4]
    const nums2 = [1, 3, 5]

    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).to.deep.equal(3)
  })

  it('should return 3.5 given nums1 = [2, 4, 6] and nums2 = [1, 3, 5]', () => {
    const nums1 = [2, 4, 6]
    const nums2 = [1, 3, 5]

    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).to.deep.equal(3.5)
  })

  it('should return 8 given nums1 = [1, 7, 10, 19] and nums2 = [2, 9]', () => {
    const nums1 = [1, 7, 10, 19]
    const nums2 = [2, 9]

    const result = findMedianSortedArrays(nums1, nums2)

    expect(result).to.deep.equal(8)
  })

  describe('findKthElementFrom', () => {
    it('should return 1 given nums1 = [1], nums2 = [2], kth = 1', () => {
      const nums1 = [1]
      const nums2 = [2]
      const kth = 1

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(1)
    })

    it('should return 2 given nums1 = [1], nums2 = [2], kth = 2', () => {
      const nums1 = [1]
      const nums2 = [2]
      const kth = 2

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(2)
    })
    // nums1 elements are absolutely smaller than nums2
    it('should return 3 given nums1 = [1, 2, 3], nums2 = [4, 5, 6], kth = 3', () => {
      const nums1 = [1, 2, 3]
      const nums2 = [4, 5, 6]
      const kth = 3

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(3)
    })
    // nums1 elements are absolutely bigger than nums2
    it('should return 3 given nums1 = [4, 5, 6], nums2 = [1, 2, 3], kth = 3', () => {
      const nums1 = [4, 5, 6]
      const nums2 = [1, 2, 3]
      const kth = 3

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(3)
    })
    // mix magnitude of elements in nums1 and nums2
    it('should return 3 given nums1 = [1, 3, 5], nums2 = [2, 4, 6], kth = 4', () => {
      const nums1 = [1, 3, 5]
      const nums2 = [2, 4, 6]
      const kth = 4

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(4)
    })

    it('should return 6 given nums1 = [1, 4, 7, 8], nums2 = [2, 3, 6, 9], kth = 5', () => {
      const nums1 = [1, 4, 7, 8]
      const nums2 = [2, 3, 6, 9]
      const kth = 5

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(6)
    })
    // nums1 has much more elements than nums2
    it('should return 8 given nums1 = [1, 4, 7, 8, 9, 15, 17], nums2 = [6], kth = 5', () => {
      const nums1 = [1, 4, 7, 8, 9, 15, 17]
      const nums2 = [6]
      const kth = 5

      const result = findKthElementFrom(nums1, nums2, kth)

      expect(result).to.equal(8)
    })
  })
})