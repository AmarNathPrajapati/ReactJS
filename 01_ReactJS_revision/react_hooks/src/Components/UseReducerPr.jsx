import React,{useReducer} from 'react'
// it can manipulate multiple state
const UseReducerPr = () =>{

    const reducer = (state,action) =>{
        switch(action.type){
            case "func":
                return({
                    age:state.age+1,
                    name:"Amar Nath",
                    text:"I am new text"
                })
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer,{
        age:10,
        text:"initial text",
        "name":"Chandan"
    })
    const handleClick =() =>{
        dispatch({type:"func"});
    }
    return(
        <div className="useReducerPr">
            <h1>{state.name}</h1>
            <h2>{state.age}</h2>
            <h3>{state.text}</h3>
            <button
            onClick={handleClick}
            >click me</button>
        </div>
    )
}
export default UseReducerPr;
