

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._entries = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._entries++;
  if (this._entries > this._limit * 0.75) {
    this.expand();
  }   
  if (this._entries < this._limit * 0.25) {
    this.halve();
  } 
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else if (this._storage.get(index).length) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      }
    }
    this._storage.get(index).push([k, v]);
  } 
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.set((index), undefined);
      break;
    }
  }
  this._entries--;
  if (this._entries > this._limit * 0.75) {
    this.expand();
  }   
  if (this._entries < this._limit * 0.25) {
    this.halve();
  } 
};

HashTable.prototype.expand = function() {
  var doubledTable = new HashTable(this._limit * 2);
  doubledTable._entries = this._entries;
  var storageArr = this._storage.get();
  
  for (var i = 0; i < storageArr.length; i++) {
    if (storageArr[i] !== undefined) { // check that entry exists
      for (var x = 0; x < storageArr[i].length; x++) {
        doubledTable.insert(storageArr[i][x][0], storageArr[i][x][1]);
      }     
    }
  }
  this._limit = doubledTable._limit;
  this._storage = doubledTable._storage;  
};

HashTable.prototype.halve = function() {
  var halvedTable = new HashTable(this._limit / 2);
  halvedTable._entries = this._entries;
  var storageArr = this._storage.get();

  for (var i = 0; i < storageArr.length; i++) {
    if (storageArr[i] !== undefined) { // check that entry exists
      for (var x = 0; x < storageArr[i].length; x++) {
        halvedTable.insert(storageArr[i][x][0], storageArr[i][x][1]);
      }     
    }
  }

  this._limit = halvedTable._limit;
  this._storage = halvedTable._storage;  
};

/*
Complexity: What is the time complexity of the above functions?

insert: essentially O(1), it handles very small iterations in the case of collisions
retrieve: essentially O(1), same as above
remove: essentially O(1), same as above
 */


