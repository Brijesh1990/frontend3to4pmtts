import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SassApp from './components/SassApp'
import './style.scss'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SassApp />
  </StrictMode>,
)
