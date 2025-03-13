import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white p-10 flex flex-row'>
      <div className='p-10 text-4xl'>
        flipkart App
      </div>
      <div className='p-10 text-xl ms-10'>
        <h1 className='text-3xl'>Links</h1>
        <ul>
            <li><a href=''>Electronics</a></li>
            <li><a href=''>Links</a></li>
            <li><a href=''>Kids</a></li>
            <li><a href=''>Policy</a></li>
            <li><a href=''>Terms&Conditions</a></li>
            <li><a href=''>Like us</a></li>
        </ul>
      </div>

      <div className='p-10 text-xl ms-10'>
        <h1 className='text-3xl'>Social Media</h1>
        <ul>
            <li><a href=''>Electronics</a></li>
            <li><a href=''>Links</a></li>
            <li><a href=''>Kids</a></li>
            <li><a href=''>Policy</a></li>
            <li><a href=''>Terms&Conditions</a></li>
            <li><a href=''>Like us</a></li>
        </ul>
      </div>


      <div className='p-10 text-xl ms-10'>
        <h1 className='text-3xl'>News Letter</h1>
        <ul>
            <li><a href=''><input type='text' placeholder='Enter your email *' className='p-1' /></a></li>
            <li><a href=''>Terms & conditions</a></li>
           
        </ul>
      </div>
    </div>
  )
}
