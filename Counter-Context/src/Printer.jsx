import React from 'react'
import useCounterContext from './context/counterContext';

function Printer() {
    const {count} = useCounterContext();
  return (
    <h1 className="p-10">{count}</h1>
  )
}

export default Printer