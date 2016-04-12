'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  var i, temp;
  var length = nums.length;

  for (i = 0; i < length; i += 1) {
    while (nums[i] > 0 && nums[i] <= length && nums[i] !== nums[nums[i] - 1]) {
      temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (i = 0; i < length; i += 1) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return length + 1;
};

console.log(firstMissingPositive([4, 2, 5, 3, 1, 1]));
