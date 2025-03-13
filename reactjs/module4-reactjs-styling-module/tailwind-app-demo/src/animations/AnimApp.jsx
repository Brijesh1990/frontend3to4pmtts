import React from "react";
import '../assets/css/style.css'
function AnimApp()
{
    return (
        <>

            <div className="container flex flex-row mt-5">
              <div className="basis-1/2 bg-pink-500 m-4 p-4 rounded-xl text-xl text-white animate-pulse">Enjoy</div>
              <div className="basis-1/2 bg-pink-500 m-4 p-4 rounded-xl text-xl text-white animate-bounce">Create a Register Form</div>
            </div>



            <div className="container flex flex-row mt-5">
              <div className="basis-1/2 border bottom-3 border-black  m-4 p-4 rounded-xl text-xl text-white animate-pulse">Enjoy</div>
              <div className="basis-1/2 border bottom-3 border-black  m-4 p-4 rounded-xl text-xl text-white animate-bounce">Create a Register Form</div>
            </div>
        </>
    )
}
export default AnimApp