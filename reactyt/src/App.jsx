import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h2>Number is: {num}</h2>
      <button onClick={
        function(){setNum(num+1)}
      }>increment</button>

      <button onClick={()=>{
        setNum(num-1)
      }}>decrement</button>
    </div>
  )
}

export default App
