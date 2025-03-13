import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
import LoaderApp from './components/LoaderApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderApp />
  </StrictMode>,
)
