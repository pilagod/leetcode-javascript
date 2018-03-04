import { expect } from 'chai'
import twoSum from '../src/001.TwoSum'

describe('001.TwoSum', () => {
  it('should return [0, 1] given nums = [2, 7, 11, 15] and target = 9', () => {
    const nums = [2, 7, 11, 15]
    const target = 9

    const result = twoSum(nums, target)

    expect(result).to.deep.equal([0, 1])
  })

  it('should return [1, 2] given nums = [3, 2, 4] and target = 6', () => {
    const nums = [3, 2, 4]
    const target = 6

    const result = twoSum(nums, target)

    expect(result).to.deep.equal([1, 2])
  })
})
