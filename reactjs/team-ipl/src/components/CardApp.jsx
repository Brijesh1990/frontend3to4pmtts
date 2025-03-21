import React,{useState,useEffect} from "react";
import NavbarApp from "./NavbarApp";
import axios from "axios";
function CardApp()
{
  // count total manage contact us data on admin datashboard
const[data,setData]=useState("");
// applied use effects
useEffect(()=>{
 axios.get(`http://localhost:4000/addteams`).then((response)=>{
     setData(response.data);  
 })
},[]);
      
    return(
        <>
            <NavbarApp />
            <div className="p-5 mt-16">
            <h2 className="text-warning text-center text-black text-4xl">IPL 2025 Teams</h2>
            <hr className="border border-dark border-1 w-25 text-center mx-auto" />

                        <div className="w-full flex flex-row">
                        {data && data.map((item)=>{
                            return(
                                <>
                        <div className="p-5 mt-5 shadow mx-auto bg-white p-5  w-1/3">
                        <div className="bg-warning text-white bg-red-500 p-4 shadow-lg">{item.teams}</div>
                           <p className="text-center">
                            <img src={item.photo} alt="dhoni" style={{width:"100%",height:"320px"}} />
                            <p><b>Captains :</b> {item.captname}</p>
                            <p><b>Place :</b> {item.place}</p>
                           
                            </p>
                         </div>

                                </>
                            )
                        })}  
                       
                 
                    </div>
            </div>

        </>
    )
}

export default CardApp