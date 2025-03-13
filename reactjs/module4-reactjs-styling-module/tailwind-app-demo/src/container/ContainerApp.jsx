import React from "react";
import '../assets/css/style.css'
function ContainerApp()
{
    return (
        <>
            <div className="container sm bg-black mx-auto mt-20 p-12 text-white text-center">
                <h1 className="text-5xl">Thi is examples of container App</h1>
                <p className="text-3xl font-thin mt-3">Letes connect with container in tailwinds</p>
            </div>

            <div className="container flex flex-row mt-5">
              <div className="basis-1/4 bg-pink-500 m-4 p-4 rounded-xl">01</div>
              <div className="basis-1/4 bg-pink-500 m-4 p-4 rounded-xl">02</div>
              <div className="basis-1/2 bg-pink-500 m-4 p-4 rounded-xl">03</div>
            </div>
        </>
    )
}
export default ContainerApp