import React,{useState} from 'react'
export default function IfElseApp() {
    // destructuring of data
    const[data,setData]=useState("Brijesh");
    if(data=="Rajesh")
    {
        return "Hey Brijesh";
    }
    else 
    {
        return "something went wrong";
    }
  return (
    <div>
      
    </div>
  )
}
