import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

function GraphVisualizer({
  nodes,
  edges,
}) {

  // ---------------- NODE STYLING ----------------

  const styledNodes = nodes.map((node) => {

    let backgroundColor = "white";

    // VISITED NODE

    if (node.data.type === "visited") {

      backgroundColor = "#60a5fa";
    }

    // PATH NODE

    if (node.data.type === "path") {

      backgroundColor = "#f59e0b";
    }

    // START NODE

    if (node.data.type === "start") {

      backgroundColor = "#22c55e";
    }

    // END NODE

    if (node.data.type === "end") {

      backgroundColor = "#ef4444";
    }

    return {

      ...node,

      style: {

        width: 55,

        height: 55,

        borderRadius: "50%",

        border: "2px solid #334155",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background: backgroundColor,

        fontWeight: "bold",

        fontSize: "16px",

        color: "#0f172a",

        boxShadow:
          "0 4px 10px rgba(0,0,0,0.12)",

        transition: "0.3s",
      },
    };
  });

  // ---------------- EDGE STYLING ----------------

  const styledEdges = edges.map((edge) => ({

    ...edge,

    style: {

      stroke: "#334155",

      strokeWidth: 2.5,
    },
  }));

  // ---------------- UI ----------------

  return (

    <div
      style={{

        width: "100%",

        height: "500px",

        background: "#f8fafc",

        borderRadius: "18px",

        border: "1px solid #cbd5e1",

        marginTop: "20px",

        overflow: "hidden",
      }}
    >

      <ReactFlow
        nodes={styledNodes}
        edges={styledEdges}
        fitView
      >

        <Background />

        <Controls />

      </ReactFlow>

    </div>
  );
}

export default GraphVisualizer;