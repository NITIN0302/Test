import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="gap-3 flex flex-wrap justify-center bg-white rounded-3xl px-3 py-2">
            <button onClick={()=>setColor("red")} className="text-white bg-red rounded-3xl px-4 py-1 bg-red-800" >Red</button>
            <button onClick={()=>setColor("Blue")} className="text-white bg-red rounded-3xl px-4 py-1 bg-blue-800" >Blue</button>
            <button onClick={()=>setColor("Green")} className="text-white bg-red rounded-3xl px-4 py-1 bg-green-800" >Green</button>
            <button onClick={()=>setColor("Yellow")} className="text-white bg-red rounded-3xl px-4 py-1 bg-yellow-400" >Yellow</button>
            <button onClick={()=>setColor("Pink")} className="text-white bg-red rounded-3xl px-4 py-1 bg-pink-500" >Pink</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
