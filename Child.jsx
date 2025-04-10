import './Childe.css';
import { useState } from "react";
const Child = ({UpdateData})=>{
        let store ;
        const sendToParent = ()=>{
            UpdateData(store);
        }

    
      
        
    return(
      <>
        <h1>Child Component</h1>
      <input type="text" onChange={(event)=>
            store = event.target.value
      } />
      <button onClick={sendToParent}>send</button>
      
      </>  
    )
}
export default Child;