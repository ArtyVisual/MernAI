import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";

import "./App.css";
import InputNode from "./node/InputNode";
import ResultNode from "./node/ResultNode";
import { askAI, savePrompt } from "./api";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode
};

const edges = [{ id: "e1-2", source: "1", target: "2" }];

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 10, y: 200 },
      data: { prompt, setPrompt }
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 400, y: 200 },
      data: { response }
    }
  ];

  const runFlow = async () => {
    const res = await askAI(prompt);
    setResponse(res.data.answer);
  };

  const saveData = async () => {
    await savePrompt(prompt, response);
    alert("Saved to DB");
  };

  return (
    <div className="app">
      <div className="header">AI Flow Dashboard</div>

      <div className="toolbar">
        <button onClick={runFlow} disabled={loading}>
          {loading ? "Running..." : "Run Flow"}
        </button>
        <button className="secondary" onClick={saveData}>
          Save
        </button>
      </div>

      <div className="flow-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
