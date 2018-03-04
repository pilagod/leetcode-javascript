export default function lengthOfLongestSubstring(str: string): number {
  const dict: { [char: string]: number } = {}
  let maxLength = 0
  let curHeadIndex = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] in dict) {
      maxLength = Math.max(maxLength, i - curHeadIndex)
      curHeadIndex = Math.max(curHeadIndex, dict[str[i]] + 1)
    }
    dict[str[i]] = i
  }
  maxLength = Math.max(maxLength, str.length - curHeadIndex)

  return maxLength
}

// export default function lengthOfLongestSubstring(str: string): number {
//   const dict: { [char: string]: number } = {}
//   let headIndex = 0
//   let maxLength = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] in dict) {
//       maxLength = Math.max(maxLength, i - headIndex)
//       headIndex = dict[str[i]] + 1

//       for (let char of Object.keys(dict)) {
//         if (dict[char] < headIndex) {
//           delete dict[char]
//         } else {
//           break
//         }
//       }
//     }
//     dict[str[i]] = i
//   }
//   maxLength = Math.max(maxLength, str.length - headIndex)

//   return maxLength
// }