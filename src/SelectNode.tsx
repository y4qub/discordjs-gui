import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";
import { Node, NodeProps } from "reactflow";

type SelectNodeData = {
  value: string;
  handleId: string;
  nodeId: any;
};

type SelectNode = Node<SelectNodeData>;

const options = [
  {
    value: "smoothstep",
    label: "Smoothstep",
  },
  {
    value: "step",
    label: "Step",
  },
  {
    value: "default",
    label: "Bezier (default)",
  },
  {
    value: "straight",
    label: "Straight",
  },
];

export function SelectNode({ data, isConnectable }: NodeProps<SelectNodeData>) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (e: any) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === data.nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [data.handleId]: e.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="">
      <div>Edge Type</div>
      <select className="select nodrag" onChange={onChange} value={data.value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle type="source" position={Position.Right} id={data.handleId} />
    </div>
  );
}
