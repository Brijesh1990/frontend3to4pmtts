import React,{useState} from 'react'
export default function MultipleApp() {
    // destructuring of data ...
    const[name,setName]=useState({
        "id":1,
        "name":"Brijesh",
        "age":35,
        "salary":89500,
        "department":"It trainer"
    });
  return (
    <div>

      <p>Employee name is :{name.name} <br/> employee age is :{name.age} <br /> employee salary is :{name.salary} <br/> employe department is :{name.department}</p>
      {/* <button type='button' style={{backgroundColor:"blue",color:"white"}}onClick={()=>{setName('Rajesh Nagar')}}>Update employee</button> */}
      
    </div>
  )
}
