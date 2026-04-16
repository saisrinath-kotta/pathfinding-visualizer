import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pathfinding Visualizer</h1>
      <p>Click cells to create walls. We will find path using BFS.</p>
      <Grid />
    </div>
  );
}

export default App;