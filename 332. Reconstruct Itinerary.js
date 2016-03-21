'use strict';

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  var START = 'JFK';
  var PATH_LENGTH = tickets.length + 1;
  var fromCityTable = {};
  var result = [];

  // @TODO: mark fromCityTable if being trace
  var dfs = function (fromCity) {
    var i, toCityArrayLength;

    result.push(fromCity);
    if (result.length === PATH_LENGTH) {
      return true;
    }

    if (!fromCityTable[fromCity]) {
      result.pop();
      return false;
    }

    toCityArrayLength = fromCityTable[fromCity].length;
    for (i = 0; i < toCityArrayLength; i += 1) {
      if (!fromCityTable[fromCity][i].mark) {
        fromCityTable[fromCity][i].mark = true;
        if (dfs(fromCityTable[fromCity][i].city)) {
          return true;
        }
        fromCityTable[fromCity][i].mark = false;
      }
    }

    result.pop();
    return false;
  }

  // @TODO: build a main dictionary for 'from' cities, each having an array of 'to' cites.
  // @TODO: array of 'to' cities should be arranged in ascending itinerary order.
  tickets.map(function (ticket) {
    var i, length, toCityArray;

    // ticket[0] -> 'from' city
    // ticket[1] -> 'to' city
    if (!fromCityTable[ticket[0]]) {
      fromCityTable[ticket[0]] = [{
        'city': ticket[1],
        'mark': false
      }];
    } else {
      toCityArray = fromCityTable[ticket[0]];
      length = toCityArray.length;
      for (i = 0; i < length; i += 1) {
        if (ticket[1] < toCityArray[i].city) {
          toCityArray.splice(i, 0, {
            'city': ticket[1],
            'mark': false
          });
          break;
        }
      }
      if (i === length) {
        toCityArray.push({
          'city': ticket[1],
          'mark': false
        });
      }
    }
  });

  dfs(START);

  return result;
};

var test1 = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
console.log(findItinerary(test1));

var test2 = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(test2));

var test3 = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]];
console.log(findItinerary(test3));

var test4 = [["EZE","TIA"],["EZE","HBA"],["AXA","TIA"],["JFK","AXA"],["ANU","JFK"],["ADL","ANU"],["TIA","AUA"],["ANU","AUA"],["ADL","EZE"],["ADL","EZE"],["EZE","ADL"],["AXA","EZE"],["AUA","AXA"],["JFK","AXA"],["AXA","AUA"],["AUA","ADL"],["ANU","EZE"],["TIA","ADL"],["EZE","ANU"],["AUA","ANU"]];
console.log(findItinerary(test4));
