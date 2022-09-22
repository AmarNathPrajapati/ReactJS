import React,{useEffect, useState} from 'react'
import axios from 'axios';
const UseEffect = () => {
    //useEffect hook is a fuction is invoked whenever a page is rerendered. use to detect whenever page is rerender.
    // it take a callback
    // it you want to invoke useState if particular state is change then put that state into dependecies.
    const [data, setData] = useState("")
    let [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count=count+1);
    }
    useEffect(()=>{    
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
           setData(response.data[0].email);
           console.log("hello");
        })
    },[count])
  return (
    <div className="useEffect">
        {data}
        <h1>{count}</h1>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseEffect