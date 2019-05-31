

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.indexOf(node) > -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes.splice(this.nodes.indexOf(node), 1);
  this.edges = this.edges.filter(edge => {
    return !edge.includes(node);
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges.includes(fromNode + ' ' + toNode) || this.edges.includes(toNode + ' ' + fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push(fromNode + ' ' + toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeIndex = this.edges.indexOf(fromNode + ' ' + toNode);
  if (edgeIndex < 0) {
    edgeIndex = this.edges.indexOf(toNode + ' ' + fromNode);
  }
  this.edges.splice(edgeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(node => {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode - O(1)
 contains - O(n)
 removeNode - O(n)
 hasEdge - O(n)
 addEdge - O(1)
 removeEdge - O(n)
 forEachNode - O(n)

 Some of these are 2n or more, but going with big O
 */


