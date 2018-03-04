import { expect } from 'chai'
import lengthOfLongestSubstring from '../src/003.LongestSubstringWithoutRepeatingCharacters'

describe('003.LongestSubstringWithoutRepeatingCharacters', () => {
  it('should return 0 given empty string', () => {
    const str = ''

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(0)
  })

  it('should return 1 given string \'a\'', () => {
    const str = 'a'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(1)
  })

  it('should return 1 given string \'aa\'', () => {
    const str = 'aa'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(1)
  })

  it('should return 1 give string \'bbbbb\'', () => {
    const str = 'bbbbb'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(1)
  })

  it('should return 3 give string \'abcabcbb\'', () => {
    const str = 'abcabcbb'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(3)
  })

  it('should return 3 give string \'pwwkew\'', () => {
    const str = 'pwwkew'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(3)
  })

  it('should return 2 given string \'cdd\'', () => {
    const str = 'cdd'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(2)
  })

  it('should return 4 give string \'abcabcd\'', () => {
    const str = 'abcabcd'

    const result = lengthOfLongestSubstring(str)

    expect(result).to.equal(4)
  })
})