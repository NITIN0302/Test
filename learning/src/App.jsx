import './App.css'
import {useState} from 'react'
import React from 'react';

function App() 
{
   const [str,setStr] = useState(true);

   function changevisibility()
   {
      setStr(!str);
   }


   return (
    <div>
        <button onClick={changevisibility}>Show/Hide</button>
        {str && <h1>HI My name is Nitin</h1>}
    </div>
   );
}

export default App
