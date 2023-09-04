import { ipcRenderer } from "electron";
import "./App.scss";
import ReactFlow, {
  MarkerType,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
  NodeTypes,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import { SendMessageNode } from "./SendMessageNode";
import { SelectNode } from "./SelectNode";

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "4" },
    type: "sendMessage",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      selects: {
        "handle-0": "smoothstep",
      },
    },
  },
  {
    id: "5",
    position: { x: 0, y: 100 },
    data: { label: "5" },
  },
];
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
const nodeTypes: NodeTypes = {
  sendMessage: SendMessageNode,
  custom: SelectNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="prose">
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
          //onInit
          //fitView
        />
        s
      </div>
    </div>
  );
}

export default App;
