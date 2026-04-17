import { useState } from "react";

function Grid() {
  const rows = 10;
  const cols = 10;

  const [grid, setGrid] = useState(
    Array(rows).fill().map(() => Array(cols).fill("empty"))
  );

  const handleClick = (i, j) => {
    const newGrid = grid.map(row => [...row]);

    if (newGrid[i][j] === "empty") {
      newGrid[i][j] = "wall";
    } else if (newGrid[i][j] === "wall") {
      newGrid[i][j] = "empty";
    }

    setGrid(newGrid);
  };

  const setStart = (i, j) => {
    const newGrid = grid.map(row => row.map(cell => cell === "start" ? "empty" : cell));
    newGrid[i][j] = "start";
    setGrid(newGrid);
  };

  const setEnd = (i, j) => {
    const newGrid = grid.map(row => row.map(cell => cell === "end" ? "empty" : cell));
    newGrid[i][j] = "end";
    setGrid(newGrid);
  };

  const runBFS = () => {
  let start = null;
  let end = null;

  // find start and end
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "start") start = [i, j];
      if (grid[i][j] === "end") end = [i, j];
    }
  }

  if (!start || !end) {
    alert("Set start and end first!");
    return;
  }

  let visited = Array(rows).fill().map(() => Array(cols).fill(false));
  let parent = Array(rows).fill().map(() => Array(cols).fill(null));

  let queue = [];
  queue.push(start);
  visited[start[0]][start[1]] = true;

  let directions = [[1,0], [-1,0], [0,1], [0,-1]];

 while (queue.length > 0) {
  let [x, y] = queue.shift();

  if (x === end[0] && y === end[1]) break;

  for (let [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;

    if (
      nx >= 0 && ny >= 0 &&
      nx < rows && ny < cols &&
      !visited[nx][ny] &&
      grid[nx][ny] !== "wall"
    ) {

      visited[nx][ny] = true;
      parent[nx][ny] = [x, y];

      queue.push([nx, ny]);

      if (grid[nx][ny] !== "end") {
        grid[nx][ny] = "visited";
      }
    }
  }
}

  // build path
  let path = [];
  let curr = end;

  while (curr) {
    path.push(curr);
    curr = parent[curr[0]][curr[1]];
  }

  // show path
  const newGrid = [...grid];

  path.forEach(([i, j], index) => {
  setTimeout(() => {
    if (newGrid[i][j] !== "start" && newGrid[i][j] !== "end") {
      newGrid[i][j] = "path";
      setGrid([...newGrid]);
    }
  }, index * 50);
});

  setGrid(newGrid);
};
  return (
    <div>

        <button onClick={runBFS}>Find Path</button>
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((cell, j) => {
            let color = "white";
            if (cell === "wall") color = "black";
            if (cell === "start") color = "green";
            if (cell === "end") color = "red";
            if (cell === "path") color = "yellow";
             //if (cell === "visited") color = "blue";

            return (
              <div
                key={j}
                className="cell"
                onClick={() => handleClick(i, j)}
                onDoubleClick={() => setStart(i, j)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setEnd(i, j);
                }}
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Grid;