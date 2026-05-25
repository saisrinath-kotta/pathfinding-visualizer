function Sidebar({

  mode,
  setMode

}) {

  return (

    <div className="sidebar">

      <h2>Controls</h2>

      {/* MODE SELECTOR */}

      <div className="section">

        <p>Select Mode</p>

        <button
          onClick={() =>
            setMode("grid")
          }
        >
          Grid Visualizer
        </button>

        <button
          onClick={() =>
            setMode("graph")
          }
        >
          Graph Visualizer
        </button>

      </div>

      {/* LEGEND */}

      <div className="section">

        <h3>Legend</h3>

        <p>🟩 Start Node</p>

        <p>🟥 End Node</p>

        <p>⬛ Wall</p>

        <p>🟦 Visited</p>

        <p>🟨 Shortest Path</p>

      </div>

      {/* INSTRUCTIONS */}

      <div className="section">

        <h3>Instructions</h3>

        <p>
          Single Click → Wall
        </p>

        <p>
          Double Click → Start
        </p>

        <p>
          Right Click → End
        </p>

      </div>

    </div>
  );
}

export default Sidebar;