import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default function ButtonApp() {
return (
<>


<MDBContainer className='p-5 bg-dark mx-auto mt-5'>
<MDBRow>
<div className='col-md-5 ms-5 p-4 bg-white'>
<button type='button' className='btn btn-danger text-white'>Register here <span className='fa fa-user'></span></button>

<button type='button' className='btn btn-info text-white ms-0 mt-2'>Register here <span className='fa fa-user'></span></button>
</div>

<div className='col-md-5 ms-5 p-4 bg-white'>
<button type='button' className='btn btn-danger text-white'>Register here <span className='fa fa-user'></span></button>

<button type='button' className='btn btn-info text-white ms-0 mt-2'>Register here <span className='fa fa-user'></span></button>
</div>
</MDBRow>
</MDBContainer>
</>
)
}
