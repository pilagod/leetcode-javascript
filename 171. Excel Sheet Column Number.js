'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var i;
  var length = s.length;
  var result = 0;

  for (i = 0; i < length; i += 1) {
    result = result * 26 + (s.charCodeAt(i) - 64);
  }

  return result;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('Z'));
console.log(titleToNumber('AA'));
console.log(titleToNumber('AZ'));
