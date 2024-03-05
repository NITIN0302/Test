import { useState } from "react";
import { CounterProvider } from "./context/counterContext.js";
import Counter from "./Counter.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <CounterProvider value={{ count, increment, decrement }}>
      <Counter />
    </CounterProvider>
  );
}

export default App;
