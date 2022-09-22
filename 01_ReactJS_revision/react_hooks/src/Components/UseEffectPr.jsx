import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UseEffectPr = () => {
    let [count, setCount] = useState(0)
    const [data, setData] = useState("") 
    const handleClick = () =>{
        setCount(count +=1)
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((Response)=>{
           setData(Response.data[count].email);
        })
    })
  return (
    <div className="useEffectPr">
        <h2>{count}</h2>
        <h2>{data}</h2>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default UseEffectPr