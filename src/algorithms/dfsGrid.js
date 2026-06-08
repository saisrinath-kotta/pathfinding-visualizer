export function dfsGrid(
  grid,
  start,
  end
) {

  const rows = grid.length;
  const cols = grid[0].length;

  const stack = [start];

  const visited = new Set();

  const parent = {};

  const visitedOrder = [];

  while (stack.length > 0) {

    const [r, c] = stack.pop();

    const key = `${r}-${c}`;

    if (visited.has(key)) {
      continue;
    }

    visited.add(key);

    visitedOrder.push([r, c]);

    if (
      r === end[0] &&
      c === end[1]
    ) {
      break;
    }

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (const [dr, dc] of directions) {

      const nr = r + dr;
      const nc = c + dc;

      const newKey =
        `${nr}-${nc}`;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        grid[nr][nc] !== "wall" &&
        !visited.has(newKey)
      ) {

        stack.push([nr, nc]);

        if (!parent[newKey]) {

          parent[newKey] =
            [r, c];
        }
      }
    }
  }

  const shortestPath = [];

  let current = end;

  while (current) {

    shortestPath.unshift(current);

    const key =
      `${current[0]}-${current[1]}`;

    current =
      parent[key];
  }

  return {

    visitedOrder,
    shortestPath,
  };
}