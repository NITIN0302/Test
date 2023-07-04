import './App.css'
import {useState} from 'react'
import React from 'react';

function App() 
{
   const [str,setStr] = useState("");
   const handleInputChange = (event) => {
    // event.target.value is access the value that is written in the input field
      setStr(event.target.value);
   };
   return (
      <div>
         <input type="text" onChange={handleInputChange}/>
         <br></br>
         {str}
      </div>
   );
}

export default App
