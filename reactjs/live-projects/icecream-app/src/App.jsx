import react from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Contact from './Contact'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/contactus' element={<Contact />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
