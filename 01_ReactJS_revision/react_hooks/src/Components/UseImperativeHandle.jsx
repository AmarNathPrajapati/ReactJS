import React, { useRef } from 'react'
import Button from './Button'
const UseImperativeHandle = () => {
    const buttonRef = useRef(null)
    const handleClick = () =>{
        buttonRef.current.alterToggle();
    }
  return (
    <div className="imperativHandle">
        <button onClick={handleClick}>Button from parent</button>
        <Button ref={buttonRef}/>
    </div>
  )
}

export default UseImperativeHandle