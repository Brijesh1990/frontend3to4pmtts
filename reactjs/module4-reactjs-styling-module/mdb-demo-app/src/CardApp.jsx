import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCarousel, 
    MDBCarouselItem,
    MDBCarouselCaption,
    MDBRow
  } from 'mdb-react-ui-kit';
  

export default function CardApp() {
  return (
   <>
   {/* slider here */}

   <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>

     <MDBRow>
     <div className='col-md-4'>
     <MDBCard className='mt-5'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' className='' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      
    </MDBCard>
    </div>

    <div className='col-md-4'>
    <MDBCard className='mt-5'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' className='' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </div>

  <div className='col-md-4'>
    <MDBCard className='mt-5'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' className='' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </MDBRow>
   </>
  )
}
