'use strict';

/**
 *  @NOTE
 *  (1) Initilize Array with default value:
 *    var dp = Array.apply(null, new Array(amount + 1)).map(function () {
 *      return amount + 1;
 *    });
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  var i, j;
  var dp = Array.apply(null, new Array(amount + 1)).map(function () {
    return amount + 1;
  });
  var coinsLength = coins.length;

  dp[0] = 0;

  for (i = 1; i <= amount; i += 1) {
    for (j = 0; j < coinsLength; j += 1) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

var coinsTest = [1, 2, 5];
var amountTest = 11;

console.log(coinChange(coinsTest, amountTest));
