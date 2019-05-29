var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.amount = 0;
  return stack;
};



var stackMethods = {};

stackMethods.push = function(value) {
  this.amount++;
  this.storage[this.amount] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.amount];
  delete this.storage[this.amount];
  if (this.amount > 0) {
    this.amount--;
  }
  return popped;
};

stackMethods.size = function() {
  return this.amount;
};


