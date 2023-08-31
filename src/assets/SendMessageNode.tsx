import { memo } from "react";
import { Handle, Position } from "reactflow";

export const SendMessageNode = memo(() => {
  return (
    <div className="bg-white rounded p-2">
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("Connected")}
      />
      <div className="">
        <h2 className="text-xs">Send Message</h2>
        <input className="input input-bordered w-full max-w-xs" />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        onConnect={(params) => console.log("Connected")}
      />
    </div>
  );
});
