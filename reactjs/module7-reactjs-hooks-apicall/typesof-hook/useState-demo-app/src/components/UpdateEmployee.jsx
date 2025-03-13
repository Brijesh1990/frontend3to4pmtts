import React,{useState} from 'react'
export default function EmployeeApp() {
    // destructuring of data ...
    const[name,setName]=useState("Brijesh kumar pandey");
  return (
    <div>

      <h1>My name is : {name}</h1>
      <button type='button' style={{backgroundColor:"blue",color:"white"}}onClick={()=>{setName('Rajesh Nagar')}}>Update employee</button>
      
    </div>
  )
}
