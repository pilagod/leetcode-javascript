'use strict';

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  var length = nums.length;

  if (length === 0) {
    return 0
  }

  var i;
  var sums = [];
  var merge = function (start, end) {
    // only one element
    if (start === end) {
      return 0;
    }

    var middle = parseInt((start + end) / 2, 10);
    var count = merge(start, middle) + merge(middle + 1, end);

    var lowerIndex = middle + 1;
    var upperIndex = middle + 1;
    var sortIndex = middle + 1;

    var curIndex;
    var cache = [];

    for (curIndex = start; curIndex <= middle; curIndex += 1) {
      while (lowerIndex <= end && sums[lowerIndex] - sums[curIndex] < lower) {
        lowerIndex += 1;
      }
      // lowerIndex should count in
      // upperIndex = lowerIndex;
      while (upperIndex <= end && sums[upperIndex] - sums[curIndex] <= upper) {
        upperIndex += 1;
      }
      // upperIndex should not count in
      count += upperIndex - lowerIndex;

      while (sortIndex <= end && sums[sortIndex] < sums[curIndex]) {
        cache.push(sums[sortIndex]);
        sortIndex += 1;
      }

      cache.push(sums[curIndex]);
    }
    [].splice.apply(sums, [].concat(start, cache.length, cache));
    return count;
  };

  // sums[0] = 0 to ensure nums[0] would be calculated in count
  sums.push(0);

  for (i = 0; i < length; i += 1) {
    sums[i + 1] = sums[i] + nums[i];
  }

  return merge(0, length);
};

// test cases
console.log(countRangeSum([-2, 5, -1], -2, 2));
console.log(countRangeSum([-2, 5, -1, -1], -2, 2));
