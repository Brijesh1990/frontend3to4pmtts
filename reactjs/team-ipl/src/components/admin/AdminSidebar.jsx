import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminSidebar() {
  return (
    <div className='bg-black p-16'>
    <div className='flex'>
    <img src='https://static.vecteezy.com/system/resources/previews/043/900/708/non_2x/user-profile-icon-illustration-vector.jpg' className='rounded-full w-20 h-20  mx-auto object-cover ' /> <b className='text-white ms-5 flex mt-5'>Admin Panel</b>
    
    </div>
    <hr className='border-1 border-white mt-5' />
    <ul className='admin-sidebar'>
        <li><Link to="/admin-login/dashboard"><span className='bi bi-house'></span> Dashboard</Link></li>
       
        
        <li><Link to="/admin-login/add-teams"><span className='bi bi-cart'></span> Add IPL Team</Link></li>
        
        <li><Link to="/admin-login/manage-teams"><span className='bi bi-cart'></span> Manage Teams</Link></li>
        
    <li><Link to="/admin-login/manage-contacts"><span className='bi bi-phone'></span> Manage Contacts</Link></li>
        
        <li><Link to="/admin-login/manage-reviews"><span className='bi bi-chat'></span> Manage Reviews</Link></li>
        
        <li><Link to="" className='bg-pink-600 p-3 mt-3'><span className='bi bi-power'></span> Logout</Link></li>
    </ul>
      
    </div>
  )
}
