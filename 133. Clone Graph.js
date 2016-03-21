'use strict';
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

var UndirectedGraphNode = function (label) {
  this.label = label;
  this.neighbors = [];
};

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  if (!graph) {
    return null;
  }
  var cloneMap = {};
  var dfs = function (node) {
    if (!cloneMap[node.label]) {
      cloneMap[node.label] = new UndirectedGraphNode(node.label);
    }
    node.neighbors.forEach(function (neighborNode) {
      if (!cloneMap[neighborNode.label]) {
        dfs(neighborNode);
      }
      cloneMap[node.label].neighbors.push(cloneMap[neighborNode.label]);
    });
  };

  dfs(graph);

  return cloneMap[graph.label];
};

var node0 = new UndirectedGraphNode(0);
var node1 = new UndirectedGraphNode(1);
var node2 = new UndirectedGraphNode(2);

node0.neighbors.push(node1, node2);
node1.neighbors.push(node0, node2);
node2.neighbors.push(node0, node1, node2, node2);

console.log(node0, node1, node2);

cloneGraph(node0);
