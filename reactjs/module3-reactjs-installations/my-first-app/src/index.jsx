import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const root=createRoot(document.getElementById("root"));
root.render(

    <StrictMode>
    {/* <h1>Hi Brijesh</h1> */}
    <App />
    </StrictMode>

)