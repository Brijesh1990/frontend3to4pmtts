import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-black p-4 text-white flex flex-row'>
       <a href='' className='navbar-brand p-4 w-1/3 text-xl'>Call Us :(+91)-9173357217</a>
       <ul className='inline-flex m-5 text-xl p-15 space-x-8'>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Services</a></li>
        <li><a href=''>Electronics</a></li>
        <li><a href=''>Book</a></li>
        <li><a href=''>Mobile</a></li>
        <li><a href=''>Contact</a></li>
       </ul>
    </nav>
  )
}
