import React,{useState,useEffect} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
export default function ManageContacts() {
// count total manage contact us data on admin datashboard
const[contactdata,setData]=useState("");
// applied use effects
useEffect(()=>{
 axios.get(`http://localhost:3000/contact-us`).then((response)=>{
     setData(response.data);  
 })
},[]);
    
return (
    <>
    <AdminHeader />
     {/* sidebar and dashboard display flex */}
     <div className='flex flex-row'>
      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>
      {/* dashboard */}
    <div className='w-full p-16'>
    <h1 className='text-4xl text-pink-600 ms-5'>Manage All Contacts</h1>
     <table className='table-auto text-center w-full mt-10 border-1 border-separate border-spacing-[26px]'>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Comment</th>
            <th>Action</th>
        </tr>

        {contactdata && contactdata.map((item)=>{
          return(
            <>
            <tr className='text-center'>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.subject}</td>
            <td>{item.comment}</td>
      
            <td><button className='bg-red-600 text-white'><span className='bi bi-trash'></span></button></td>
        </tr>

            </>
          )
        })}   
   
     </table>

    </div>

    </div>

    </>
  )
}
