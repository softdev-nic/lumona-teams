import React, { use } from 'react'
import {ReactFlow} from "@xyflow/react";
import DraggableItem from './DraggableItem';
import { useStore } from '../useStore';
import API from '../services/api'

function DragToolBar() {
  const [members, setMembers] = React.useState([]);
  console.log("rendered")
 ;  
  return (
    <div className='h-full ml- w-30% flex flex-col items-center justify-start '>
      <div className="h-full w-50% ml-10 "  >

   {  
     useStore.getState().Members.map((member) => (
       <div key={member._id}>
        <DraggableItem data={{ name: member.name, role: member.role }} />
      </div>
    ))}
     <div>
     <DraggableItem  />
        {console.log(members)}
    `  {console.log("mapping")}
    
    </div>
    </div>
  
    </div>

  )
}

export default DragToolBar