import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function Home() {
  return (
    <Container className='shadow mt-5'>
       <Row>
        <div className='col-md-4 p-5'>
            <p>React routing</p>
        </div>
        <div className='col-md-8 p-5'>
            <h1>Home Page</h1>
        </div>
       </Row>
    </Container>
  )
}
