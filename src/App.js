import { useState } from "react";
import "./App.css";
import { bfs } from "./algorithms/bfs";
import Grid from "./components/Grid";

function App() {
  const [path, setPath] = useState([]);

  const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  const start = { row: 0, col: 0 };
  const end = { row: 2, col: 2 };

  function runBFS() {
    const result = bfs(grid, start, end);
    setPath(result);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pathfinding Visualizer</h1>
      <p>Click cells to create walls. We will find path using BFS.</p>

      <button onClick={runBFS}>Find Path</button>

      <Grid grid={grid} path={path} />
    </div>
  );
}

export default App;