function DFSInfo() {

  return (

    <div className="info-page">

      <h1>
        Depth First Search (DFS)
      </h1>

      <p>
        Depth First Search explores
        deeply before backtracking.
      </p>

      <h2>Properties</h2>

      <ul>

        <li>
          Uses Stack / Recursion
        </li>

        <li>
          Traverses depth-wise
        </li>

        <li>
          Does not guarantee
          shortest path
        </li>

      </ul>

      <h2>Time Complexity</h2>

      <p>
        O(V + E)
      </p>

      <h2>Applications</h2>

      <ul>

        <li>Maze Solving</li>

        <li>Cycle Detection</li>

        <li>Topological Sorting</li>

      </ul>

    </div>
  );
}

export default DFSInfo;