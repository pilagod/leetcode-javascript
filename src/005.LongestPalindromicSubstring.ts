/**
 * @param {string} str
 * @return {string}
 */
export default function longestPalindrome(
  str: string
): string {
  let start = 0
  let maxLength = 1

  for (let i = 0; i < str.length - 1; i++) {
    const len = Math.max(
      extendPalindromeFromGivenRange(i, i, str),
      extendPalindromeFromGivenRange(i, i + 1, str)
    )
    if (len > maxLength) {
      start = i - Math.floor((len - 1) / 2)
      maxLength = len
    }
  }
  return str.slice(start, start + maxLength);
}

function extendPalindromeFromGivenRange(
  start: number,
  end: number,
  str: string
): number {
  let [s, e] = [start, end]

  while (s >= 0 && e < str.length && str[s] === str[e]) {
    s--
    e++
  }
  return e - s - 1
}

// export default function longestPalindrome(str: string): string {
//   let start = 0
//   let maxLength = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str.length - i < maxLength) {
//       break
//     }
//     for (let j = str.length - 1; j >= i; j--) {
//       if (j - i + 1 < maxLength) {
//         break
//       }
//       if (str[i] === str[j] && isPalindromeOfGivenRange(i, j, str)) {
//         if (j - i + 1 > maxLength) {
//           start = i
//           maxLength = j - i + 1
//         }
//       }
//     }
//   }
//   return str.slice(start, start + maxLength)
// }
//
// function isPalindromeOfGivenRange(
//   start: number,
//   end: number,
//   str: string
// ): boolean {
//   while (str[start] === str[end] && start < end) {
//     start++
//     end--
//   }
//   return start >= end
// }
