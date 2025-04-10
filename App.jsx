import { useCallback, useState } from 'react'
import Child from './child'
import './App.css'

function App() {
  const[num,setnum] = useState(5);
  const[toggle,settoggle] = useState(false);
  const mulby2 = useCallback(()=>{
      return num*2;
  },[num]);

  return (
    <>
      <h1>Toggle value: {toggle.toString()}</h1>
      <button onClick={()=>{settoggle(!toggle)}}>Click</button>
      <button onClick={()=>{setnum(num+5)}}>Set</button>
    
      <Child mulby2= {mulby2}></Child>
    </>
  )
}

export default App
