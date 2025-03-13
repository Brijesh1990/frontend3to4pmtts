import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// import App from "./HelloWorldApp";
// import Name from "./NameApp";
import AddApp from "./Add";
const root=createRoot(document.getElementById("demo"));
root.render(

    <StrictMode>
        {/* <h1>Hello world</h1> */}
        {/* <h1>Additions of numbers is {10+20}</h1>
        <h1>Substractions of numbers is {20-5}</h1>
        <h1>Multiplications of numbers is {10*20}</h1> */}
        {/* <h1>Hello world</h1> */}

        {/* <App /> */}
{/* 
         <Name /> */}


  <AddApp />

    </StrictMode>


)