import { useState,useContext } from 'react'
import Counter from './Counter.jsx';
import CounterContext from './Context/CountercContext.js';
import CounterContextProvider from './Context/CounterCOntextProvider.jsx';
import './App.css'

function App() {
  const {count,setCount} = useContext(CounterContext);
  return (
    <CounterContextProvider value={{count,setCount}}>
      <Counter count={count} />
    </CounterContextProvider>
  )
}

export default App
