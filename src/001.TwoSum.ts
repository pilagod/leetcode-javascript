/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(
  nums: number[],
  target: number
): number[] {
  const record: { [diff: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in record) {
      return [record[nums[i]], i]
    } else {
      record[target - nums[i]] = i
    }
  }
  return []
}