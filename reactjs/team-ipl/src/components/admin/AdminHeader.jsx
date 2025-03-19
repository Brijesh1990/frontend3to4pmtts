import React from 'react'

export default function AdminHeader() {
  return (

    <div className='w-full p-5 bg-black text-white flex flex-row'>
     <div className='w-1/3 bg-black'> <button className='text-2xl'>Admin Panel<span className='bi bi-grid-3x3 ms-16 text-white text-2xl'></span></button> </div>
     <div className='w-full'>
        <b className='ms-128'>Login as Admin at :2:23pm</b>
        <b className='ms-16'>Welcome : Admin</b>
     
     </div>
    
    </div>
  )
}
