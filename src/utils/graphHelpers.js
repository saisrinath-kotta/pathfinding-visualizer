import dagre from "dagre";

const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 50;
const nodeHeight = 50;

export function generateGraph(parsedEdges) {

  const nodeSet = new Set();

  parsedEdges.forEach((edge) => {
    nodeSet.add(edge.source);
    nodeSet.add(edge.target);
  });

  // CREATE DAGRE GRAPH

  dagreGraph.setGraph({
    rankdir: "TB",
  });

  // ADD NODES

  Array.from(nodeSet).forEach((nodeId) => {

    dagreGraph.setNode(nodeId, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  // ADD EDGES

  parsedEdges.forEach((edge) => {

    dagreGraph.setEdge(
      edge.source,
      edge.target
    );
  });

  // CALCULATE LAYOUT

  dagre.layout(dagreGraph);

  // GENERATE REACT FLOW NODES

  const nodes = Array.from(nodeSet).map((nodeId) => {

    const nodePosition =
      dagreGraph.node(nodeId);

    return {

      id: nodeId,

      position: {
        x: nodePosition.x,
        y: nodePosition.y,
      },

      data: {
        label: nodeId,
        type: "normal",
      },

      style: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        fontWeight: "bold",
      },
    };
  });

  // GENERATE REACT FLOW EDGES

  const edges = parsedEdges.map(
    (edge, index) => ({

      id: `e${index}`,

      source: edge.source,

      target: edge.target,

      animated: false,
    })
  );

  return {
    nodes,
    edges,
  };
}

export function buildAdjacencyList(parsedEdges) {

  const graph = {};

  parsedEdges.forEach((edge) => {

    const { source, target } = edge;

    if (!graph[source]) {
      graph[source] = [];
    }

    graph[source].push(target);

    // UNDIRECTED GRAPH

    if (!graph[target]) {
      graph[target] = [];
    }

    graph[target].push(source);
  });

  return graph;
}