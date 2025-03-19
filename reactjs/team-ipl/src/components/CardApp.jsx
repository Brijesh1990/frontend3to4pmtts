import React from "react";
import NavbarApp from "./NavbarApp";
function CardApp()
{
    return(
        <>
            <NavbarApp />
            <div className="p-5 mt-16">
            <h2 className="text-warning text-center text-black text-4xl">IPL 2025 Teams</h2>
            <hr className="border border-dark border-1 w-25 text-center mx-auto" />

                        <div className="w-full flex flex-row">

                        <div className="p-5 mt-5 shadow mx-auto bg-white p-5  w-1/3">
                        <div className="bg-warning text-white bg-red-500 p-4 shadow-lg">Chennai superkings</div>
                           <p className="text-center">
                            <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="dhoni" style={{width:""}} />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            </p>
                         </div>

                 
                    </div>
            </div>

        </>
    )
}

export default CardApp