var BinarySearchTree = function(value) {
  this.left = undefined;
  this.right = undefined;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  // check if less or more
  var tree = new BinarySearchTree(value);

  if (tree.value < this.value) {
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = tree;
    }
  }

  if (value > this.value) {
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = tree; 
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // check if current tree has value
  // check if value is less than or greater than current value
  // run contains on that 
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
