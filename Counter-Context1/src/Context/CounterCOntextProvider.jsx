import React,{useState} from "react";
import CounterContext from './CountercContext.js'

function CounterContextProvider({ children }) {
    const [count,setCount] = useState(0);
  return (
    <CounterContext.Provider value={{count,setCount}}>
       {children}
    </CounterContext.Provider>
    );
}

export default CounterContextProvider;
