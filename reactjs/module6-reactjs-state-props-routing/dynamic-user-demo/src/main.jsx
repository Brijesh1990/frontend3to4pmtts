import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import DynamicApp from './components/DynamicApp'
import CriketerList from './components/CriketerList'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <DynamicApp /> */}
  <CriketerList />
  </StrictMode>,
)
