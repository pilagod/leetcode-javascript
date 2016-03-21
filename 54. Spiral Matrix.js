'use strict';

/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  var totalNums = matrix.length * matrix[0].length;
  var result = [];

  function nextStep(curRow, curCol, curDirection) {
    if (result.length === totalNums) {
      return result;
    }
    result.push(matrix[curRow][curCol]);
    matrix[curRow][curCol] = null;
    switch (curDirection) {
      case 'right':
        if (!matrix[curRow][curCol + 1]) {
          curRow += 1;
          curDirection = 'down';
        } else {
          curCol += 1
        }
        break;
      case 'down':
        if (!matrix[curRow + 1] || !matrix[curRow + 1][curCol]) {
          curCol -= 1;
          curDirection = 'left';
        } else {
          curRow += 1;
        }
        break;
      case 'left':
        if (!matrix[curRow][curCol - 1]) {
          curRow -= 1;
          curDirection = 'top';
        } else {
          curCol -= 1;
        }
        break;
      case 'top':
        if (!matrix[curRow - 1] || !matrix[curRow - 1][curCol]) {
          curCol += 1;
          curDirection = 'right';
        } else {
          curRow -= 1;
        }
        break;
      default:
    }
    return nextStep(curRow, curCol, curDirection);
  }
  return nextStep(0, 0, 'right');
};
