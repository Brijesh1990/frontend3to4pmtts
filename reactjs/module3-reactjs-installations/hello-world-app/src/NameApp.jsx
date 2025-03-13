import React from "react";
import 'animate.css'
function Name()
{
    const name="My name is Tej";
    return(
        <>
          {/* <h2 align="center">{name}</h2> */}
          {/* <h2 align="center" style={{fontSize:"65px",color:"red"}}>{name}</h2> */}

          {/* applied animations in text  */}
          <h2 align="center" style={{fontSize:"65px",color:"red",animation:"2s infinite fadeOut"}}>{name}</h2>


        </>
    )
}

export default Name