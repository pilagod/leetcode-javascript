'use strict';

var Heap = function (length) {
  // Start from index 1
  this.data = new Array(length + 1);
  this.tail = 0;
}

Heap.prototype.insert = function (value) {
  var parent, child;

  this.tail += 1;

  child = this.tail;
  parent = Math.floor(child / 2);

  while (parent >= 1) {
    if (this.data[parent] < value) {
      this.data[child] = this.data[parent];
      child = parent;
      parent = Math.floor(parent / 2);
    } else {
      this.data[child] = value;
      break;
    }
  }

  if (parent < 1) {
    this.data[child] = value;
  }
}

Heap.prototype.remove = function () {
  var parent, child;
  var rootValue = this.data[1];
  var tailValue = this.data[this.tail];

  delete this.data[1];
  delete this.data[this.tail];
  this.tail -= 1;

  parent = 1;
  child = 2;

  while (child <= this.tail) {
    if (this.data[child] < this.data[child + 1]) {
      child = child + 1;
    }
    if (this.data[child] > tailValue) {
      this.data[parent] = this.data[child];
      parent = child;
      child = 2 * child;
    } else {
      this.data[parent] = tailValue;
      break;
    }
  }

  if (child > this.tail) {
    this.data[parent] = tailValue;
  }

  return rootValue;
}
