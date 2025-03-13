import React,{useState} from "react";
function CarApp()
{

   const name="The access of state and update data";
    return(
        <>
             <h1>{name}</h1>
        </>
    )

}

function Garage()
{
     // destructured of data
     const[data,setData]=useState("Maruti alto 800"); 
    return(
        <>
                
            <CarApp />
            <h2>The car name is :{data}</h2> 
            <button type="button" onClick={()=>setData("Hundai avenvu desel model sx(o)")}>Click Me</button>
        </>
    )
}

export default Garage