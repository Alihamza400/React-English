import { useState,useEffect } from "react"
const Component = ()=>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const add = ()=>{
        setCount(count+1);
    } 
    const add1 = ()=>{
        setCount1(count1+1);
    }
    useEffect(()=>{
        console.log("rendered");
        return()=>{
            console.log("re_rendered");
            setCount(5);
        }
    },[count1,count])
    console.log("rendering");

    const show = ()=>{
        console.log("show");
    }
    show();
    return(
        <>
        <h1>Add First</h1>
        <button onClick={add}>Add1</button>
        <h1>{count}</h1>
        <h1>Add Second</h1>
        <button onClick={add1}>Add2</button>
        <h1>{count1}</h1>
        </>
    )
}
export default Component;