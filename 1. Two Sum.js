'use strict';

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
  var numsLength = nums.length
  var recordedData = {};
  var diff;

  for (var i = 0; i < nums.length; i++) {
    if (recordedData[nums[i]]) {
      return [recordedData[nums[i]], i + 1];
    } else {
      diff = target - nums[i];
      recordedData[diff] = i + 1;
    }
  }
  return [];
};
