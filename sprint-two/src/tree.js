var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    var isFound;
    for (var i = 0; i < this.children.length; i++) {
      if (isFound) {
        break;
      }
      isFound = this.children[i].contains(target);
    }
    return isFound;
  } 
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
