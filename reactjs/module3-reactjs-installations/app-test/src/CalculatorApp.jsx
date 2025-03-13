import React from "react";
function CalApp()
{
    const a=50;
    const b=15;
    const c=a+b;
    const d=a-b;
    const e=a*b;
    const f=a/b;
    return (
        <>
            <h1 align='center'>Calculator App</h1>
            <h3 align='center'>Additions : {c}</h3>
            <h3 align='center'>Substractions : {d}</h3>
            <h3 align='center'>Multiplications : {e}</h3>
            <h3 align='center'>Divisions : {f}</h3>
        </>
    )
}

export default CalApp