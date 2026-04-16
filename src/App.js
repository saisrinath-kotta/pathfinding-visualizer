import './App.css';
import { bfs } from "./algorithms/bfs";

function App() {
  console.log("App running");

  bfs(
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    { row: 0, col: 0 },
    { row: 2, col: 2 }
  );

  return (
    <div>
      <h1>Pathfinding Visualizer</h1>
    </div>
  );
}

export default App;