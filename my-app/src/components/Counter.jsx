
import React,{useState} from 'react'
const App = () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  return (
    <div>
      <button onClick={inc} >+1</button>
      {count}
    </div>
  )
}
export default App