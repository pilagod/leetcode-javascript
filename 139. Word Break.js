'use strict';
/**
 * @param {string} string
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (string, wordDict) {
  var i, j;
  var stringLength = string.length;
  var dp = {};

  dp[0] = true;
  dp[stringLength] = false;

  for (i = 1; i <= stringLength; i += 1) {
    for (j = 0; j < i; j += 1) {
      if (dp[j] && wordDict.has(string.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[stringLength];
};

var stringTest = 'abcd';
var wordDictTest = new Set(['a', 'abc', 'b', 'cd']);

console.log(wordBreak(stringTest, wordDictTest));
