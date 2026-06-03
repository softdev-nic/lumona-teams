 const onDragStart = (event) => {
console.log("start")
  event.dataTransfer.setData(
    "application/reactflow",
    "Member"
  );

  event.dataTransfer.effectAllowed =
    "move";
};

function DraggableItem(
  {
    data={}

  }
) {

  return (

    <div
      draggable
      onDragStart={onDragStart}
      className="w-20 h-20 flex items-center flex-row justify-center rounded-md shadow-md bg-white cursor-grab"
    >
    <h3>{data.name}</h3>
    <p>{data.role}</p>
    </div>
       

    

  );
}

export default DraggableItem;