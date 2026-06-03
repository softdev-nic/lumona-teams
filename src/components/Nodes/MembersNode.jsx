import BaseNode from "./BaseNode";
import { Position } from "@xyflow/react";

function MembersNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title={data?.name || "Member"}
      color="bg-green-500"
      handles={[
        {
          id: "member-target",
          type: "target",
          position: Position.Left,
        },
        {
          id: "member-source",
          type: "source",
          position: Position.Right,
        },
      ]}
    >
      <div className="text-sm">
        <p><strong>Name:</strong> {data?.name}</p>

        {data?.role && (
          <p><strong>Role:</strong> {data.role}</p>
        )}

        {data?.email && (
          <p><strong>Email:</strong> {data.email}</p>
        )}
      </div>
    </BaseNode>
  );
}

export default MembersNode;