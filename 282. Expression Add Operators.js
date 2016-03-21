'use strict';

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  var result = [];
  var length = num.length;
  var dfs = function (path, sum, preValue, startIndex) {
    var i, curValue;

    // Traverse done
    if (startIndex === length) {
      if (sum === target) {
        result.push(path);
      }
      return;
    }

    // Try all possible combinations
    for (i = startIndex; i < length; i += 1) {
      if (i !== startIndex && num[startIndex] === '0') {
        break;
      }

      curValue = parseInt(num.substring(startIndex, i + 1), 10);

      if (startIndex === 0) {
        dfs(path + curValue, curValue, curValue, i + 1);
      } else {
        dfs(path + '+' + curValue, sum + curValue, curValue, i + 1);
        dfs(path + '-' + curValue, sum - curValue, -curValue, i + 1);
        dfs(path + '*' + curValue, sum - preValue + preValue * curValue, preValue * curValue, i + 1);
      }
    }
  };

  if (!num || length === 0) {
    return result;
  }

  dfs('', 0, 0, 0);

  return result;
};

console.log(addOperators('123', 6));
console.log(addOperators('232', 8));
console.log(addOperators('105', 5));
console.log(addOperators('00', 0));
console.log(addOperators('3456237490', 9191));
