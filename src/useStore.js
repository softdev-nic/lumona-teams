import {create} from 'zustand';


export const useStore = create((set,get) => ({
  Members:[],
  setMembers: (members) => set({Members: members}),
    nodes: [],
    setNodes: (nodes) => set({nodes}),
    edges: [],
     addEdge: (connection) => {

  set({
    edges: [
      ...get().edges,
      {
        ...connection,
        id: crypto.randomUUID(),
      },
    ],
  });

},

    addNode:({type,data={}}) => {
        let newNode;
          

  if(type === "Member") {

    newNode = {
      id: crypto.randomUUID(),
      type: "MembersNode",
      position: {
        x: 100,
        y: 100
      },
      data
    };

  }

  if(type === "Task") {

    newNode = {
      id: crypto.randomUUID(),
      type: "TaskNode",
      position: {
        x: 100,
        y: 100
      },
      data
    };


  }
console.log("Adding node type:", type);
console.log("Current nodes:", get().nodes);
console.log("New node:", newNode);
 
             
        set({nodes: [...get().nodes, newNode]});
    },
    deleteNode: (nodeId) => {
        set({
            nodes: get().nodes.filter(node => node.id !== nodeId),
            edges: get().edges.filter(edge => edge.source !== nodeId && edge.target !== nodeId)
        });
    },
}))
 
 