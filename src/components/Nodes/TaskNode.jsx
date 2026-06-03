 import BaseNode from "./BaseNode";
import { Position } from "@xyflow/react";

export default function TaskNode({
  id,
  data,
}) {
  return (
    <BaseNode
      id={id}
      data={data}
      title={data?.taskName || "New Task"}
      color="bg-blue-500"
      handles={[
        {
          id: "task-source",
          type: "source",
          position: Position.Right,
        },
      ]}
    >
      <div className="flex flex-col gap-2">

        <input
          type="text"
          placeholder="Task Name"
          defaultValue={data?.taskName}
          className="border p-1 rounded text-sm"
        />

        <input
          type="number"
          placeholder="Duration (hrs)"
          defaultValue={data?.duration}
          className="border p-1 rounded text-sm"
        />

      </div>
    </BaseNode>
  );
}