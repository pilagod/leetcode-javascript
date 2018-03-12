export default function mergeSort(nums: number[]): number[] {
  if (nums.length === 0) {
    return []
  }
  return _mergeSort(nums.slice())
}

function _mergeSort(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums
  }
  if (nums.length === 2) {
    return nums[0] > nums[1] ? nums.reverse() : nums
  }
  const middle = Math.floor((nums.length) / 2)

  return merge(
    _mergeSort(nums.slice(0, middle)),
    _mergeSort(nums.slice(middle, nums.length))
  )
}

function merge(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []

  let i = 0
  let j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i])
      i++
    }
    if (nums2[j] < nums1[i]) {
      result.push(nums2[j])
      j++
    }
  }
  return result.concat(
    i === nums1.length
      ? nums2.slice(j)
      : nums1.slice(i)
  )
}