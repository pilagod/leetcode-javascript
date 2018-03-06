/**
 * @param {string} str
 * @param {number} numRows
 * @return {string}
 */
export default function convert(str: string, numRows: number) {
  const lines: { [line: string]: string[] } = {}
  const next = initNext(numRows)

  if (str.length === 0 || numRows === 1) {
    return str
  }
  // initialize lines
  for (let i = 0; i < numRows; i++) {
    lines[i + 1] = []
  }
  for (let i = 0; i < str.length; i++) {
    lines[next()].push(str[i])
  }
  let result: string[] = []

  for (const line of Object.keys(lines)) {
    result = result.concat(lines[line])
  }
  return result.join('')
}

function initNext(numRows: number) {
  const increment = (num: number) => num + 1
  const decrement = (num: number) => num - 1

  let line: number = 0
  let strategy: (num: number) => number = increment

  return () => {
    if (line === 1) {
      strategy = increment
    }
    if (line === numRows) {
      strategy = decrement
    }
    return line = strategy(line)
  }
}
// export default function convert(str: string, numRows: number) {
//   const lines: { [line: string]: string[] } = {}

//   if (str.length === 0 || numRows === 1) {
//     return str
//   }
//   // initialize lines
//   for (let i = 0; i < numRows; i++) {
//     lines[i] = []
//   }
//   let i = 0

//   while (i < str.length) {
//     for (let idx = 0; idx < numRows && i < str.length; idx++) {
//       lines[idx].push(str[i++])
//     }
//     for (let idx = numRows - 2; idx >= 1 && i < str.length; idx--) {
//       lines[idx].push(str[i++])
//     }
//   }
//   let result: string[] = []

//   for (const line of Object.keys(lines)) {
//     result = result.concat(lines[line])
//   }
//   return result.join('')
// }
