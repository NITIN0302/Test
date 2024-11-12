import { useState, useEffect } from "react";
import "./App.css";

function useDebounce(value, target) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, target);


    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);

  return debounceValue;
}

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  const changedValue = useDebounce(value, 500);
  return (
    <>
      <p>The changed value is {changedValue}</p>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}

export default App;
