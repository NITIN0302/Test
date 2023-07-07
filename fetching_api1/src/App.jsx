import './App.css'
import {useState,useEffect} from 'react'
import React from 'react';

function App() 
{

   const [catfact,setCatfact] = useState("");

   function fetchcatfact(){
      // fecthing data from an API
      fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => 
      {
         setCatfact(data.fact);
      });
   }

   useEffect(()=>{
         fetchcatfact();
   },[]);
   

   return (
      <div>
         <button onClick={fetchcatfact}>Generate cat fact</button>
         <p>{catfact}</p>
      </div>
   );
}

export default App
