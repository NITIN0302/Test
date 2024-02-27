import { useState } from "react";
import { Draggable } from "./Draggable.jsx";
import { Droppable } from "./Droppable.jsx";
import { DndContext, closestCenter } from "@dnd-kit/core";

function App() {
  const [fruit, setfruit] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Kivi",
    "Pineapple",
  ]);

  const [canvasState, setCanvasState] = useState([]);

  function handleDragEnd(result) {
    if (result.over.id === "DropIt") {
      setCanvasState([...canvasState, result.active.id]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-screen w-full text-center justify-center">
        <h1>Fruit List</h1>
        <div className="flex flex-wrap justify-center">
          {fruit.map((ele) => (
            <Draggable id={ele} key={ele}></Draggable>
          ))}
        </div>
        <h1>My Cart</h1>
        <div className="h-[50%] w-[100%] justify-center flex flex-wrap">
          <Droppable id="DropIt" items={canvasState}></Droppable>
        </div>
      </div>
    </DndContext>
  );
}

export default App;
