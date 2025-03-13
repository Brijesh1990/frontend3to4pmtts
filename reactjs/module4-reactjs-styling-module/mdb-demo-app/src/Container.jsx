import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default function Container() {
  return (
    <>
       <MDBContainer className='p-5 bg-dark mx-auto mt-5'>
        <MDBRow>
         
        </MDBRow>
       </MDBContainer>

       <MDBContainer fluid className='p-5 bg-dark mx-auto mt-5'>
        <MDBRow>
         
        </MDBRow>
       </MDBContainer>

       <MDBContainer className='p-5 bg-dark mx-auto mt-5'>
        <MDBRow>
         <div className='col-md-5 ms-5 p-4 bg-white'></div>
         
         <div className='col-md-5 ms-5 p-4 bg-white'></div>
        </MDBRow>
       </MDBContainer>
    </>
  )
}
