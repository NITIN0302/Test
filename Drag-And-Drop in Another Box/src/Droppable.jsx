import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="min-h-[80%] w-[80%] border-2 border-black rounded-md flex flex-wrap m-2"
    >
      
      {props.items.map((ele) => (
        <div
          key={ele}
          className="max-w-25 h-10 border-2 border-black rounded-md m-2 p-2 align-middle"
        >
          {ele}
        </div>
      ))}
    </div>
  );
}
