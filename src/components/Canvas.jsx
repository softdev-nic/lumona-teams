 import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
 
import DragToolBar from "./DragToolBar";
import { useStore } from "../useStore";
import MembersNode from "./Nodes/MembersNode";
import TaskNode from "./Nodes/TaskNode";
import React from "react";
import {getMembers} from "../services/getData"

const nodeTypes = {
  MembersNode: MembersNode,
  TaskNode: TaskNode
};

function Canvas() {
  

  const nodes = useStore(
    (state) => state.nodes
  );

  const edges = useStore(
    (state) => state.edges
  );

  const addEdgeToStore = useStore(
  (state) => state.addEdge
);
const onConnect = (connection) => {

  console.log(connection);

  addEdgeToStore(connection);

};
  const setNodes = useStore(
    (state) => state.setNodes
  );

  const setEdges = useStore(
    (state) => state.setEdges
  );

  const addNode = useStore(
    (state) => state.addNode
  );

  const onNodesChange = (changes) => {
    setNodes(
      applyNodeChanges(
        changes,
        nodes
      )
    );
  };

  const onEdgesChange = (changes) => {
    setEdges(
      applyEdgeChanges(
        changes,
        edges
      )
    );
  };

 const onDrop = (event) => {

  console.log("DROP FIRED");

  event.preventDefault();

  const type =
    event.dataTransfer.getData(
      "application/reactflow"
    );

  console.log("TYPE:", type);

  if (!type) return;

  addNode({
    type,
    data: {}
  });
};

  const onDragOver = (event) => {

    event.preventDefault();

    event.dataTransfer.dropEffect =
      "move";
  };

  React.useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="flex h-screen">

      <div className="w-56 border-r p-4">
        <DragToolBar />
      </div>

      <div className="flex-1">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>

      </div>

    </div>
  );
}

export default Canvas;