import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContainerApp from './container/ContainerApp'
import 'bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerApp />
  </StrictMode>,
)
