import { useState,useMemo } from 'react';
import './App.css';

function App() {


     const[counter,setcounter] = useState(0);
     const[number,setnumber] = useState(0);
    const expensive = (counter)=>{
         for(let i=0;i<1000000000;i++){}
          return counter;
    
  }
  const increment = ()=>{
    setcounter(counter+1);
  }
  const incre = ()=>{
    setnumber(number+1);
  }
  
  const data = useMemo(()=>
    {
      return expensive(counter);
    },
    [counter]
    );


  return (
    <>
    {/* {data} */}
    <h1>Counter : {counter}</h1>
    <button onClick={increment}>Counter</button>
    <h1>Number: {number}</h1>
    <button onClick={incre}>Number</button>
      
    </>
  )
}

export default App
