/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let l = nums.length - 1

  for (let i = l - 1; i > 0; i -= 1) {
    if (i + nums[i] >= l) {
      l = i
    }
  }
  return nums[0] >= l
};

/* test cases */
let A

A = [2,3,1,1,4]
console.log(canJump(A)); // true

A = [2,3,1,0,4]
console.log(canJump(A)); // true

A = [3,2,1,0,4]
console.log(canJump(A)); // false
