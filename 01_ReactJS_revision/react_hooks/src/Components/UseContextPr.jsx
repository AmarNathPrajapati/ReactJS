import React, { createContext, useState } from 'react'
import Login from './Login';
import User from './User';

export const AppContext2 = createContext();
const UseContextPr = () => {
    const [count, setCount] = useState(0)
  return (
    <AppContext2.Provider value={{count,setCount}}>
        <User/>
        <Login/>
    </AppContext2.Provider>
  )
}

export default UseContextPr