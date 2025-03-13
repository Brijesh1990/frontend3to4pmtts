import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default function PageNotFound() {
  return (
    <>
        <Navbar />
    <Container className='shadow mt-5'>
       <Row>
        <div className='col-md-4 p-5'>
            <p>404 errors</p>
        </div>
        <div className='col-md-8 p-5'>
            <h1>Page not found</h1>
            <p><img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' className='img-fluid w-50' alt='page' /></p>

            <p><Link to="/"><button type='button' className='btn btn-sm btn-dark text-white'>Click to Home Page</button></Link></p>
        </div>
       </Row>
    </Container>
    </>
  )
}
