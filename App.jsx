import { useState } from 'react'
import Child from './Child.jsx';
import './App.css';

function App() {
   const[state,setState] = useState("No Data");
   const UpdateData = (state)=>{
        setState(state);
   }
   return(
    <div className='parent_component'>
        <h1>Parent Component</h1>
        <h2>Received Data from Child Component: {state}</h2>
    <Child UpdateData = {UpdateData}/>
    </div>
   )
}

export default App
