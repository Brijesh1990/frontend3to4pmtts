import React from 'react'
const age=12;
export default function IfApp() {
    if(age>=18)
    {
        return <h1>I am eligible for voting</h1>;
    }
    else 
    {
        return <h1>Not elegible</h1>
    }
  return (
    <div>
      
    </div>
  )
}
