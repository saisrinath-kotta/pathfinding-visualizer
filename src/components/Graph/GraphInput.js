import { useState } from "react";

function GraphInput({

  onGenerate,
  onRunBFS,
  onRunDFS,

}) {

  // ---------------- STATES ----------------

  const [input, setInput] =
    useState("");

  const [startNode, setStartNode] =
    useState("");

  const [endNode, setEndNode] =
    useState("");

  // ---------------- HANDLERS ----------------

  function handleGenerate() {

    onGenerate(input);
  }

  function handleRunBFS() {

    onRunBFS(
      input,
      startNode,
      endNode
    );
  }

  function handleRunDFS() {

    onRunDFS(
      input,
      startNode,
      endNode
    );
  }

  // ---------------- UI ----------------

  return (

    <div className="graph-input-page">

      {/* INPUT SECTION */}

      <div className="graph-input-card">

        <h2>
          Graph Input
        </h2>

        <textarea
          rows="8"
          cols="30"

          placeholder={`1 2
1 3
2 4
4 5`}

          value={input}

          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"

          placeholder="Start Node"

          value={startNode}

          onChange={(e) =>
            setStartNode(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          type="text"

          placeholder="End Node"

          value={endNode}

          onChange={(e) =>
            setEndNode(
              e.target.value
            )
          }
        />

        <br /><br />

        {/* BUTTONS */}

        <div className="graph-buttons">

          <button
            onClick={handleGenerate}
          >
            Generate Graph
          </button>

          <button
            onClick={handleRunBFS}
          >
            Run BFS
          </button>

          <button
            onClick={handleRunDFS}
          >
            Run DFS
          </button>

        </div>

      </div>

      {/* INFO SECTION */}

      <div className="graph-info-card">

        <h2>
          Graph Visualizer
        </h2>

        {/* INSTRUCTIONS */}

        <div className="instructions">

          <h3>
            Instructions
          </h3>

          <p>
            Enter graph edges
            line-by-line.
          </p>

          <p>
            Example:
          </p>

          <p>1 2</p>

          <p>2 3</p>

          <p>3 4</p>

        </div>

        {/* LEGEND */}

        <div className="legend-box">

          <h3>
            Legend
          </h3>

          <p>🟩 Start Node</p>

          <p>🟥 End Node</p>

          <p>🟦 Visited Node</p>

          <p>🟨 Shortest Path</p>

        </div>

      </div>

    </div>
  );
}

export default GraphInput;