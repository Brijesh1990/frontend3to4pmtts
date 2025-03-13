import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import Account from './Account'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/create-account' element={<Account />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>

  </StrictMode>,
)
