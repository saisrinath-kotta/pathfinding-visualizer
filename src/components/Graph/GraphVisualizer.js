import React from "react";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

function GraphVisualizer({ nodes, edges }) {

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        border: "1px solid black",
      }}
    >

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >

        <Background />
        <Controls />

      </ReactFlow>

    </div>
  );
}

export default GraphVisualizer;