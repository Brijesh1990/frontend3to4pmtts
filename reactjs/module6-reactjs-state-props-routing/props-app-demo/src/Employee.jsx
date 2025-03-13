import React from 'react'

// export default function Employee(props) {
//   return (
//     <>
//       <h1>Employee details is</h1>
//     </>
//   )
// }


function Employee(props)
{
    return(
        <>
            <h1>Hey : {props.name}</h1>
        </>
    )
}

function Details()
{
    const emp="Brijesh kumar pandey"
    return(
        <>
           <h3>The details of employees is ?</h3>
           <h4><Employee name={emp} /></h4>
           <h5>Employee all details is </h5>

        </>
    )
}


export default Details



