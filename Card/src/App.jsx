import './App.css'
import {useState} from 'react';
import React from 'react';

function App() 
{
    const[str,setStr] = useState("blue");
    const[str1,setStr1] = useState("blue");
    const [num,setNum] = useState(0)

      function increment()
      {
        if(str == "blue")
        {
          setStr("red");
        }
        else{
          setStr("blue");
        }
        setNum(num+1);
      }
      function decrement()
      {
        if(str1 == "blue")
        {
          setStr1("red");
        }
        else{
          setStr1("blue");
        }
        setNum(num-1);
      }

    return(
      <>
        <h1>{num}</h1>
        <button style={{color:str}} onClick={increment}>ADD</button>
        <button style={{color:str1}} onClick={decrement}>SUB</button>
      </>
    );
  
}

export default App
