import { ipcRenderer } from "electron";
import "./App.scss";
import ReactFlow, { addEdge, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import { SendMessageNode } from "./assets/SendMessageNode";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "sendMessage",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
const nodeTypes = {
  sendMessage: SendMessageNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "rgb(240,240,240)",
        }}
      >
        <input
          className="input input-bordered w-full max-w-xs"
          value={"test"}
        />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        />
      </div>
    </div>
  );
}

export default App;
