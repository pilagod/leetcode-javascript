export default function insertionSort(nums: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    let j = i - 1

    for (; j >= 0; j--) {
      if (result[j] <= nums[i]) {
        result.splice(j + 1, 0, nums[i])
        break
      }
    }
    if (j < 0) {
      result.splice(0, 0, nums[i])
    }
  }
  return result
}