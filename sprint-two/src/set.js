var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage.indexOf(item) === -1) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this.storage.indexOf(item) >= 0;
};

setPrototype.remove = function(item) {
  var targIndex = this.storage.indexOf(item);
  if (targIndex >= 0) {
    this.storage.splice(targIndex, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
