import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ButtonApp from './ButtonApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonApp />
  </StrictMode>,
)
