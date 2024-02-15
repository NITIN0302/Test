import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~!@#$%^&*(){}[]?";
    }

    let pass = "";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, charAllowed, passwordgenerator]);

  return (
    <>
      <div className="mx-6 my-6">
        <div className="bg-gray-700 rounded-xl">
          <input type="text" defaultValue={password} />
          <button className="bg-blue-300">copy</button>
        </div>
        <div className="mx-6 my-6">
          <input
            type="range"
            min={6}
            max={100}
            defaultValue={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white mx-2">length:{length}</label>
          <input
            type="checkbox"
            defaultValue={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev)=>!prev)
            }}
          />
          <label className="text-white mx-2">Number</label>
          <input type="checkbox" defaultValue={charAllowed}
            onChange={() => {
              setCharAllowed((prev)=>!prev);
            }}/>
          <label className="text-white mx-2">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
