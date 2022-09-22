import React, { useContext } from 'react'
import { AppContext2 } from './UseContextPr'
// import {AppContext} from './UseContext';
const Login = () => {
    
    // const {setUserName} = useContext(AppContext);
    // const handleChange = (e) =>{
    //     setUserName(e.target.value)
    // }
    const {setCount} = useContext(AppContext2);
    let {count} = useContext(AppContext2);
    const handleClick = () =>{
      setCount(count= count+1);
    }
  return (
    <div>
      <button onClick={handleClick}>click</button>
      {/* <input type="text" onChange={handleChange}/> */}
    </div>
  )
}

export default Login
