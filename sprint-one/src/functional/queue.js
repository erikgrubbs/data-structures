var Queue = function() {
  var someInstance = {};
  var storage = {};
  var size = 0;

  someInstance.enqueue = function(value) {
    for (var key in storage) {
      storage[key] += 1;
    }
    storage[value] = 1;
    size++;
  };

  someInstance.dequeue = function() {
    var oldestEntryPosition = 0;
    var oldestValue;
    for (var key in storage) {
      if (storage[key] > oldestEntryPosition) {
        oldestEntryPosition = storage[key];
        oldestValue = key;
      }
    }
    delete storage[oldestValue];
    size > 0 ? size-- : size = size;
    return oldestValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
