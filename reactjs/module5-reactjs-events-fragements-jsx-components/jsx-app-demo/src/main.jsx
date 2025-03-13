import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FragmentsApp from './FragmentsApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './AppName'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FragmentsApp />
    <AppName />
  </StrictMode>,
)
