import './App.css'
import {useState} from 'react'
import React from 'react';

function App() 
{
  const [Task,setAddtask] = useState([]);
  const [newTask,setNewtask] = useState("");
  const [state,setState] = useState("Black");

  function taskCompleted()
  {
      setState("green");
  }

  function settask(event)
  {
      setNewtask(event.target.value);
  }

  function addtask()
  {
    setState("black");
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
        return <div style={{backgroundColor:state}} className="task">
          <h1>{task}</h1>
          <div className="btn">
            <button onClick={taskCompleted} >Complete</button>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        </div>;
        })}
      </div>

    </div>
   );
}

export default App
