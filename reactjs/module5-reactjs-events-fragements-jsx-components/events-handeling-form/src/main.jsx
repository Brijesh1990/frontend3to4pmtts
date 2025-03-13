import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import DynamicApp from './DynamicApp'
import NameApp from './NameApp'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DynamicApp /> */}

    <NameApp />
    </StrictMode>,
)
