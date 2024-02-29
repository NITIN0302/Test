import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <div className="">
      <div className="">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="my-2 border border-black rounder-md"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="my-2 border border-black rounder-md"
        />
      </div>
      <div className="my-2 ">
        <button className="border-2 rounded-md px-2 hover:bg-black hover:text-white border-black" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
