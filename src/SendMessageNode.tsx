import { memo } from "react";
import { Handle, Position } from "reactflow";

export const SendMessageNode = memo(() => {
  return (
    <div className="p-2">
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("Connected")}
      />
      <div className="">
        <h2 className="">Send Message</h2>
        <input className="input input-bordered w-full max-w-xs nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        onConnect={(params) => console.log("Connected")}
      />
    </div>
  );
});
