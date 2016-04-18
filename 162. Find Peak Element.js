'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // Sequential
  // var i;
  // var length = nums.length;
  //
  // for (i = 1; i < length; i += 1) {
  //   if (nums[i] < nums[i - 1]) {
  //     return i - 1
  //   }
  // }
  //
  // return length - 1;

  // Binary
  var binarySearch = function (start, end) {
    var middle, middleNext;

    if (start === end) {
      return start;
    }

    middle = parseInt((start + end) / 2, 10);
    middleNext = middle + 1;

    if (nums[middle] > nums[middleNext]) {
      return binarySearch(start, middle);
    }

    return binarySearch(middleNext, end);
  }

  return binarySearch(0, nums.length - 1);
};

console.log(findPeakElement([1, 2, 3, 1]));
