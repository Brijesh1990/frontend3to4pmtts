import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function AddTeams() {
//destructuring of data 
const[team,setTeam]=useState("");
useEffect(()=>{
    axios.get('http://localhost:4000/allteams').then((response)=>{
        setTeam(response.data);
    })
},[])


// stored data or add teams via admin
const teams=useRef("");
const photo=useRef("");
const captname=useRef("");
const place=useRef("");

// create a event handeling add data via form
const addTeamsData=(e)=>{
   e.preventDefault();      
   var insert={
    teams:teams.current.value,
    photo:photo.current.value,
    captname:captname.current.value,
    place:place.current.value
   } 

  //add data via axios.post
  axios.post(`http://localhost:4000/addteams`,insert).then(()=>{
    // pass a messages
    Swal.fire({
        title: "Congratulations!",
        text: "Your team addedd successfully!",
        icon: "success"
      });
  })
  e.target.reset();
}
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
    <h1 className='text-4xl text-pink-600 ms-0'>Add Teams</h1>
    <hr className='border border-2 border-pink-600 w-20' />
    <form onSubmit={addTeamsData}>
    <div className='form-group mt-5'>
            <select type='text' placeholder='Enter SubCategory Name *' ref={teams} className='form-control p-3 border border-2 border-pink-600 w-128'>
                <option value="">-select Teams-</option>
                {team && team.map((item)=>{
                    return(
                        <>
                           <option value={item.team}>{item.team}</option>
                        </>
                    )
                })}
            </select>
        </div>

        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter PHoto URL *' ref={photo} className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter Captain name *' ref={captname} className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>

  
        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter Place *' ref={place} className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>

        
        <div className='form-group mt-5'>
            <input type='submit' value="Add Teams" className='form-control p-3 bg-black text-white w-128' />
           
        </div>
</form>    

    </div>

    </div>

    </>
  )
}
