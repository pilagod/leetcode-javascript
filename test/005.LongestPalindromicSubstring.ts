import { expect } from 'chai'
import longestPalindrome from '../src/005.LongestPalindromicSubstring'

describe('005.LongestPalindromicSubstring', () => {
  it('should return \'a\' given str = \'a\'', () => {
    const str = 'a'

    const result = longestPalindrome(str)

    expect(result).to.equal('a')
  })

  it('should return \'aba\' given str = \'aba\'', () => {
    const str = 'aba'

    const result = longestPalindrome(str)

    expect(result).to.equal('aba')
  })

  it('should return \'a\' given str = \'abcd\'', () => {
    const str = 'a'

    const result = longestPalindrome(str)

    expect(result).to.equal('a')
  })

  it('should return \'bb\' given str = \'cbbd\'', () => {
    const str = 'bb'

    const result = longestPalindrome(str)

    expect(result).to.equal('bb')
  })

  it('should return \'ababa\' given str = \'aaaababac\'', () => {
    const str = 'ababa'

    const result = longestPalindrome(str)

    expect(result).to.equal('ababa')
  })

  it('should return \'aaaaa\' given str = \'aaaabcaaaaa\'', () => {
    const str = 'aaaaa'

    const result = longestPalindrome(str)

    expect(result).to.equal('aaaaa')
  })

  it('should return \'efe\' given str = \'abcdefe\'', () => {
    const str = 'abcdefe'

    const result = longestPalindrome(str)

    expect(result).to.equal('efe')
  })

  it('should return \'sknks\' given str = \'jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel\'', () => {
    const str = 'jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel'

    const result = longestPalindrome(str)

    expect(result).to.equal('sknks')
  })
})