import { useState,useCallback} from "react";
import "./App.css";

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordgenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){ str += "0123456789"}
    if(charAllowed){ str += "~!@#$%^&*(){}[]?"};

    let pass = "";
    for(let i=1;i<=length;i++)
    {
      let index = Math.floor(Math.random()*str.length) + 1;
      pass += str[index];
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,password]);
  

  return (
    <>
      <div>
          <div classname="bg-gray-700 rounded-xl">
            <input type="text" name="" id="" />
            <button className="bg-blue-300">copy</button>
          </div>
      </div>
    </>
  );
}

export default App;
