'use strict';

var repeat = function (str, num) {
  return (new Array(num + 1).join(str));
}
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  var wordsLength = words.length;
  var justifiedWords = [];
  var wordLength, curWidth, curWordNum, curStartIndex, evenSpaces, remainSpaces, outputLine, i, j;

  curWidth = maxWidth;
  curStartIndex = 0;

  for (i = 0; i < wordsLength; i += 1) {
    wordLength = words[i].length;

    if (curWidth - wordLength === 0) {
      /* Last word in current line */

      // Push line to justifiedWords
      outputLine = '';
      for (j = curStartIndex; j < i; j += 1) {
        outputLine += words[j] + ' ';
      }
      outputLine += words[i];
      justifiedWords.push(outputLine);

      // Restore curWidth to maxWidth, curStartIndex to next word
      curWidth = maxWidth;
      curStartIndex = i + 1;
    } else if (curWidth - wordLength >= 1) {
      /* Considering space between any two words */

      // Update curWidth then keep going
      curWidth -= (wordLength + 1);

      if (i === wordsLength - 1) {
        outputLine = '';
        for (j = curStartIndex; j <= i; j += 1) {
          outputLine += words[j] + ' ';
        }
        outputLine += repeat(' ', curWidth);
        justifiedWords.push(outputLine);
      }
    } else {
      /* Current word should put to next line -> push previous line to justifiedWords */

      // Add back redundant space previous word added
      curWordNum = i - curStartIndex;
      curWidth += curWordNum;

      // Dividing even spaces
      if (curWordNum === 1) {
        evenSpaces = repeat(' ', curWidth / curWordNum);
        remainSpaces = 0;
      } else {
        evenSpaces = repeat(' ', Math.floor(curWidth / (curWordNum - 1)));
        remainSpaces = curWidth % (curWordNum - 1);
      }

      // Push line to justifiedWords
      outputLine = '';
      for (j = curStartIndex; j < i; j += 1) {
        outputLine += (
          words[j] +
          ((j === i - 1 && curWordNum !== 1) ? '' : evenSpaces) +
          ((remainSpaces-- > 0) ? ' ' : '')
        );
      }
      justifiedWords.push(outputLine);

      // Restore curWidth to maxWidth, curStartIndex to current word
      curWidth = maxWidth;
      curStartIndex = i;

      // Push back one round
      i -= 1;
    }
  }
  return justifiedWords;
};

var wordsTest = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
var maxWidthTest = 16;

console.log(fullJustify(wordsTest, maxWidthTest));
