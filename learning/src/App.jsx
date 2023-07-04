import './App.css'
import {useState} from 'react'
import React from 'react';

function App() 
{
   const [age,setAge] = useState(0);
   function incAge()
   {
     setAge(age+1);
   }
   return (
      <div>
         {age} <button onClick={incAge}>Increment Age</button>
      </div>
   );
}

export default App
