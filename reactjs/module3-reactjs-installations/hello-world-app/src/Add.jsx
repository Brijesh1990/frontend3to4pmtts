import React from "react";
import 'animate.css'
function AddApp()
{
    const a=10;
    const b=20;
    const c=a+b;
    return (
        <>
            <h1 style={{textAlign:"center",fontSize:"40px",animation:"infinite 2s fadeIn"}}>Additions of Number is :{c}</h1>
        </>
    )
}

export default AddApp