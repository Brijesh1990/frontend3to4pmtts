import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
export default function CounterApp() {
    // destructure of data
    const[count,setCount]=useState(0);
    // count is a variables of current state
    // setCount is a function of current state
  return (
    <Container className='p-5 w-50 mx-auto mt-5 shadow'>
      <h3 className='text-center'>The count Initials Values is : {count}</h3> 
      <h3 className='text-center'><button type='button' className='btn btn-md btn-success' onClick={()=>{setCount(count+1)}}><span className='bi bi-plus'></span></button>
      
      <button type='button' className='btn btn-md btn-danger ms-5' onClick={()=>{setCount(count-1)}}><span className='bi bi-dash'></span></button>
      </h3>
    </Container>
  )
}
