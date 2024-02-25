import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Sortableitems(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-[30%] h-[20%] border-2 bg-white border-gray-800 rounded-md py-4 flex flex-wrap justify-center mx-40"
    >
      <div>{props.id}</div>
    </div>
  );
}
