import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Services() {
  return (
    <>
        <Navbar />
    
    <Container className='shadow mt-5'>
    <Row>
     <div className='col-md-4 p-5'>
         <p>React routing</p>
     </div>
     <div className='col-md-4 p-5'>
         <h1>Our services</h1>
     </div>
    </Row>
 </Container>
 </>
  )
}
