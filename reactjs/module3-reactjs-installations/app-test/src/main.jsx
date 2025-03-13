import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import CalApp from "./CalculatorApp";
import AboutApp from "./AboutUs";
const root=createRoot(document.getElementById("clc"));
root.render(
    <StrictMode>
     {/* <CalApp /> */}
     <AboutApp />
    </StrictMode>
)