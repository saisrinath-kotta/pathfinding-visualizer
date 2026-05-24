import React, { useState } from "react";

function GraphInput({ onGenerate }) {

  const [input, setInput] = useState("");

  const handleGenerate = () => {
    onGenerate(input);
  };

  return (
    <div>

      <h2>Graph Input</h2>

      <textarea
        rows="10"
        cols="30"
        placeholder="Enter edges like:
1 2
1 3
2 4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <button onClick={handleGenerate}>
        Generate Graph
      </button>

    </div>
  );
}

export default GraphInput;