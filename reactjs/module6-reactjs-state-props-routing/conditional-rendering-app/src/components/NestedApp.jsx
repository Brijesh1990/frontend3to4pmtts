import React,{useState} from 'react'
export default function NestedApp() {
    // destructuring of data
    const[count,setCount]=useState(-1);
    if(count>=0)
    {
        if(count==0)
        {
            return <h1>yes i am zero and i am something positive values stored</h1>
        }
    }
    else 
    {
      return <h1>something went wrong</h1>
    }

  return (
    <div>
      
    </div>
  )
}
