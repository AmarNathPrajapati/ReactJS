import React, {useState} from 'react'

const UseState_pr = () => {
    const [message, setMessage] = useState("");
    const handleClick2 = () =>{
        setMessage("");
    }
    const handleClick =(e) =>{
        e.target.style.display = 'none';
        setMessage(
            <>
        <h1>Message sent successfully</h1>
        <button onClick={handleClick2}>Ok</button>
            </> )
    }
  return (
    <div className="useState3">
        <button onClick={handleClick}>send</button>
        {message}
    </div>
  )
}

export default UseState_pr