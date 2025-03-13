import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
// bootstrap all components 
// import ContainerApp from './container/ContainerApp'
// import ContainerFluidApp from './container-fluid/ContainerFulidApp'
// import CardApp from './card/CardApp'
import ToggleApp from './navbar-toggle/ToggleApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* Container */}
  {/* <ContainerApp /> */}
  {/* <ContainerFluidApp /> */}
  {/* <CardApp /> */}
  <ToggleApp />
  </StrictMode>,
)
