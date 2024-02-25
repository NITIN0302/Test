import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import "./App.css";

import { Sortableitems } from "./Sortableitems";

function App() {
  const [language, setLanguage] = useState([
    "JavaScript",
    "Python",
    "TypeScript",
  ]);

  return (
    <div className="text-center justify-center h-screen w-full bg-black py-5">
      <h2 className=" text-white">The Best Programming Language:</h2>
      <div className="w-[100%] h-[50%] flex flex-wrap justify-center text-center mt-5">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={language}
            startegy={verticalListSortingStrategy}
          >
            {language.map((ele) => (
              <Sortableitems key={ele} id={ele} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id != over.id) {
      setLanguage((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;
