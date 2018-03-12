import { expect } from 'chai'

export default function testCasesRunner(
  sort: (nums: number[]) => number[]
) {
  const name = sort.name

  describe(`${name}`, () => {
    it('should sort [] to []', () => {
      const nums = []

      const result = sort(nums)

      expect(result).to.deep.equal([])
    })

    it('should sort [1] to [1]', () => {
      const nums = [1]

      const result = sort(nums)

      expect(result).to.deep.equal([1])
    })

    it('should sort [3, 2, 1] to [1, 2, 3]', () => {
      const nums = [3, 2, 1]

      const result = sort(nums)

      expect(result).to.deep.equal([1, 2, 3])
    })

    it('should sort [23, 103, 15, 2] to [2, 15, 23, 103]', () => {
      const nums = [23, 103, 15, 2]

      const result = sort(nums)

      expect(result).to.deep.equal([2, 15, 23, 103])
    })

    it('should sort [234, 446, 34, 23, 56, 1, 4787, 102, 28, 74, 91] to [1, 23, 28, 34, 56, 74, 91, 102, 234, 446, 4787]', () => {
      const nums = [234, 446, 34, 23, 56, 1, 4787, 102, 28, 74, 91]

      const result = sort(nums)

      expect(result).to.deep.equal([1, 23, 28, 34, 56, 74, 91, 102, 234, 446, 4787])
    })
  })
}