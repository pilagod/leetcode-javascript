'use strict';
/**
 * @constructor
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.queue = [];
  this.items = {};
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.items[key]) {
    return -1;
  }
  this.queue.splice(this.items[key].index, 1);
  this.updateIndex(this.items[key].index);
  this.items[key].index = this.queue.push(key) - 1;
  return this.items[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
  if (this.items[key]) {
    this.items[key].value = value;
    this.queue.splice(this.items[key].index, 1);
    this.updateIndex(this.items[key].index);
    this.items[key].index = this.queue.push(key) - 1;
  } else {
    if (this.queue.length >= this.capacity) {
      delete this.items[this.queue.shift()];
      this.updateIndex(0);
    }
    this.items[key] = {
      value: value,
      index: this.queue.push(key) - 1
    };
  }
};

LRUCache.prototype.updateIndex = function (startIndex) {
  var i;
  var queueLength = this.queue.length;

  for (i = startIndex; i < queueLength; i += 1) {
    this.items[this.queue[i]].index -= 1;
  }
};

var cache = new LRUCache(3);

// 1, [set(2,1),get(2),set(3,2),get(2),get(3)]
// 2, [set(2,1),set(1,1),get(2),set(4,1),get(1),get(2)]
// 3, [set(1,1),set(2,2),set(3,3),set(4,4),get(4),get(3),get(2),get(1),set(5,5),get(1),get(2),get(3),get(4),get(5)]
cache.set(1, 1);
cache.set(2, 2);
cache.set(3, 3);
cache.set(4, 4);
console.log(cache.get(4));
console.log(cache.get(3));
console.log(cache.get(2));
console.log(cache.get(1));
cache.set(5, 5);
console.log(cache.get(1));
console.log(cache.get(2));
console.log(cache.get(3));
console.log(cache.get(4));
console.log(cache.get(5));
