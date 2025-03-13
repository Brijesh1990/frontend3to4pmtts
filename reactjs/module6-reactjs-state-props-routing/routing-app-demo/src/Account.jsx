import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Account() {
  return (
    <>
        <Navbar />
    
    <Container className='shadow mt-5'>
    <Row>
     <div className='col-md-4 p-5'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghkKmiAOlyPeofBbwJ3H0JRXRkZLDPUKtlA&s' alt='account' />
     </div>
     <div className='col-md-8 p-5'>
         <h1>Create Account</h1>
         <hr />

        
         <div className='form-group mt-3'>
            <input type='text' placeholder='Email *' className='form-control' />
         </div>
         


         <div className='form-group mt-3'>
            <input type='password' placeholder='Password*' className='form-control' />
         </div>
         


         <div className='form-group mt-3'>
            <input type='submit' value="Login" placeholder='Subject *' className='btn btn-sm btn-dark text-white' />
         </div>

         
     </div>
    </Row>
 </Container>
 </>
  )
}
