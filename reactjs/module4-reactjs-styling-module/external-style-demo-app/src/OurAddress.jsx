import React from "react";
import './style.css'
import Footer from "./Footer";
function AddApp()
{

    return(
        <>

         <div className="app">
            <div className="add1">
                <p><b>Address Line1 :</b>101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</p>
            </div>
            <div className="add2">
            <p><b>Address Line2 :</b>101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</p>
            </div>
            <div className="add3">
            <p><b>Address Line3 :</b>101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</p>
            </div>
            <div className="add4">
            <p><b>Address Line4 :</b>101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</p>
            </div>
         </div>

         <Footer />

        </>
    )
}
export default AddApp