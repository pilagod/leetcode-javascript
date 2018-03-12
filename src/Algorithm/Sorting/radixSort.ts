export default function radixSort(nums: number[]): number[] {
  let strs = transformNumsToStrs(nums)
  const maxDigits = strs.reduce((result, str) => Math.max(result, str.length), 0)
  const radixes = createRadixes()

  for (let i = 0; i < maxDigits; i++) {
    strs.forEach((str) => {
      if (str.length < i + 1) {
        radixes['0'].push(str)
      } else {
        radixes[str[str.length - i - 1]].push(str)
      }
    })
    strs.length = 0

    for (const digit of Object.keys(radixes)) {
      strs = strs.concat(radixes[digit])
      radixes[digit] = []
    }
  }
  return transformStrsToNums(strs)
}

function transformNumsToStrs(nums: number[]): string[] {
  return nums.reduce((result, num) => {
    result.push(num.toString())
    return result
  }, <string[]>[])
}

function createRadixes(): { [digit: string]: string[] } {
  const result: { [digit: string]: string[] } = {}

  for (let i = 0; i < 10; i++) {
    result[i.toString()] = []
  }
  return result
}

function transformStrsToNums(strs: string[]): number[] {
  return strs.reduce((result, str) => {
    result.push(parseInt(str, 10))
    return result
  }, <number[]>[])
}