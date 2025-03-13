import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Calc from './Calc'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calc />
  </StrictMode>,
)
