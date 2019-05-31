var BinarySearchTree = function(value) {
  this.left = undefined;
  this.right = undefined;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
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
  cb(this.value); 
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 Insert - O(log n)
 Contains - O(log n)
 depthFirstLog - O(n)
 */
