import React from 'react'
import '../style.css'
import { Container } from 'react-bootstrap'
import Data from './Data'
export default function CriketerList() {
  return (
    <Container className='list-app'>
      {Data && Data.map((row)=>{
        return(
            <>
            <div className='col-md-11 mx-auto  shadow p-2 m-3 list-app'>
                <table className='table table-responsive'>
                    <tr>
                        <td><img src={row.photo} alt='photo' style={{width:"100px",height:"100px"}} className='rounded-circle' /></td>
                        <td align='right'>{row.name}</td>

                        <td align='right'><a href='' className='ms-5'><span className='bi bi-trash text-danger fs-3'></span></a> |  <a href='' className='ms-1'><span className='bi bi-pencil text-primary fs-3'></span></a></td>
                        
                    </tr>
                </table>
            </div>
    
            </>
        )
      })}
      
    </Container>
  )
}
