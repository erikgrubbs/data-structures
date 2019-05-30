var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      var holder = list.head; 
      while (holder.next) {
        holder = holder.next;
      }
      holder.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var holder = list.head.value;
    list.head = list.head.next;
    return holder;
  };

  list.contains = function(target) {
    var holder = list.head;
    var doesContain = false;
    while (holder.next) {
      doesContain = (holder.value === target);
      if (doesContain) {
        return doesContain;
      }
      holder = holder.next;
    }
    return doesContain;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
