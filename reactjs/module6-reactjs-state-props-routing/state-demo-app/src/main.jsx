import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Garage from './CarApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Garage />
  </StrictMode>,
)
