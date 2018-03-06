import { expect } from 'chai'
import myAtoi from '../src/008.StringToInteger'

describe('008.StringToInteger', () => {
  it('should return 0 given str = \'0\'', () => {
    const str = '0'

    const result = myAtoi(str)

    expect(result).to.equal(0)
  })

  it('should return 1 given str = \'1\'', () => {
    const str = '1'

    const result = myAtoi(str)

    expect(result).to.equal(1)
  })

  it('should return 12345 given str = \'12345\'', () => {
    const str = '12345'

    const result = myAtoi(str)

    expect(result).to.equal(12345)
  })

  it('should return INT_MAX given str = \'9646324351\'', () => {
    const str = '9646324351'

    const result = myAtoi(str)

    expect(result).to.equal(2147483647)
  })

  it('should return INT_MAX given str = \'2147483648\'', () => {
    const str = '2147483648'

    const result = myAtoi(str)

    expect(result).to.equal(2147483647)
  })

  it('should return 1 given str = \'+1\'', () => {
    const str = '+1'

    const result = myAtoi(str)

    expect(result).to.equal(1)
  })

  it('should return -1 given str = \'-1\'', () => {
    const str = '-1'

    const result = myAtoi(str)

    expect(result).to.equal(-1)
  })

  it('should return -12345 given str = \'-12345\'', () => {
    const str = '-12345'

    const result = myAtoi(str)

    expect(result).to.equal(-12345)
  })

  it('should return INT_MIN given str = \'-9646324351\'', () => {
    const str = '-9646324351'

    const result = myAtoi(str)

    expect(result).to.equal(-2147483648)
  })

  it('should return INT_MIN given str = \'-2147483649\'', () => {
    const str = '-2147483649'

    const result = myAtoi(str)

    expect(result).to.equal(-2147483648)
  })

  it('should trim leading whitespaces', () => {
    const str1 = '   +12345'
    const result1 = myAtoi(str1)
    expect(result1).to.equal(12345)

    const str2 = '   -12345'
    const result2 = myAtoi(str2)
    expect(result2).to.equal(-12345)
  })

  it('should ignore any non-digit char after numerical part', () => {
    const str = '12345asdasd'

    const result = myAtoi(str)

    expect(result).to.equal(12345)
  })
})