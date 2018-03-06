import { expect } from 'chai'
import convert from '../src/006.ZigZagConversion'

describe('006.ZigZagConversion', () => {
  const str = 'PAYPALISHIRING'

  it('should return empty string given empty string', () => {
    const result = convert('', 100)

    expect(result).to.equal('')
  })

  it('should return a string same as input string given numRows = 1', () => {
    const numRows = 1

    const result = convert(str, numRows)

    expect(result).to.equal('PAYPALISHIRING')
  })

  it('should return \'PYAIHRNAPLSIIG\' given str = \'PAYPALISHIRING\' and numRows = 2', () => {
    const numRows = 2

    const result = convert(str, numRows)

    expect(result).to.equal('PYAIHRNAPLSIIG')
  })

  it('should return \'PAHNAPLSIIGYIR\' given str = \'PAYPALISHIRING\' and numRows = 3', () => {
    const numRows = 3

    const result = convert(str, numRows)

    expect(result).to.equal('PAHNAPLSIIGYIR')
  })

  it('should return \'PINALSIGYAHRPI\' given str = \'PAYPALISHIRING\' and numRows = 3', () => {
    const numRows = 4

    const result = convert(str, numRows)

    expect(result).to.equal('PINALSIGYAHRPI')
  })
})