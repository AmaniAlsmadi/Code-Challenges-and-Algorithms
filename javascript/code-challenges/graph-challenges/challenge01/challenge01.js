function breadthFirst(graph, root) {

  let visitedNode = {};

  for (let i = 0; i < graph.length; i++) {
      visitedNode[i] = Infinity;
  }
  visitedNode[root] = 0;

  let queue = [root];
  let current;

  while (queue.length != 0) {
      current = queue.shift();

      let connection = graph[current];
      let array = [];
      let idx = connection.indexOf(1);
      while (idx != -1) {
          array.push(idx);
          idx = connection.indexOf(1, idx + 1);
      }

      for (let j = 0; j < array.length; j++) {
          if (visitedNode[array[j]] == Infinity) {
              visitedNode[array[j]] = visitedNode[current] + 1;
              queue.push(array[j]);
          }
      }
  }
  return visitedNode;
}

module.exports = breadthFirst;