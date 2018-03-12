export default function quickSort(nums: number[]): number[] {
  const result = nums.slice()
  _quickSort(result, 0, result.length - 1)
  return result
}

function _quickSort(nums: number[], start: number, end: number) {
  if (start >= end) {
    return
  }
  const anchor = partition(nums, start, end)

  _quickSort(nums, start, anchor - 1)
  _quickSort(nums, anchor + 1, end)
}

function partition(nums: number[], start: number, end: number): number {
  let left = start
  let right = end

  while (left < right) {
    while (nums[left] <= nums[start] && left <= right) {
      left++
    }
    while (nums[right] > nums[start] && left <= right) {
      right--
    }
    if (left < right) {
      swap(nums, left, right)
    }
  }
  swap(nums, start, right)

  return right
}

function swap(nums: number[], index1: number, index2: number) {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]]
}