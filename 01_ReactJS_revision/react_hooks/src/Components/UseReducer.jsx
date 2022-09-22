import React,{useReducer} from 'react'

const UseReducer = () => {
    const reducer = (state, action) =>{
      switch(action.type){
        case "Increment":
          return {count : state.count+1, text:state.text};
        case "toggleText":
          return {count : state.count, text:state.text +"I am toggled"}
        default:
          return state;
      }
    }
    //basically useReduce help to work with multiple state
    const [state, dispatch] = useReducer(reducer,{count:0,text:"my text"})
  return (
    <div className="useReducer">
        <h1>{state.count}</h1>
        <button onClick={()=>{
          dispatch({type:"Increment"});
          dispatch({type:"toggleText"});
        }
        }>
          increment</button>
        <h2>{state.text}</h2>
    </div>
  )
}

export default UseReducer