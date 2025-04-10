import { useState,useEffect } from 'react'
import  Component  from './Components.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(" ");
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true');
      const data = await response.json();
      const stringData = JSON.stringify(data);
      setCount(stringData);
    }
    console.log(count);
    fetchData();

  },[]);

 

  return (
    <>
       <h1>Fetched Data is : {count}</h1>
       <h1>Count is : {count}</h1>
       <Component/>

    </>
  )
}

export default App
