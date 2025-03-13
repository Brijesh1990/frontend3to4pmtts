import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddApp from './OurAddress'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddApp />
  </StrictMode>,
)
