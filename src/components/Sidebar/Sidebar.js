function Sidebar({

  selectedPage,
  setSelectedPage

}) {

  return (

    <div className="sidebar">

      {/* LOGO / TITLE */}

      <div className="sidebar-top">

        <h1>
          Pathfinder
        </h1>

        <p>
          Learn algorithms visually
        </p>

      </div>

      {/* VISUALIZERS */}

      <div className="sidebar-section">

        <h2>
          Visualizers
        </h2>

        <button

          className={
            selectedPage === "grid"

              ? "sidebar-btn active-btn"

              : "sidebar-btn"
          }

          onClick={() =>
            setSelectedPage("grid")
          }
        >
          Grid Visualizer
        </button>

        <button

          className={
            selectedPage === "graph"

              ? "sidebar-btn active-btn"

              : "sidebar-btn"
          }

          onClick={() =>
            setSelectedPage("graph")
          }
        >
          Graph Visualizer
        </button>

      </div>

      {/* THEORY */}

      <div className="sidebar-section">

        <h2>
          Theory
        </h2>

        <button

          className={
            selectedPage === "bfs"

              ? "sidebar-btn active-btn"

              : "sidebar-btn"
          }

          onClick={() =>
            setSelectedPage("bfs")
          }
        >
          BFS Theory
        </button>

        <button

          className={
            selectedPage === "dfs"

              ? "sidebar-btn active-btn"

              : "sidebar-btn"
          }

          onClick={() =>
            setSelectedPage("dfs")
          }
        >
          DFS Theory
        </button>

      </div>

      {/* ABOUT */}

      <div className="sidebar-about">

        <h3>
          About Project
        </h3>

        <p>
          Interactive educational
          platform for visualizing
          pathfinding and graph
          traversal algorithms.
        </p>

      </div>

    </div>
  );
}

export default Sidebar;