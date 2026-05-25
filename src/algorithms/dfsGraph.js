export function dfsGraph(
  graph,
  start,
  end
) {

  const visited = new Set();

  const visitedOrder = [];

  const parent = {};

  function dfs(node) {

    if (!node || visited.has(node)) {
      return false;
    }

    visited.add(node);

    visitedOrder.push(node);

    if (node === end) {
      return true;
    }

    const neighbors =
      graph[node] || [];

    for (const neighbor of neighbors) {

      if (!visited.has(neighbor)) {

        parent[neighbor] = node;

        const found =
          dfs(neighbor);

        if (found) {
          return true;
        }
      }
    }

    return false;
  }

  dfs(start);

  // RECONSTRUCT PATH

  const shortestPath = [];

  let currentNode = end;

  while (currentNode !== undefined) {

    shortestPath.unshift(currentNode);

    currentNode =
      parent[currentNode];
  }

  return {
    visitedOrder,
    shortestPath,
  };
}