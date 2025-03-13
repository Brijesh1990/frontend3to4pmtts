import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
export default function NameApp() {
    // destructuring of data
    const[text,setText]=useState('');
    // create an eventHandeling function 
    const addFormData=(e)=>{
         e.preventDefault();
        //  console.log(e.target[0].value);
        //  e.target.reset();

        //console.log(e.target[0].value);
        //alert(e.target[0].value);
        
        // alert(e.target[0].value)
        // e.target.reset()
        setText(e.target.value);
    
    }
  return (
    <div>
      <Container className='shadow mt-5 w-25 mx-auto p-5'>
      <h4>What is Your Name ?</h4>
        <form onSubmit={addFormData}>
            <div className='form-group mt-3'>
                <input type='text' value={text} onChange={addFormData}  placeholder='Enter Name *' className='form-control' />
            </div>
            <div className='form-group mt-3'>
                <input type='submit' value="Submit" className='btn btn-sm btn-dark text-white' />
            </div>

            <div className='form-group mt-3'>
             <p>{text}</p>
            </div>
            
        </form>
      </Container>
    </div>
  )
}
 