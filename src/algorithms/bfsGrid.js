export function bfsGrid(
  grid,
  start,
  end
) {

  const rows = grid.length;
  const cols = grid[0].length;

  // ---------------- DATA STRUCTURES ----------------

  const visited = Array(rows)
    .fill()
    .map(() =>
      Array(cols).fill(false)
    );

  const parent = Array(rows)
    .fill()
    .map(() =>
      Array(cols).fill(null)
    );

  const queue = [];

  const visitedOrder = [];

  // ---------------- INITIALIZE BFS ----------------

  queue.push(start);

  visited[start[0]][start[1]] = true;

  // ---------------- DIRECTIONS ----------------

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // ---------------- BFS LOOP ----------------

  while (queue.length > 0) {

    const [x, y] = queue.shift();

    visitedOrder.push([x, y]);

    // END FOUND

    if (
      x === end[0] &&
      y === end[1]
    ) {
      break;
    }

    // EXPLORE NEIGHBORS

    for (const [dx, dy] of directions) {

      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < rows &&
        ny < cols &&
        !visited[nx][ny] &&
        grid[nx][ny] !== "wall"
      ) {

        visited[nx][ny] = true;

        parent[nx][ny] = [x, y];

        queue.push([nx, ny]);
      }
    }
  }

  // ---------------- RECONSTRUCT PATH ----------------

  const shortestPath = [];

  let current = end;

  while (current) {

    shortestPath.unshift(current);

    current =
      parent[current[0]][current[1]];
  }

  // ---------------- RETURN RESULT ----------------

  return {
    visitedOrder,
    shortestPath,
  };
}