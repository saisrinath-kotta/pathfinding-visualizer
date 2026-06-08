import { useState } from "react";
import { bfsGrid } from "../algorithms/bfsGrid";
import { dfsGrid }
from "../algorithms/dfsGrid";
function Grid() {

  const rows = 20;
  const cols = 20;

  // ---------------- GRID STATE ----------------

  const [grid, setGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill("empty"))
  );

  const [isAnimating, setIsAnimating] =
    useState(false);
const [executionTime, setExecutionTime] =
  useState(null);
  const [animationTime,
  setAnimationTime]
  = useState(null);
  // ---------------- WALL HANDLING ----------------

  const handleClick = (i, j) => {

    if (isAnimating) return;

    const newGrid =
      grid.map((row) => [...row]);

    // DO NOT ALLOW WALLS ON START/END

    if (
      newGrid[i][j] === "start" ||
      newGrid[i][j] === "end"
    ) {
      return;
    }

    // TOGGLE WALL

    if (newGrid[i][j] === "empty") {
      newGrid[i][j] = "wall";
    }
    else if (newGrid[i][j] === "wall") {
      newGrid[i][j] = "empty";
    }

    setGrid(newGrid);
  };

  // ---------------- START NODE ----------------

  const setStart = (i, j) => {

    if (isAnimating) return;

    const newGrid = grid.map((row) =>
      row.map((cell) =>
        cell === "start"
          ? "empty"
          : cell
      )
    );

    newGrid[i][j] = "start";

    setGrid(newGrid);
  };

  // ---------------- END NODE ----------------

  const setEnd = (i, j) => {

    if (isAnimating) return;

    const newGrid = grid.map((row) =>
      row.map((cell) =>
        cell === "end"
          ? "empty"
          : cell
      )
    );

    newGrid[i][j] = "end";

    setGrid(newGrid);
  };

  // ---------------- RUN BFS ----------------

  const runBFS = () => {

    let start = null;
    let end = null;

    // FIND START + END

    for (let i = 0; i < rows; i++) {

      for (let j = 0; j < cols; j++) {

        if (grid[i][j] === "start") {
          start = [i, j];
        }

        if (grid[i][j] === "end") {
          end = [i, j];
        }
      }
    }

    // VALIDATION

    if (!start || !end) {

      alert("Set start and end first!");

      return;
    }

    // CLEAR OLD PATH

    clearPath();

    // LOCK INTERACTION

    setIsAnimating(true);
    setExecutionTime(null);
    setAnimationTime(null);

    // RUN BFS

    const startTime =
      performance.now();

    const result =
      bfsGrid(grid, start, end);

    const endTime =
      performance.now();

    const executionDuration = (
      endTime - startTime
    ).toFixed(4);

    // START ANIMATION

    animateVisited(
      result.visitedOrder,
      result.shortestPath,
      executionDuration
    );
  };
  const runDFS = () => {

    let start = null;
    let end = null;

    // FIND START + END

    for (let i = 0; i < rows; i++) {

      for (let j = 0; j < cols; j++) {

        if (grid[i][j] === "start") {
          start = [i, j];
        }

        if (grid[i][j] === "end") {
          end = [i, j];
        }
      }
    }

    // VALIDATION

    if (!start || !end) {

      alert("Set start and end first!");

      return;
    }

    // CLEAR OLD PATH

    clearPath();

    // LOCK INTERACTION

    setIsAnimating(true);
    setExecutionTime(null);
    setAnimationTime(null);

    // RUN BFS

    const startTime =
      performance.now();

   const result =
  dfsGrid(
    grid,
    start,
    end
  );

    const endTime =
      performance.now();

    const executionDuration = (
      endTime - startTime
    ).toFixed(4);

    // START ANIMATION

    animateVisited(
      result.visitedOrder,
      result.shortestPath,
      executionDuration
    );
  };

  

  // ---------------- VISUALIZATION ----------------

  const animateVisited = (
    visitedOrder,
    shortestPath,
    executionDuration
  ) => {

    const newGrid =
      grid.map((row) => [...row]);
      const totalAnimationTime =
(
  visitedOrder.length +
  shortestPath.length
) * 100;

    // VISITED ANIMATION

    visitedOrder.forEach(
      ([i, j], index) => {

        setTimeout(() => {

          if (
            newGrid[i][j] !== "start" &&
            newGrid[i][j] !== "end"
          ) {

            newGrid[i][j] = "visited";

            setGrid(
              newGrid.map((row) => [...row])
            );
          }

        }, index * 100);
      }
    );

    // PATH ANIMATION

    setTimeout(() => {

      shortestPath.forEach(
        ([i, j], index) => {

          setTimeout(() => {

            if (
              newGrid[i][j] !== "start" &&
              newGrid[i][j] !== "end"
            ) {

              newGrid[i][j] = "path";

              setGrid(
                newGrid.map((row) => [...row])
              );
            }

          }, index * 100);
        }
      );

    }, visitedOrder.length * 100);

    // UNLOCK AFTER ANIMATION

    setTimeout(() => {
      setExecutionTime(executionDuration);
      setAnimationTime(
        (totalAnimationTime / 1000)
          .toFixed(2)
      );
      setIsAnimating(false);
    }, (
      visitedOrder.length +
      shortestPath.length
    ) * 100);
  };

  // ---------------- CLEAR PATH ----------------

  const clearPath = () => {

    const newGrid = grid.map((row) =>

      row.map((cell) => {

        if (
          cell === "visited" ||
          cell === "path"
        ) {
          return "empty";
        }

        return cell;
      })
    );

    setGrid(newGrid);
  };

  // ---------------- RESET GRID ----------------

  const resetGrid = () => {

    const emptyGrid = Array(rows)
      .fill()
      .map(() =>
        Array(cols).fill("empty")
      );

    setGrid(emptyGrid);
  };

  // ---------------- UI ----------------

  return (

  <div className="grid-layout">

    {/* LEFT PANEL */}

    <div className="grid-sidebar">

      <div className="grid-info-card">

        <h2>
          Grid Visualizer
        </h2>

        <div className="instructions">

          <h3>
            Instructions
          </h3>

          <p>
            Single Click → Add Wall
          </p>

          <p>
            Double Click → Set Start
          </p>

          <p>
            Right Click → Set End
          </p>

        </div>

        <div className="legend">

          <h3>
            Legend
          </h3>

          <p>🟩 Start Node</p>

          <p>🟥 End Node</p>

          <p>⬛ Wall</p>

          <p>🟦 Visited Node</p>

          <p>🟨 Shortest Path</p>

        </div>

      </div>

    </div>

    {/* RIGHT PANEL */}

    <div className="grid-main">

      {/* BUTTONS */}

      <div className="grid-buttons">

        <button
  onClick={runBFS}
  disabled={isAnimating}
>
  Run BFS
</button>

<button
  onClick={runDFS}
  disabled={isAnimating}
>
  Run DFS
</button>

        <button
          onClick={clearPath}
          disabled={isAnimating}
        >
          Clear Path
        </button>

        <button
          onClick={resetGrid}
          disabled={isAnimating}
        >
          Reset Grid
        </button>

      </div>

      {/* GRID */}

      <div className="grid-container">

        {grid.map((row, i) => (

          <div
            className="row"
            key={i}
          >

            {row.map((cell, j) => {

              let color = "white";

              if (cell === "wall") {
                color = "black";
              }

              if (cell === "start") {
                color = "green";
              }

              if (cell === "end") {
                color = "red";
              }

              if (cell === "visited") {
                color = "blue";
              }

              if (cell === "path") {
                color = "yellow";
              }

              return (

                <div
                  key={j}
                  className="cell"

                  onClick={() =>
                    handleClick(i, j)
                  }

                  onDoubleClick={() =>
                    setStart(i, j)
                  }

                  onContextMenu={(e) => {

                    e.preventDefault();

                    setEnd(i, j);
                  }}

                  style={{
                    backgroundColor: color,
                  }}
                ></div>

              );
            })}

          </div>

        ))}

      </div>

      {/* EXECUTION TIME */}

      <div className="runtime-box">

  <h3>
    Performance Metrics
  </h3>

  <p>
    Algorithm Time:
    {executionTime || 0} ms
  </p>

  <p>
    Animation Time:
    {animationTime || 0} s
  </p>

</div>

    </div>

  </div>

);}
export default Grid;
