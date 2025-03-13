import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Details from './Employee'
import Garage from '../CarApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="Brijesh Kumar Pandey" /> */}
    {/* <Details /> */}
    <Garage />  
  </StrictMode>,
)
