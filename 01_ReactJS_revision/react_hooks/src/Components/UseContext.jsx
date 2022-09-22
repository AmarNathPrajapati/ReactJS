import React, { createContext, useState } from 'react'
import Login from './Login';
import User from './User';
// it allows to manage your state very easily
// it is collection of information that can access by any component.
export const AppContext = createContext();
const UseContext = () => {
    const [userName, setUserName] = useState("");
  return (
    <AppContext.Provider value={{userName, setUserName}}>
        {/* <Login setUserName = {setUserName}/>
        <User userName = {userName}/> */}
        <Login/>
        <User/>
    </AppContext.Provider>
  )
}

export default UseContext