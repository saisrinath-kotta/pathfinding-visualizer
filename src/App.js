import { useState } from "react";

import "./App.css";
import "./layout.css";

// ---------------- COMPONENTS ----------------

import Navbar from "./components/Navbar/Navbar";

import Sidebar from "./components/Sidebar/Sidebar";

import Grid from "./components/Grid";

import GraphInput from "./components/Graph/GraphInput";

import GraphVisualizer from "./components/Graph/GraphVisualizer";

import BFSInfo from "./components/Theory/BFSInfo";

import DFSInfo from "./components/Theory/DFSInfo";

// ---------------- ALGORITHMS ----------------

import { bfsGraph }
from "./algorithms/bfsGraph";

import { dfsGraph }
from "./algorithms/dfsGraph";

// ---------------- HELPERS ----------------

import {
  generateGraph,
  buildAdjacencyList
}
from "./utils/graphHelpers";

import { parseGraphInput }
from "./utils/parseGraphInput";

function App() {

  // ---------------- PAGE STATE ----------------

  const [
    selectedPage,
    setSelectedPage
  ] = useState("grid");

  // ---------------- GRAPH STATE ----------------

  const [nodes, setNodes] =
    useState([]);
  const [graphPath, setGraphPath]
  = useState([]);
  const [edges, setEdges] =
    useState([]);
    const [graphExecutionTime,
  setGraphExecutionTime]
  = useState(null);

const [graphAnimationTime,
  setGraphAnimationTime]
  = useState(null);
  

  // ---------------- GENERATE GRAPH ----------------

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

  // ---------------- RUN BFS ----------------

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
  setGraphPath([]);

  // START TIMER

  const startTime =
    performance.now();

  const result =
    bfsGraph(
      graph,
      startNode,
      endNode
    );

  // END TIMER

  const endTime =
    performance.now();

  setGraphExecutionTime(
    (endTime - startTime)
      .toFixed(4)
  );

  animateGraph(
    result,
    startNode,
    endNode
  );
}

  // ---------------- RUN DFS ----------------

  function handleRunGraphDFS(
    input,
    startNode,
    endNode
  ) {

    const parsedEdges =
      parseGraphInput(input);

    const graph =
      buildAdjacencyList(parsedEdges);

    resetGraphStyles();
    setGraphPath([]);

    const result =
      dfsGraph(
        graph,
        startNode,
        endNode
      );
    

    animateGraph(
      result,
      startNode,
      endNode
    );
  }

  // ---------------- GRAPH ANIMATION ----------------

  function animateGraph(
    result,
    startNode,
    endNode
  ) {
    setGraphPath(
  result.shortestPath
);
const totalAnimationTime =
  result.visitedOrder.length * 500;

setGraphAnimationTime(
  (totalAnimationTime / 1000)
    .toFixed(2)
);

    updateNodeType(
      startNode,
      "start"
    );

    updateNodeType(
      endNode,
      "end"
    );

    // VISITED ANIMATION

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

    // PATH ANIMATION

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

  // ---------------- UPDATE NODE TYPE ----------------

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

  // ---------------- RESET GRAPH ----------------

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

  // ---------------- UI ----------------

  return (

    <div className="app">

      {/* NAVBAR */}

      <Navbar />

      {/* MAIN LAYOUT */}

      <div className="main-layout">

        {/* SIDEBAR */}

        <Sidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* CONTENT AREA */}

        <div className="visualizer-area">

          {/* GRID PAGE */}

          {selectedPage === "grid" && (

            <Grid />

          )}

          {/* GRAPH PAGE */}

          {selectedPage === "graph" && (

            <div className="graph-layout">

              {/* GRAPH CONTROLS */}

              <div className="graph-controls">

                <GraphInput
                  onGenerate={
                    handleGenerateGraph
                  }

                  onRunBFS={
                    handleRunGraphBFS
                  }

                  onRunDFS={
                    handleRunGraphDFS
                  }
                />

              </div>

              {/* GRAPH VISUALIZER */}

              <div className="graph-visualizer">

                <GraphVisualizer
                  nodes={nodes}
                  edges={edges}
                />
                <div className="runtime-box">

  <h3>
    Graph Performance
  </h3>

  <p>
    Algorithm Time:
    {graphExecutionTime || 0} ms
  </p>

  <p>
    Animation Time:
    {graphAnimationTime || 0} s
  </p>

</div>

                {/* PATH OUTPUT */}

                {graphPath.length > 0 && (

                  <div className="path-output">

                    <h3>
                      Shortest Path
                    </h3>

                    <p>
                      {graphPath.join(" → ")}
                    </p>

                  </div>
                )}

              </div>

            </div>
          )}

          {/* BFS PAGE */}

          {selectedPage === "bfs" && (

            <BFSInfo />

          )}

          {/* DFS PAGE */}

          {selectedPage === "dfs" && (

            <DFSInfo />

          )}

        </div>

      </div>

    </div>
  );
}

export default App;