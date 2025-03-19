import React from 'react'
import adminlogin from '../../assets/admin/images/about-us-benner-img.png'
export default function AdminLogin() {
  return (
    <div className='container  p-16 mt-16 flex flex-row'>

     <div className='w-1/2 p-5'>
        <img src={adminlogin} alt='admin' />
     </div>

     <div className='w-1/2 p-5'>
        <h1 className='text-4xl'>BieceIceCream Admin Login</h1>
        <hr className='border border-2 w-80' />
        <div className='form-group mt-5'>
            <input type='text' placeholder='Email *' className='form-control p-5 border border-2 border-black w-128' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='password' placeholder='Password *' className='form-control p-5 border border-2 border-black w-128' />
        </div>

        
        <div className='form-group mt-5'>
            <input type='submit' placeholder='Email *' value="SignIn" className='form-control p-5  bg-black text-white' />
            <b className='ms-5'>Forget Password ?</b>
        </div>
     </div>

      
    </div>
  )
}
