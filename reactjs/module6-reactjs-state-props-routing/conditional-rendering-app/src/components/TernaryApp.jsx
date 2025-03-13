import React,{useState} from 'react'


export default function TernaryApp() {

    // destructuring of data
    const[age,setAge]=useState(20);
    const res=age>=18? "i am eligible for voting":"i am not eligible for voting";
  return (
    <div>
      {res}
    </div>
  )
}
