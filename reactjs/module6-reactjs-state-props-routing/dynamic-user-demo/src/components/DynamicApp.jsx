import React from 'react'
import {Container,Row} from 'react-bootstrap'
import Data from './Data'
export default function DynamicApp() {
  return (
    <Container className='w-50 mx-auto mt-5 p-5 shadow'>
      <h4>User management systems <button type='button' className='float-end btn btn-dark text-white'>Export List <span className='bi bi-person'></span></button></h4>
      <hr />
      <Row>
         {/*dynamic list  */}
        {Data && Data.map((item)=>{
            return(
                <>

                <div className='col-md-11 mx-auto shadow m-3 p-2'>
                    <table className='table table-responsive'>
                        <tr>
                           <td align=''>{item.id}</td>

                            <th><img src={item.photo} alt='photo' style={{width:"120px",height:"100px"}} /></th>

                            <td align='right'>{item.name}</td>

                            <td align='right'><a href='' className='ms-5'><span className='bi bi-trash text-danger fs-3'></span></a> |  <a href='' className='ms-1'><span className='bi bi-pencil text-primary fs-3'></span></a></td>
                        </tr>
                    </table>
                </div>
      
                </>
            )
        })}
      </Row>
    </Container>
  )
}
