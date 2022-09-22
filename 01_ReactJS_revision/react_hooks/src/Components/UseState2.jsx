import React, {useState} from 'react'

const UseState2 = () => {
    const [inputValue, setInputValue] = useState("Chandan");
    const handleChange = (e) =>{
        const newInput = e.target.value;
        setInputValue(newInput);
    }
  return (
    <div>
      <div className="useState2">
          <input type="text" name="" id="" placeholder='enter something' onChange={handleChange} />
            {inputValue}
      </div>
    </div>
  )
}

export default UseState2
