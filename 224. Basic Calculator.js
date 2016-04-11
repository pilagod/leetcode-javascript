'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  var i, length;
  var expressionStack = [];
  var expression = s.replace(/\s/g, '');
  var curExpression = '';

  var calculateExpression = function () {
    var num, operand;
    var sum = 0;

    operand = expressionStack.pop();
    while (typeof operand !== 'undefined' && operand !== '(') {
      switch (operand) {
        case '+':
          sum += num;
          break;
        case '-':
          sum -= num;
          break;
        default:
          num = operand;
      }
      operand = expressionStack.pop();
    }
    // @TODO: push to stack
    sum += num;
    return sum;
  }

  length = expression.length;

  for (i = 0; i < length; i += 1) {
    if (expression[i] === ')') {
      // case right parenthese
      if (curExpression.length > 0) {
        expressionStack.push(parseInt(curExpression, 10));
        // clear current expression
        curExpression = '';
      }
      // pop until '('
      expressionStack.push(calculateExpression());
    } else if (expression[i] === '+' || expression[i] === '-') {
      // case operator
      if (curExpression.length > 0) {
        expressionStack.push(parseInt(curExpression, 10));
        // clear current expression
        curExpression = '';
      }
      // push operator
      expressionStack.push(expression[i]);
    } else if (expression[i] === '(') {
      // case left parenthese
      expressionStack.push(expression[i]);
    } else {
      // case number
      curExpression += expression[i];
    }
  }

  if (curExpression.length > 0) {
    expressionStack.push(parseInt(curExpression, 10));
  }

  // check expressionStack is empty
  if (expressionStack.length > 1) {
    // @TODO: pop all expression
    expressionStack.push(calculateExpression())
  }

  return expressionStack.pop();
};

console.log('0 = ', calculate('0'));
console.log('1+2+3 = ', calculate('1+2+3'));
console.log('1+2-3 = ', calculate('1+2-3'));
console.log('1+(2-3) = ', calculate('1+(2-3)'));
console.log('1+(2+3) = ', calculate('1+(2+3)'));
console.log(' 2-1 + 2 = ', calculate(' 2-1 + 2 '));
console.log('(1+(4+5+2)-3)+(6+8) = ', calculate('(1+(4+5+2)-3)+(6+8)'));
