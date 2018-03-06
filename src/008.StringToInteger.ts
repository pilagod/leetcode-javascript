/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2147483647
const INT_MIN = -2147483648
const THRESHOLD_MAX = Math.floor(INT_MAX / 10)
const THRESHOLD_MIN = Math.ceil(INT_MIN / 10)

export default function myAtoi(str: string): number {
  let idx = 0
  let sign = 1
  let result = 0
  // trim leading whilespace
  while (str[idx] === ' ') {
    idx++
  }
  // decide number sign
  if ('+-'.indexOf(str[idx]) > -1) {
    if (str[idx] === '-') {
      sign = -1
    }
    idx++
  }
  // convert remainig numerical digit char
  while (str[idx] >= '0' && str[idx] <= '9') {
    if (result > THRESHOLD_MAX || result === THRESHOLD_MAX && str[idx] > '7') {
      return INT_MAX
    }
    if (result < THRESHOLD_MIN || result === THRESHOLD_MIN && str[idx] > '8') {
      return INT_MIN
    }
    result = result * 10 + sign * (str.charCodeAt(idx++) - '0'.charCodeAt(0))
  }
  return result
};