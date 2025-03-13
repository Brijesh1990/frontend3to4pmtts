import React,{useState} from 'react'
const App=()=>{
  // destructured 
  const[data,setData]=useState("Brijesh Kumar Pandey");
  return(
    <>
      <div className='app'>
      <h1>My name is :{data}</h1>
      <button type='button' onClick={()=>{setData("Avani patel")}}>Update name</button>
    </div>
    </>
  )
}

export default App