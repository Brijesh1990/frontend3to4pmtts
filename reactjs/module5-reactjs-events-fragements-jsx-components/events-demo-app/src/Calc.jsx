import React from 'react'
import { Container,Row } from 'react-bootstrap'
import {add,subs,mult,dv} from './CalculatorApp'
export default function Calc() {
  return (
    <>
       <Container className='mt-5 p-5 w-50 mx-auto'> 
       <Row>
         <button type='button' onClick={add}>Additions</button>
         <button type='button' onClick={subs}>Substractions</button>
         <button type='button' onClick={mult}>Multiplications</button>
         <button type='button' onClick={dv}>divisions</button>
       </Row>
       </Container>
    </>
  )
}
