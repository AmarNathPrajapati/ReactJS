import React, { useRef } from 'react'

const UseRef = () => {
    // useRef is used to access to dom element
    // actually, react uses the virtual dom 
    const inputRef = useRef(null);
    const boxRef = useRef(null);
    const handleClick = () =>{
        inputRef.current.focus();
        boxRef.current.style.backgroundColor = "green";
    }
  return (
    <div className="useRef">
        <input type="text" name="" id="" placeholder='write your name' ref={inputRef} />
        <button onClick={handleClick}>click</button>
        <div className="box" ref={boxRef} style={{height:"200px",width:"200px",backgroundColor:"red"}}>
            
        </div>
    </div>
  )
}

export default UseRef