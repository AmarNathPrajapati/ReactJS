import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props,ref) => {

    // it allows to define funcions based on the ref that can be called by using that ref.

    const [toggle, setToggle] = useState(false);
    const handleClick = () =>{
        setToggle(!toggle);
    }
    useImperativeHandle(ref, ()=>({
        alterToggle (){
            setToggle(!toggle);
        }
    }))
  return (
    <div className="button">
        <button onClick={handleClick}>Button From Child</button>
        {toggle && <span>Toggle</span>}
    </div>
  )
})

export default Button