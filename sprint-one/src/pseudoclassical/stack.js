var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.amount = 0;
};

Stack.prototype.push = function(value) {
  this.amount++;
  this.storage[this.amount] = value;	
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.amount];
  delete this.storage[this.amount];
  if (this.amount > 0) {
    this.amount--;
  }
  return popped;
};

Stack.prototype.size = function() {
  return this.amount;
};
