export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const len1 = nums1.length
  const len2 = nums2.length

  const mid1 = Math.floor((len1 + len2) / 2)
  const mid2 = Math.floor((len1 + len2 - 1) / 2)

  return mid1 === mid2
    ? findKthElementFrom(nums1, nums2, mid1 + 1)
    : (
      findKthElementFrom(nums1, nums2, mid1 + 1) +
      findKthElementFrom(nums1, nums2, mid2 + 1)
    ) / 2
}
export function findKthElementFrom(
  nums1: number[],
  nums2: number[],
  kth: number
): number {
  return findKth(
    { arr: nums1, from: 0, count: nums1.length },
    { arr: nums2, from: 0, count: nums2.length },
    kth
  )
}
type ArraySlice<T> = {
  arr: T[];
  from: number;
  count: number;
}
// time complexity: O(log k)
function findKth(
  s1: ArraySlice<number>,
  s2: ArraySlice<number>,
  kth: number
): number {
  // make sure slice1 is always smaller than slice2
  if (s1.count > s2.count) {
    return findKth(s2, s1, kth)
  }
  // slice1 is empty, kth element is in slice2
  if (s1.count === 0) {
    return s2.arr[s2.from + kth - 1]
  }
  // select the smallest one in current state
  if (kth === 1) {
    return Math.min(s1.arr[s1.from], s2.arr[s2.from])
  }
  const anchor = Math.floor(kth / 2)
  const offset1 = Math.min(s1.count, anchor)
  const offset2 = Math.min(s2.count, anchor)

  if (s1.arr[s1.from + offset1 - 1] > s2.arr[s2.from + offset2 - 1]) {
    return findKth(
      s1,
      { arr: s2.arr, from: s2.from + offset2, count: s2.count - offset2 },
      kth - offset2
    )
  } else {
    return findKth(
      { arr: s1.arr, from: s1.from + offset1, count: s1.count - offset1 },
      s2,
      kth - offset1
    )
  }
}