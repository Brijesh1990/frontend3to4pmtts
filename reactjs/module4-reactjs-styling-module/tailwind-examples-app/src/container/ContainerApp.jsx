import React from 'react'
import Navbar from '../navbar/Navbar'
import Content from '../content/Content'
import Footer from '../footer/Footer'
export default function ContainerApp() {
  return (
    <>
      
      {/* <div className='container p-32 bg-red-400'>
        <p className='text-5xl text-white'>My name is : Brijesh</p>
      </div> */}


      {/* <div className='2xl:container p-32 bg-red-400'>
        <p className='text-5xl text-white'>My name is : Brijesh</p>
      </div> */}


        {/* flex box */}
      {/* <div className='2xl:container p-32 bg-red-400 flex flex-row'>
        <div className='w-1/2 bg-black p-4 m-4 text-white'>
            This  is box1
        </div>
        <div className='w-1/2 bg-black p-4 m-4 text-white'>
        This  is box1
        </div>
        <div className='w-1/2 bg-black p-4 m-4 text-white'>
        This  is box1
        </div>
      </div> */}


     {/* header of website */}
      <div className='2xl:container p-4 bg-white shadow-lg  flex flex-row'>
        <div className='w-1/3 bg-white p-4 m-4 text-black text-3xl animate-pulse'>
            <span>Flipkart App</span>
        </div>
        <div className='w-full  p-4 m-4'>
        <input type='text' placeholder='Search anything here...' className='border bottom-4 p-3 w-full' />
        </div>
        <div className='w-1/2  p-4 m-4'>
        <span className='text-3xl bi bi-facebook ms-2'></span>
        <span className='text-3xl bi bi-twitter ms-2'></span>
        <span className='text-3xl bi bi-snapchat ms-2'></span>
        <span className='text-3xl bi bi-linkedin ms-2'></span>
        {/* create account */}
        <button className='ms-3 bg-black text-white p-2' type='button'>Account <span className='bi bi-person'></span></button>
        </div>
      </div>

      {/* navbar */}
      <Navbar />

      {/* content */}
      <Content />

      {/* footer */}
      <Footer />
    </>
  )
}
