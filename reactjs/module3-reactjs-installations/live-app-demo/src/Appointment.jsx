import React from "react";
import appoint from './appoint.jpg'
function AppointApp()
{
    return (
        <>
            <div className="app">
                <div className="app1">
                    <img src={appoint} alt="appoint" />
                </div>
                <div className="app2">
                    <h1 >Book Appointment</h1>
                    <hr align='left' />
                    <form>
                        <input type="text" placeholder="Name *" />
                        <br />
                        <input type="email" placeholder="Email *" />
                        <br />
                        <input type="text" placeholder="Phone *" />
                        <br />
                        <input type="text" placeholder="Enter deases *" />
                        <br />
                        <input type="text" placeholder="Address *" />
                        <br />
                        <input type="submit" value="Book Appointment" placeholder="Name *" />
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default AppointApp