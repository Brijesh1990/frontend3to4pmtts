import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppointApp from "./Appointment";
import './style.css'
const root=createRoot(document.getElementById("appoint"));
root.render(
    <StrictMode>
      <AppointApp />
    </StrictMode>
)