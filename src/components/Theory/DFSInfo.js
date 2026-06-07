function DFSInfo() {

  return (

    <div className="info-page">

      <h1>
        Depth First Search (DFS)
      </h1>

      <p>
        Depth First Search is a graph traversal algorithm that explores one path
        as far as possible before backtracking to try alternative branches.
        It is often implemented with recursion or an explicit stack.
      </p>

      <h2>Core Concept</h2>

      <p>
        DFS dives deep into the graph, following a chain of connected nodes
        until it cannot continue, then backtracks and explores the next branch.
        This makes it ideal for analyzing structure and uncovering hidden paths.
      </p>

      <h2>Key Properties</h2>

      <ul>

        <li>
          Uses a stack-based approach, either implicitly via recursion or explicitly.
        </li>

        <li>
          Prioritizes depth, exploring one branch fully before moving to another.
        </li>

        <li>
          Does not guarantee the shortest path in graphs with multiple branches.
        </li>

        <li>
          Can detect cycles, compute connectivity, and generate topological order.
        </li>

      </ul>

      <h2>Time and Space Complexity</h2>

      <ul>
        <li>Time: O(V + E)</li>
        <li>Space: O(V) worst-case for recursion or stack depth.</li>
      </ul>

      <h2>Applications</h2>

      <ul>

        <li>
          Maze and labyrinth exploration where one path is pursued until it ends.
        </li>

        <li>
          Backtracking algorithms such as puzzle solving and constraint satisfaction.
        </li>

        <li>
          Cycle detection and strongly connected component analysis.
        </li>

      </ul>

      <h2>Real-Life Examples</h2>

      <ul>

        <li>
          Crawling a file system by descending into folders and then backing up.
        </li>

        <li>
          Searching decision trees in games or optimization problems.
        </li>

        <li>
          Exploring deep nested structures like website navigation or JSON data.
        </li>

      </ul>

      <h2>Visual Intuition</h2>

      <p>
        Imagine a depth-first traversal like climbing a tree branch: you go as
        far as you can, then return to the nearest branch point and continue.
        This creates a path-like search pattern with clear backtracking steps.
      </p>

    </div>
  );
}

export default DFSInfo;