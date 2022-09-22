import React , {useState} from 'react'

const UseState = () => {
    let [counter, setCounter] = useState(1)
    const increment = () =>{
        setCounter(counter = counter+1)
    }
    const decrement = () =>{
        setCounter(counter = counter-1)
    }
  return (
    <div className="useState">
        <h1>{counter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default UseState