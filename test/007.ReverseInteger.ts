import { expect } from 'chai'
import reverse from '../src/007.ReverseInteger'

describe('007.ReverseInteger', () => {
  it('should return 0 given num = 0', () => {
    const num = 0

    const result = reverse(num)

    expect(result).to.equal(0)
  })

  it('should return 321 given num = 123', () => {
    const num = 123

    const result = reverse(num)

    expect(result).to.equal(321)
  })

  it('should return -321 given num = -123', () => {
    const num = -123

    const result = reverse(num)

    expect(result).to.equal(-321)
  })

  it('should return 21 given num = 120', () => {
    const num = 120

    const result = reverse(num)

    expect(result).to.equal(21)
  })

  it('should return 0 given num = 1534236469', () => {
    const num = 1534236469

    const result = reverse(num)

    expect(result).to.equal(0)
  })

  it('should return 0 given num = -1534236469', () => {
    const num = -1534236469

    const result = reverse(num)

    expect(result).to.equal(0)
  })
})