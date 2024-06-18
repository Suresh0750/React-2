

import React,{useReducer,useState} from 'react'

function App(){

  const style = {
    display : 'flex',
    alignItem : 'center'
  }

  const [state,dispatch] = useReducer()
  console.log(state)
  console.log(JSON.stringify(dispatch))
  const [count,setCount] = useState(0)
  return (
    <div style={style}>
      <button onClick={()=>(setCount((cur)=> cur-1))}>-</button>
      <h3>{count}</h3>
      <button onClick={()=>(setCount((cur)=> cur+1))}>+</button>
    </div>
  )
}

export default App