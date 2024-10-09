import React, { useState } from 'react'

const App = () => {
 const [username, setUsername] = useState('')
//  const submitHandler=(e)=>{
//   e.preventDefault()
//   console.log(username)
//   setUsername('')
//  }
  // return (
  //   <div>
  //     <form 
  //     onSubmit={(e)=>{
  //       submitHandler(e)
  //     }}
  //     >
  //       <input
  //       value={username}
  //       onChange={(e)=>{
  //         setUsername(e.target.value)
  //       }}
  //        type="text" placeholder='enter your name' 
  //       className='px-3 py-4 font-semibold text-xl rounded m-5' />

  //       <button className='text-white bg-emerald-600
  //        m-5 text-xl px-3 py-4
  //        rounded font-semibold'>Submit</button>
  //     </form>
  //  </div>
  //)
}

export default App
