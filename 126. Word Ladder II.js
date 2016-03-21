'use strict';

var findLadders = function (start, end, dict) {
  // Constants and Check functions.
  var A_CODE = 'a'.charCodeAt(0);
  var WORD_COUNTS = 26;
  var wordLength = start.length;
  var results;
  var currents, next;
  var isFounded = false;

  // Check its from -> to is valid operation.
  var isValid = function (from, to) {
    var i = 0, c = 0;
    while (i < wordLength) {
      if (from.charCodeAt(i) !== to.charCodeAt(i)) {
        ++c;
      }
      ++i;
    }

    return (c === 1);
  };

  // Create replace str, e.g : 'abc' => 'azc', 'adc' ....etc.
  var replacedWord = function (word, idx, chCode) {
    var newStr =
      word.substr(0, idx) + String.fromCharCode(chCode) + word.substr(idx + 1);
    return newStr;
  };

  // If its only one step from start to end.
  if (start === end || isValid(start, end)) {
    return [[start, end]];
  }

  results = [];
  var startSet = new Set([start]);
  var endSet = new Set([end]);
  var startPath = [[start]];
  var endPath = [[end]]
  dict.add(end);
  var isReversing = false;
  var isConnected = false;

  // Use to decide whether use all word possible or use all dice word.
  var wordCombinations = WORD_COUNTS * wordLength;
  var dictComputations;

  // Determine current paths.
  var currentPaths;
  var currentLength;
  var currentSet;
  var pathLength;

  // Next path.
  var nextPaths;

  // Loop vars.
  var currentPath, currentWord, targets, target, tmpPath;

  // Loop variables.
  var i, j, k;

  // Init
  currentPaths = startPath;
  currentSet = startSet;
  currentLength = currentPaths.length;

  while (currentLength > 0) {
    nextPaths = [];
    // Remove words in current set.
    targets = currentSet.keys();
    for (target of targets) {
      dict.delete(target);
    }
    currentSet.clear();
    dictComputations = dict.size * wordLength;
    // Decide whether to use dict iteration of word replaces.
    if (dictComputations < wordCombinations) {
      // If iteration though dict needs less compares, iterate it.
      for (i = 0; i < currentLength; ++i) {
        currentPath = currentPaths[i];
        currentWord = currentPath[currentPath.length - 1];
        targets = dict.keys();
        for (target of targets) {
          if (isValid(currentWord, target)) {
            tmpPath = currentPath.slice();
            tmpPath.push(target);
            nextPaths.push(tmpPath);
            currentSet.add(target);
          }
        }
      }
    } else {
      // Otherwise, use bruteforce to check all possibilities.
      for (i = 0; i < currentLength; ++i) {
        currentPath = currentPaths[i];
        currentWord = currentPath[currentPath.length - 1];
        for (j = 0; j < wordLength; ++j) {
          for (k = 0; k < WORD_COUNTS; ++k) {
            target = replacedWord(currentWord, j, A_CODE + k);
            if (dict.has(target)) {
              tmpPath = currentPath.slice();
              tmpPath.push(target);
              nextPaths.push(tmpPath);
              currentSet.add(target);
            }
          }
        }
      }
    }
    // Put generated paths for next loop.
    if (isReversing) {
      endPath = nextPaths;
    } else {
      startPath = nextPaths;
    }

    // Prepare to check connection
    if (startSet.size > endSet.size) {
      targets = endSet.keys();
      currentSet = startSet;
    } else {
      targets = startSet.keys();
      currentSet = endSet;
    }

    // Check connection.
    for (target of targets) {
      if (currentSet.has(target)) {
        isConnected = true;
        break;
      }
    }
    if (isConnected) {
      break;
    } else {
      // Use the set with smaller size.
      isReversing = startPath.length > endPath.length ? true : false;
      currentSet = isReversing ? endSet : startSet;
      currentPaths = isReversing ? endPath : startPath;
      currentLength = currentPaths.length;
    }
  }

  // If break by connection, connect start with end now.
  if (isConnected) {
    currentLength = startPath.length;
    pathLength = endPath.length;
    // Reverse endPaths.
    for (j = 0; j < pathLength; ++j) {
      endPath[j].reverse();
    }
    for (i = 0; i < currentLength; ++i) {
      currentPath = startPath[i];
      currentWord = currentPath[currentPath.length - 1];
      if (!endSet.has(currentWord)) {
        continue;
      }
      for (j = 0; j < pathLength; ++j) {
        target = endPath[j];
        if (currentWord === target[0]) {
          tmpPath = currentPath.concat(target.slice(1));
          results.push(tmpPath);
        }
      }
    }
  }
  return results;
};
