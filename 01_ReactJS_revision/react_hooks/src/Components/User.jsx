import React, { useContext } from 'react'
// import { AppContext } from './UseContext'
import { AppContext2 } from './UseContextPr'

const User = () => {
    // const {userName} = useContext(AppContext);
    const {count} = useContext(AppContext2);
  return (
    <div>
        {/* <h2>User:</h2>
        <span>{userName}</span> */}
        <h2>Count:</h2>
        <span>{count}</span>
    </div>
  )
}

export default User