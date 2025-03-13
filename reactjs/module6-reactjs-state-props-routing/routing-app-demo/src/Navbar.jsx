import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <Nav className='nav navbar navbar-expand-md bg-dark w-100 shadow p-2'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/create-account">Account</Link></li>
        </ul>
        </Nav>
    </>
  )
}
