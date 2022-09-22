import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    // it is similiar to useEffect hook
    // it is called earlier stage of page Re-rendering
    // using this you can change the layout of the pages before re-rendering
    const inputRef = useRef(null);
    useEffect(()=>{
        // console.log("useEffect");
        inputRef.current.value = "Amar Nath";

    })
    useLayoutEffect(()=>{
        // console.log("useLayout");
        console.log(inputRef.current.value);
    })
  return (
    <div className="useLayoutEffect">
        <input ref={inputRef} type="text" value="Chandan" name="" id="" />
    </div>
  )
}

export default UseLayoutEffect