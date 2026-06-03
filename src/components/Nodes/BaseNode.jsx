 import { Handle } from "@xyflow/react";
import { useStore } from "../../useStore";

function BaseNode({
  id,
  data,
  title,
  children,
  handles = [],
  color = "bg-blue-500",
}) {

  const deleteNode = useStore(
    (state) => state.deleteNode
  );

  return (
    <div className="relative bg-white text-black border border-gray-300 shadow-md rounded-lg flex flex-col min-w-[220px] overflow-hidden">

      {/* Delete Button */}
      <div className="absolute top-1 right-1 z-10">
        <button
          onClick={() => deleteNode(id)}
          className="text-xs bg-red-500 text-white px-2 py-1 rounded"
        >
          X
        </button>
      </div>

      {/* Header */}
      <div
        className={`w-full ${color} text-white py-2 px-3 font-semibold text-sm`}
      >
        {title || data?.label}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-3">

        {children}

        {!children && (
          <div className="text-xs text-gray-500">
            {data?.description}
          </div>
        )}

      </div>

      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: 12,
            height: 12,
            backgroundColor: "purple",
            border: "2px solid white",
          }}
        />
      ))}

    </div>
  );
}

export default BaseNode;