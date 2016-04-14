'use strict';

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // @TODO: build a graph map, test if it contains at least one circular path.
  // @TODO: detect a circle, but might have other course break the cycle.

  // @TODO: the course not needed dependency could take first
  var i, finishCourse;
  var outdegrees = [];
  var indegrees = Array.apply(null, Array(numCourses)).map(function () { return 0 });;
  var count = 0;
  var finishCourses = [];

  for (i = 0; i < numCourses; i += 1) {
    outdegrees[i] = [];
  }

  prerequisites.map(function (prerequisite) {
    // [0] stand for course
    // [1] stand for dependency
    indegrees[prerequisite[0]] += 1;
    outdegrees[prerequisite[1]].push(prerequisite[0]);
  });

  for (i = 0; i < numCourses; i += 1) {
    if (indegrees[i] === 0) {
      finishCourses.push(i);
    }
  }

  while (finishCourses.length > 0) {
    finishCourse = finishCourses.pop();
    count += 1;

    outdegrees[finishCourse].map(function (course) {
      indegrees[course] -= 1;
      if (indegrees[course] === 0) {
        finishCourses.push(course);
      }
    });
  }

  if (count === numCourses) {
    return true;
  }

  return false;
};

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(canFinish(3, [[1, 0]]));
