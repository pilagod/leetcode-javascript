export default function selectionSort(nums: number[]): number[] {
  const result: number[] = nums.slice()

  for (let i = 0; i < nums.length; i++) {
    swap(result, findMaxIndex(result, 0, result.length - i), result.length - i - 1)
  }
  return result
}

function findMaxIndex(nums: number[], start: number, end: number): number {
  const max = nums.slice(start, end).reduce((max, num) => {
    return Math.max(max, num)
  })
  return nums.indexOf(max)
}

function swap(nums: number[], index1: number, index2: number) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]]
}