import React,{useState} from 'react'
export default function IfElseIf() {
    // destructuring of data
    // const[count,setCount]=useState({
    //     id:0,
    //     name:"brijesh",
    //     age:35
    // });
   
    // if(count.age==35)
    // {
    //     return <h1>yes i am seniour citizen</h1>
    // }
    // else 
    // {
    //     return <h1>I am younger</h1>
    // }

    const[a,setData1]=useState(85);
    const[b,setData2]=useState(105);
    const[c,setData3]=useState(65);
    if(a>b && a>c)
    {
        return <h1>Number N1 is greater</h1>
    }
    else if(b>a && b>c)
    {
        return <h1>Number N2 is greater</h1>
    }

    else if(c>a && c>b)
    {
        return <h1>Number N3 is greater</h1>
    }
    else 
    {
     
        return <h1>Something went wrong</h1>
    }
    
  return (
    <div>
      
    </div>
  )
}
