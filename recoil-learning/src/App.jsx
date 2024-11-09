import './App.css'
import {useRecoilState,useRecoilValue,useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
import { evenSelector } from './store/selector/evenSelector';

function App() {

  return (
    <>
      <Count/>
      <EvenCounter/>
    </>
  )
}

function Count(){
  return <div>
    <CountRender />
    <Button />
  </div>
}

function EvenCounter(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is Even":""}
  </div>
}

function CountRender()
{
    const count = useRecoilValue(countAtom);
    return <div>
      {count}
    </div>
}

function Button(){
  // const [count,setCount] = useRecoilState(customAtom);
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{setCount(count => count+1)}}>
      Increase
    </button>
    <button onClick={()=>{setCount(count => count-1)}}>
      Decrease
    </button>
  </div>
}

export default App
