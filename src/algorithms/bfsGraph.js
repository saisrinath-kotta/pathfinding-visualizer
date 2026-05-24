export function bfsGraph(graph, start, end) {

  const queue = [start];

  const visited = new Set();

  const parent = {};

  const visitedOrder = [];

  visited.add(start);

  while (queue.length > 0) {

    const current = queue.shift();

    visitedOrder.push(current);

    if (current === end) {
      break;
    }

    const neighbors = graph[current] || [];

    for (const neighbor of neighbors) {

      if (!visited.has(neighbor)) {

        visited.add(neighbor);

        parent[neighbor] = current;

        queue.push(neighbor);
      }
    }
  }

  // RECONSTRUCT PATH

  const shortestPath = [];

  let currentNode = end;

  while (currentNode !== undefined) {

    shortestPath.unshift(currentNode);

    currentNode = parent[currentNode];
  }

  return {
    visitedOrder,
    shortestPath,
  };
}