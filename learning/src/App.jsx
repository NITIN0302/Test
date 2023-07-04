import './App.css'
import {useState} from 'react'
import React from 'react';

function App() 
{
   const [str,setStr] = useState("blue");

   function changevisibility()
   {
      if(str == "blue")
        setStr("red");
      else
        setStr("blue");
   }


   return (
    <div>
        <button onClick={changevisibility} >Show/Hide</button>
        <h1 style = {{color: str}}>HI My name is Nitin</h1>
    </div>
   );
}

export default App
