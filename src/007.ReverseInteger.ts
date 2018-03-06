/**
 * @param {number} num
 * @return {number}
 */
export default function reverse(num: number): number {
  const upper = 2147483647 // 2^31 - 1
  const lower = -2147483648 // -2^31
  const str = num.toString()
  const result = parseInt(
    str[0] === '-'
      ? str[0] + reverseString(str.slice(1))
      : reverseString(str)
    , 10)
  if (result > upper || result < lower) {
    return 0
  }
  return result
}

function reverseString(str: string): string {
  return str.split('').reverse().join('')
}