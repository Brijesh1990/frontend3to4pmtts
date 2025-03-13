import React from 'react'
import logoimg from '../assets/images/main-logo.png'
export default function Header() {
  return (
    <section id='icecream-header' className='container-fluid w-full p-5 flex flex-row shadow-2xl'>
     <div className='icecrean-logo'>
      <img src={logoimg} alt='logo' className='img-fluid' />
     </div>
     <div className='icecrean-navbar'></div>
     <div className='icecrean-buy-now'></div> 
    </section>
  )
}
