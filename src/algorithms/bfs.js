export function bfs(grid, start, end) {
  console.log("BFS started");

  let queue = [start];
  let visited = new Set();
  let parent = {};

  visited.add(JSON.stringify(start));

  while (queue.length > 0) {
    let current = queue.shift();

    console.log("Visiting:", current);

    if (
      current.row === end.row &&
      current.col === end.col
    ) {
      console.log("Path found!");
      return reconstructPath(parent, start, end);
    }

    let neighbors = getNeighbors(current, grid);

    for (let next of neighbors) {
      let key = JSON.stringify(next);

      if (!visited.has(key)) {
        visited.add(key);
        queue.push(next);
        parent[key] = current;
      }
    }
  }

  return [];
}

// 🔹 Reconstruct path
function reconstructPath(parent, start, end) {
  let path = [];
  let current = end;

  while (current) {
    path.push(current);
    let key = JSON.stringify(current);
    current = parent[key];
  }

  return path.reverse();
}

// 🔹 Get neighbors (grid movement)
function getNeighbors(node, grid) {
  let neighbors = [];

  let directions = [
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 },  // down
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }   // right
  ];

  for (let dir of directions) {
    let newRow = node.row + dir.row;
    let newCol = node.col + dir.col;

    if (
      newRow >= 0 &&
      newCol >= 0 &&
      newRow < grid.length &&
      newCol < grid[0].length
    ) {
      neighbors.push({ row: newRow, col: newCol });
    }
  }

  return neighbors;
}