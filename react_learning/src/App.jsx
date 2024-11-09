import React, { useState, useEffect } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);

  async function getData() {
    let response = await fetch("https://sum-server.100xdevs.com/todos");
    let val = await response.json();
    setTodo(val);
  }

  useEffect(getData(), []);

  return (
    <div>
      {todo.map((todos) => (
        <>
          <div>{todos.title}</div>
          <div>{todos.description}</div>
        </>
      ))}
    </div>
  );
};

export default App;
