import './App.css'
import {useState} from 'react';
import React from 'react';

function App() 
{
  const [age,setAge] = useState("");
  const [name,setName] = useState("");

  function fetchage()
  {
     fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json()).then((data)=>{
        setAge(data.age);
     });
  }

  function person(event)
  {
      setName(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={person}/>
      <button onClick={fetchage}>Predict Age</button>
      <p>Age is {age}</p>
    </>
  );
  
}

export default App
