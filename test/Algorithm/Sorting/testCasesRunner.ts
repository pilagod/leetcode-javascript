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
  })
}