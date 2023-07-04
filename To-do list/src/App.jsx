import './App.css'
import {useState} from 'react'
import React from 'react';

function App() 
{
  const [Task,setAddtask] = useState([]);
  const [newTask,setNewtask] = useState("");

  function settask(event)
  {
      setNewtask(event.target.value);
  }

  function addtask()
  {
    const newtodo = [...Task, newTask];
    setAddtask(newtodo);
  }

  function deleteTask(task)
  {
      const newarr = Task.filter((name) =>{
        if(name === task)
          return false;
        else
          return true;
      })
      setAddtask(newarr);
  }

   return (
    <div className='App'>
      <div className="addTask">
        <input type="text" onChange={settask}/>
        <button onClick={addtask}>Add Task</button>
      </div>
      <div className="list">
        {Task.map((task)=>{
        return <div className="task">
          <h1>{task}</h1>
          <button onClick={() => deleteTask(task)}>X</button>
          </div>;
        })}
      </div>

    </div>
   );
}

export default App
