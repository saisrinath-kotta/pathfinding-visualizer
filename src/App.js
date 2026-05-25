import { useState } from "react";

import "./App.css";

import { bfs } from "./algorithms/bfs";
import { bfsGraph } from "./algorithms/bfsGraph";

import Grid from "./components/Grid";

import GraphVisualizer from "./components/Graph/GraphVisualizer";

import GraphInput from "./components/Graph/GraphInput";

import { parseGraphInput } from "./utils/parseGraphInput";

import {
  generateGraph,
  buildAdjacencyList
}
from "./utils/graphHelpers";

function App() {

  // ---------------- GRID STATES ----------------

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

  // ---------------- GRAPH STATES ----------------

  const [nodes, setNodes] = useState([]);

  const [edges, setEdges] = useState([]);

  function handleGenerateGraph(input) {

  const parsedEdges =
    parseGraphInput(input);

  const {
    nodes,
    edges
  } = generateGraph(parsedEdges);

  setNodes(nodes);

  setEdges(edges);
}

function handleRunGraphBFS(
  input,
  startNode,
  endNode
) {

  const parsedEdges =
    parseGraphInput(input);

  const graph =
    buildAdjacencyList(parsedEdges);
  resetGraphStyles();
  const result =
    bfsGraph(
      graph,
      startNode,
      endNode
    );

  console.log(result);
  updateNodeType(
  startNode,
  "start"
);

updateNodeType(
  endNode,
  "end"
);

result.visitedOrder.forEach(
  (nodeId, index) => {

    setTimeout(() => {

      if (
        nodeId !== startNode &&
        nodeId !== endNode
      ) {

        updateNodeType(
          nodeId,
          "visited"
        );
      }

    }, index * 500);
  }
);

setTimeout(() => {

  result.shortestPath.forEach(
    (nodeId, index) => {

      setTimeout(() => {

        if (
          nodeId !== startNode &&
          nodeId !== endNode
        ) {

          updateNodeType(
            nodeId,
            "path"
          );
        }

      }, index * 500);

    }
  );

}, result.visitedOrder.length * 500);
}

function updateNodeType(
  nodeId,
  type
) {

  setNodes((prevNodes) =>

    prevNodes.map((node) =>

      node.id === nodeId

        ? {
            ...node,

            data: {
              ...node.data,
              type,
            },
          }

        : node
    )
  );
}

function resetGraphStyles() {

  setNodes((prevNodes) =>

    prevNodes.map((node) => ({

      ...node,

      data: {

        ...node.data,

        type: "normal",
      },
    }))
  );
}
  return (
    <div style={{ textAlign: "center" }}>

      <h1>Pathfinding Visualizer</h1>

      {/* ---------------- GRID VISUALIZER ---------------- */}

      <p>
        Click cells to create walls.
      </p>

      <button onClick={runBFS}>
        Find Path
      </button>

      <Grid
        grid={grid}
        path={path}
      />

      {/* ---------------- GRAPH VISUALIZER ---------------- */}

      <GraphInput
  onGenerate={handleGenerateGraph}
  onRunBFS={handleRunGraphBFS}
/>

      <GraphVisualizer
        nodes={nodes}
        edges={edges}
      />

    </div>
  );
}

export default App;