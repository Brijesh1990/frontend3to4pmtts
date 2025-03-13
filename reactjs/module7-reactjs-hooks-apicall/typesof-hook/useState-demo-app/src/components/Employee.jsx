import React,{useState} from 'react'
export default function Employee() {
    // destructuring of data ...
    const[name,setName]=useState("Brijesh kumar pandey");
  return (
    <div>

      <h1>My name is : {name}</h1>
      
    </div>
  )
}
