function BFSInfo() {

  return (

    <div className="info-page">

      <h1>
        Breadth First Search (BFS)
      </h1>

      <p>
        Breadth First Search is a graph traversal strategy that explores all
        nodes at the current depth level before moving deeper. It uses a FIFO
        queue to process nodes in the order they are discovered.
      </p>

      <h2>Core Concept</h2>

      <p>
        BFS visits neighbors layer-by-layer from the starting point. Imagine
        dropping a stone into a pond: the ripples expand outward equally in
        every direction, and BFS follows a similar wave of visited nodes.
      </p>

      <h2>Key Properties</h2>

      <ul>

        <li>
          Uses a queue to store frontier nodes in first-in, first-out order.
        </li>

        <li>
          Finds the shortest path in terms of edge count for unweighted graphs.
        </li>

        <li>
          Requires marking visited nodes to prevent revisiting the same vertex.
        </li>

        <li>
          Space usage can grow with the breadth of the graph frontier.
        </li>

      </ul>

      <h2>Time and Space Complexity</h2>

      <ul>
        <li>Time: O(V + E), where V is vertices and E is edges.</li>
        <li>Space: O(V) due to the visited set and frontier queue.</li>
      </ul>

      <h2>Applications</h2>

      <ul>

        <li>
          Shortest path search in mazes, grids, and unweighted networks.
        </li>

        <li>
          Finding the minimum number of moves or steps between two positions.
        </li>

        <li>
          Level-order traversal used in hierarchical graph processing.
        </li>

        <li>
          Multi-source search for spreading information or wavefront simulation.
        </li>

      </ul>

      <h2>Real-Life Examples</h2>

      <ul>

        <li>
          Road navigation when all road segments are considered equal.
        </li>

        <li>
          Social network friend-of-friend search to discover nearest connections.
        </li>

        <li>
          Broadcast message propagation in a network starting from one source.
        </li>

      </ul>

      <h2>Visual Intuition</h2>

      <p>
        Picture a breadth-first search as concentric rings expanding from the
        start node. Every node at distance d is visited before any node at
        distance d + 1, which makes the traversal easy to visualize and reason about.
      </p>

    </div>
  );
}

export default BFSInfo;