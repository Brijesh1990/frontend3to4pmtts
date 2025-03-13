import React,{useState} from 'react'

export default function GradeApp() {
    // destructuring 
    const[grade,setGrade]=useState("G");
    switch(grade)
    {
        case 'A':
            return <h1>You are topper student</h1>;
            break;
            
        case 'B':
            return <h1>You are average student</h1>;
            break;
          
        case 'C':
            return <h1>You are failed student</h1>;
            break;

         default:

           return <h1>grade not found anywhere</h1>;
            break;

    }
  return (
    <div>
      
    </div>
  )
}
