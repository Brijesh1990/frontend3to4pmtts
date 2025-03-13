import React from 'react'
import '../assets/css/style.css'
export default function FormApp() {
  return (
    <div className='p-5 bg-pink-700 rounded-3xl text-white mt-12 w-1/2 mx-auto'>
    <h3 className='text-center text-4xl'>Register Form</h3>
    <hr className='w-52 mx-auto' />


    <div className='form-group mt-6'>
        <input type='text' placeholder='Name *' className='p-2 w-128 ms-11 rounded-lg border border-spacing-3 border-4 border-black' />
    </div>

    

    <div className='form-group mt-6'>
        <input type='text' placeholder='Email *' className='p-2 border-4 border-black w-128 ms-11 rounded-lg' />
    </div> 

      
    </div>
  )
}
