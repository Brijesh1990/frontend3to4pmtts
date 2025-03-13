import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppointmentApp from './components/AppointmentApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path="/" element={<AppointmentApp />} />
    </Routes>
   </Router>
  </StrictMode>,
)
