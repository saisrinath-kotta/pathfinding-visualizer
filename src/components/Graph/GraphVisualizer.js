import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

function GraphVisualizer({
  nodes,
  edges,
}) {

  const styledNodes = nodes.map((node) => {

    let backgroundColor = "white";

    if (node.data.type === "visited") {
      backgroundColor = "skyblue";
    }

    if (node.data.type === "path") {
      backgroundColor = "yellow";
    }

    if (node.data.type === "start") {
      backgroundColor = "green";
    }

    if (node.data.type === "end") {
      backgroundColor = "red";
    }

    return {

      ...node,

      style: {

        width: 50,
        height: 50,

        borderRadius: "50%",

        border: "2px solid black",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background: backgroundColor,

        fontWeight: "bold",

        transition: "0.3s",
      },
    };
  });

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >

      <ReactFlow
        nodes={styledNodes}
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