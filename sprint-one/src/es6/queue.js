class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.amount = 0;
  }

  enqueue(value) {
    for (var key in this.storage) {
      this.storage[key] += 1;
    }
    this.storage[value] = 1;
    this.amount++;	
  }

  dequeue() {
    var oldestEntryPosition = 0;
    var oldestValue;
    for (var key in this.storage) {
      if (this.storage[key] > oldestEntryPosition) {
        oldestEntryPosition = this.storage[key];
        oldestValue = key;
      }
    }
    delete this.storage[oldestValue];
    this.amount > 0 ? this.amount-- : this.amount = this.amount;
    return oldestValue;
  }

  size() {
    return this.amount;
  }
}
