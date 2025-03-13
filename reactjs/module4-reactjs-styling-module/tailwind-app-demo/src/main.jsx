import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ContainerApp from './container/ContainerApp.jsx'
// import AnimApp from './animations/AnimApp'
import FormApp from './form/FormApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContainerApp /> */}
    {/* <AnimApp /> */}
    <FormApp />
  </StrictMode>,
)
