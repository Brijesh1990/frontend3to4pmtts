import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Employee from './components/Employee'
// import EmployeeApp from './components/UpdateEmployee'
import MultipleApp from './components/MultipleApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <EmployeeApp /> */}
    <MultipleApp />
  </StrictMode>,
)
