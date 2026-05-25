function Sidebar({

  selectedPage,
  setSelectedPage

}) {

  return (

    <div className="sidebar">

      {/* VISUALIZERS */}

      <div className="card">

        <h2>
          Visualizers
        </h2>

        <button
          onClick={() =>
            setSelectedPage("grid")
          }
        >
          Grid Visualizer
        </button>

        <button
          onClick={() =>
            setSelectedPage("graph")
          }
          className="secondary-btn"
        >
          Graph Visualizer
        </button>

      </div>

      {/* ALGORITHMS */}

      <div className="card">

        <h2>
          Algorithms
        </h2>

        <button
          onClick={() =>
            setSelectedPage("bfs")
          }
        >
          BFS Theory
        </button>

        <button
          onClick={() =>
            setSelectedPage("dfs")
          }
          className="secondary-btn"
        >
          DFS Theory
        </button>

      </div>

      {/* ABOUT */}

      <div className="card">

        <h2>
          About Project
        </h2>

        <p>
          Interactive Pathfinding
          Visualizer for Grid and
          Graph Structures.
        </p>

      </div>

    </div>
  );
}

export default Sidebar;