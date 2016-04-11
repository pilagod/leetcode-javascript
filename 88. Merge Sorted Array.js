'use strict';

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var i = 0; // for indexing nums1
  var j = 0; // for indexing nums2
  var jStart = 0;

  while (nums1.length > m) {
    nums1.pop();
  }

  while (nums2.length > n) {
    nums2.pop();
  }

  while (i < nums1.length && j < n) {
    if (nums2[j] <= nums1[i]) {
      j += 1;
    } else {
      if (jStart !== j) {
        Array.prototype.splice.apply(nums1, [i, 0].concat(nums2.slice(jStart, j)));
        i += nums2.slice(jStart, j).length
        jStart = j;
      }
      i += 1;
    }
  }

  if (i < (m + n) && j === n) {
    Array.prototype.splice.apply(nums1, [i, 0].concat(nums2.slice(jStart)));
  }

  if (i === nums1.length && j < n) {
    Array.prototype.push.apply(nums1, nums2.slice(j));
  }

  return nums1;
};

console.log(merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6));
// console.log(merge([], 0, [], 0));
// console.log(merge([1], 1, [], 0));
// console.log(merge([1, 0], 1, [2], 1));
// console.log(merge([0], 0, [1], 1));
// console.log(merge([1], 1, [0], 0));
console.log(merge([1, 2, 3, 4], 4, [2, 3, 4], 3));
console.log(merge([1, 2, 3, 4], 4, [5, 6, 7], 3));
// console.log(merge([4, 5, 6, 7], 4, [1, 2, 3], 3));
// console.log(merge([1, 5, 6, 7], 4, [2, 3, 4], 3));
console.log(merge([1, 5, 6, 7], 3, [2, 3, 4], 2));
