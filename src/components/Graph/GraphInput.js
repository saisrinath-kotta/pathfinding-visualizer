import { useState } from "react";

function GraphInput({
  onGenerate,
  onRunBFS,
  onRunDFS,
}) {

  const [input, setInput] = useState("");

  const [startNode, setStartNode] =
    useState("");

  const [endNode, setEndNode] =
    useState("");

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

  return (
    <div style={{ marginTop: "40px" }}>

      <h2>Graph Input</h2>

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
          setStartNode(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="End Node"
        value={endNode}
        onChange={(e) =>
          setEndNode(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleGenerate}>
        Generate Graph
      </button>

      <button
        onClick={handleRunBFS}
        style={{ marginLeft: "10px" }}
      >
        Run BFS
      </button>

      <button
        onClick={handleRunDFS}
        style={{ marginLeft: "10px" }}
      >
        Run DFS
      </button>

    </div>
  );
}

export default GraphInput;