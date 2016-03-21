'use strict';
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  var numUsed = {};
  var secretLength = secret.length;
  var bulls = 0;  // A
  var cows = 0;  // B
  var i;

  for (i = 0; i < secretLength; i += 1) {
    if (!numUsed[secret[i]]) {
      numUsed[secret[i]] = 0;
    }
    if (secret[i] === guess[i]) {
      bulls += 1;
    } else {
      numUsed[secret[i]] += 1;
    }
  }

  for (i = 0; i < secretLength; i += 1) {
    if (numUsed[guess[i]] && numUsed[guess[i]] > 0 && secret[i] !== guess[i]) {
      cows += 1;
      numUsed[guess[i]] -= 1;
    }
  }

  return (bulls + 'A' + cows + 'B');
};

// var secretTest = '1123';
// var guessTest = '0111';

// var secretTest = '1807';
// var guessTest = '7810';

var secretTest = '1122';
var guessTest = '1222';

console.log(getHint(secretTest, guessTest));
