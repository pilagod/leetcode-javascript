'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var m, n, tmp, i, j, iMin, iMax, halfLength, leftMax, rightMin;

  if (nums1.length > nums2.length) {
    tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  m = nums1.length;
  n = nums2.length;

  if (m === 0 && n === 0) {
    return null;
  }

  halfLength = parseInt((m + n + 1) / 2, 10);
  iMin = 0;
  iMax = m;

  while (iMin <= iMax) {
    i = parseInt((iMax + iMin) / 2, 10);
    j = halfLength - i;

    if (j > 0 && i < m && nums2[j - 1] > nums1[i]) {
      iMin = i + 1
    } else if (i > 0 && j < n && nums1[i - 1] > nums2[j]) {
      iMax = i - 1
    } else {
      console.log(i, j);

      if (i === 0) {
        leftMax = nums2[j - 1];
      } else if (j === 0) {
        leftMax = nums1[i - 1];
      } else {
        leftMax = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return leftMax;
      }

      if (i === m) {
        rightMin = nums2[j];
      } else if (j === n) {
        rightMin = nums1[i];
      } else {
        rightMin = Math.min(nums1[i], nums2[j]);
      }

      console.log(leftMax);
      return (leftMax + rightMin) / 2;
    }
  }
};

console.log(findMedianSortedArrays([1], [1]));
console.log(findMedianSortedArrays([1,2,3,5,6], [4]));
