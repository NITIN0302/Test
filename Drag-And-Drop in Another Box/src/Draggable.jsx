import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      key={props.id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="h-[8%] border-2 border-black rounded-md m-2 py-2 px-4"
    >
      {props.id}
    </div>
  );
}
