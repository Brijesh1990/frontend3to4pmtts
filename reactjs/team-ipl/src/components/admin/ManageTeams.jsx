import React,{useState,useEffect} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
export default function ManageTeams() {
// count total manage contact us data on admin datashboard
const[data,setData]=useState("");
// applied use effects
useEffect(()=>{
 axios.get(`http://localhost:4000/addteams`).then((response)=>{
     setData(response.data);  
 })
},[]);
    
// fetch all teams data

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
    <div className='w-full p-16' style={{overflow:"auto", height:"500px"}}>
    <h1 className='text-4xl text-pink-600 ms-5'>Manage All Teams</h1>
     <table className='table-auto text-center w-full mt-10 border-1 border-separate border-spacing-[26px]'>
        <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Captain</th>
            <th>Place</th>
            <th>Action</th>
        </tr>

        {data && data.map((item)=>{
          return(
            <>
            <tr className='text-center'>
            <td>{item.teams}</td>
            <td><img src={item.photo} alt='photo' className='img-fluid w-25' /></td>
            <td>{item.captname}</td>
            <td>{item.place}</td>
            <td><button className='bg-red-600 text-white'><span className='bi bi-trash p-3'>Delete</span></button></td>
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
