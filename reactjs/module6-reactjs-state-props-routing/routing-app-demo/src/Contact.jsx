import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Contact() {
  return (
    <>
        <Navbar />
    
    <Container className='shadow mt-5'>
    <Row>
     <div className='col-md-4 p-5'>
         <p className='fs-2'>Our Address</p>
         <p><b>Address :</b> 150 feet ring road near jalaram plot-2 indira circle Rajkot-360005 </p>
         <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6799314943046!2d70.77238027412226!3d22.29011104326695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1740648210103!5m2!1sen!2sin" width="100%" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
     </div>
     <div className='col-md-8 p-5'>
         <h1>Contact us</h1>
         <hr />

         <div className='form-group mt-3'>
            <input type='text' placeholder='Name *' className='form-control' />
         </div>
         
         <div className='form-group mt-3'>
            <input type='text' placeholder='Email *' className='form-control' />
         </div>
         
         <div className='form-group mt-3'>
            <input type='text' placeholder='Phone *' className='form-control' />
         </div>


         <div className='form-group mt-3'>
            <input type='text' placeholder='Subject *' className='form-control' />
         </div>
         

         <div className='form-group mt-3'>
            <input type='text' placeholder='Address *' className='form-control' />
         </div>
         

         <div className='form-group mt-3'>
            <input type='submit' value="Send" placeholder='Subject *' className='btn btn-sm btn-dark text-white' />
         </div>

         
     </div>
    </Row>
 </Container>
 </>
  )
}
