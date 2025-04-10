import {useState,useEffect} from 'react';
const Child = ({mulby2})=>{
   const[count,setcount] = useState(0);
   useEffect(()=>{
         setcount(mulby2());
         console.log("Updated");
    },[mulby2]);
return(<>
    <h1>Value : {count}</h1>
    </>
)
    
}
export default Child;
