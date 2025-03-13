import React from "react";

function Car(props)
{
    return <h2>Car name is : {props.name}</h2>
}
function Garage()
{
    const carinfo="maruti alto 800";
    return(
        <>
            <Car name={carinfo} />
        </>
    )
}

export default Garage;