import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CountApp from './CountApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountApp />
  </StrictMode>,
)
