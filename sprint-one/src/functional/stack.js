var Stack = function() {
  var someInstance = {};
  var size = 0;
  var storage = {};

  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var popped = storage[size];
    delete storage[size];
    if (size > 0) {
      size--;
    }
    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
