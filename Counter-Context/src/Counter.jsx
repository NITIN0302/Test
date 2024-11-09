import React from "react";
import Printer from "./Printer.jsx";
import useCounterContext from "./context/counterContext.js";

function Counter() {
    const {count,increment,decrement} = useCounterContext();
    return (
    <div className="m-2">
      <Printer/>
      <button className="m-2" onClick={increment}>
        Increment
      </button>
      <button className="m-2" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
