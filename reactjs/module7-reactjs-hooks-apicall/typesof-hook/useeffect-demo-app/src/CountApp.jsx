import React,{useState,useEffect} from 'react'
export default function CountApp() {
    const[count,setCount]=useState(0);
    // add effects
    
    // no dependency passed
    // useEffect(()=>{

    //     setTimeout(()=>{
    //         setCount(()=>count+1)
    //     },1000)
    // })


    // pass blank array []
    // useEffect(()=>{

    //     setTimeout(()=>{
    //         setCount(()=>count+1)
    //     },1000)
    // },[]);
     
    useEffect(()=>{

        setTimeout(()=>{
            setCount(()=>count+1)
        },1000)
    },[count]);

  return (
    <div>
      <h1 align="center">The count down start as :{count}</h1>
    </div>
  )
}
