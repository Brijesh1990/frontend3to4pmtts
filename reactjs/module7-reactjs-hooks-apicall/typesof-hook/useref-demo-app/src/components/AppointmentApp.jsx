import React,{useState,useRef} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function AppointmentApp() {
    // destructured of data
    const[data,setData]=useState();
    //useRef to stored all data for appointment
    const name=useRef("");
    const email=useRef("");
    const datetime=useRef("");
    const department=useRef("");
    const doctor=useRef("");
    const message=useRef("");
    const navigate=useNavigate();
    // create a function to add data

    const addAppointmentData=(e)=>{
       e.preventDefault(); 
        var insert={
            name:name.current.value,
            email:email.current.value,
            datetime:datetime.current.value,
            department:department.current.value,
            doctor:doctor.current.value,
            message:message.current.value
        }

        // call api for add data.. application programming interface
        axios.post(`http://localhost:8000/book-appointment`,insert).then(()=>{
            // pass messages 
            Swal.fire({
                title: "Thanks",
                text: "Your apointment booked successfully",
                icon: "success"
              });
              navigate('/');
              e.target.reset();
         
        })

    }

  return (
    <div className='bg-gray-100 container mx-auto  w-128 p-16 mt-15'>
    <h1 className='text-4xl text-black'>Book Appointment</h1>
    <hr className='w-16 border-1 border-white' />  
    <form onSubmit={addAppointmentData}>
        <div className='form-group mt-2'>
            <input type='text' ref={name} placeholder='Name *' className='p-2 bg-white w-full' />
        </div>

        <div className='form-group mt-2'>
            <input type='text' ref={email} placeholder='Email *' className='p-2 bg-white w-full' />
        </div>
        <div className='form-group mt-2'>
            <input type='datetime-local' ref={datetime} placeholder='Date-Time *' className='p-2 bg-white w-full' />
        </div>
        <div className='form-group mt-2'>
            <select ref={department} placeholder='department *' className='p-2 bg-white w-full'>
                <option value="neurologist">Neorologist</option>
                <option value="denstist">Dentist</option>
                <option value="surgeon">Surgeon</option>
            </select>
        </div>

        <div className='form-group mt-2'>
            <select ref={doctor} placeholder='doctor *' className='p-2 bg-white w-full'>
                <option value="shivansh">Dr. Shivansh Pandey</option>
                <option value="aaradhya">Dr Aaradhya Pandey</option>
                <option value="arpna">Dr Arpna Pandey</option>
            </select>
            <div className='form-group mt-2'>
            <textarea  ref={message} placeholder='Message *' className='p-2 bg-white w-full' rows={5} cols={8}></textarea>
        </div>
        <div className='form-group mt-5'>
            <input type='submit'  placeholder='submit *' className='bg-black text-white w-full p-3' value="Book Appointment" />
        </div>
        </div>
    </form>
    </div>
  )
}
