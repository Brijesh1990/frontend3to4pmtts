// import React from 'react'
// const name="Brijesh";
// export default function FragmentsApp() {
//   return <h1 className='text-center mt-5 text-danger'>My name is :{name}</h1>
// }

import React from 'react'
const name="Brijesh";
const age=35;
export default function FragmentsApp() {
  return (  
//   <>
//   <h1 className='text-center mt-5 text-danger'>My name is :{name}</h1>
//   <h2 className='text-center'>My age is :{age}</h2>
//   </>


// <React.Fragment>
// <h1 className='text-center mt-5 text-danger'>My name is :{name}</h1>
// <h2 className='text-center'>My age is :{age}</h2>
// </React.Fragment>


<div>
<h1 className='text-center mt-5 text-danger'>My name is :{name}</h1>
<h2 className='text-center'>My age is :{age}</h2>
</div>

  )
}
