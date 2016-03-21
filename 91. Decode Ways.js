'use strict';

/**
* @param {string} s
* @return {number}
*/
var numDecodings = function (s) {
  var sLength = s.length;
  var pre1Result = 1;
  var pre2Result = 1;
  var i, curNum, curResult;

  if (!sLength || s[0] === '0') {
    return 0;
  }

  for (i = 1; i < sLength; i++) {
    curResult = 0;
    curNum = parseInt(s[i], 10);

    if (curNum !== 0) {
      curResult += pre1Result
    }

    if (s[i - 1] === '1' || (s[i - 1] === '2' && curNum <= 6)) {
      curResult += pre2Result;
    } else if (curNum === 0) {
      return 0;
    }

    pre2Result = pre1Result;
    pre1Result = curResult;
  }

  return pre1Result;
};
