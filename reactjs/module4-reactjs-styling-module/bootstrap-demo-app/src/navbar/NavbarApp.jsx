import React from "react";
import { Nav,Navbar,NavbarBrand } from "react-bootstrap";

function NavbarApp()
{
    return(
        <>
         <Nav className="nav navbar navbar-expand-md p-4 bg-dark text-white">
         <NavbarBrand className="navbar-brand">Flipkart App</NavbarBrand>
         {/* toggler */}
         <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#toggApp">
            <span className="bi bi-grid text-white"></span>
         </button>
         <div className="collapse navbar-collapse" id="toggApp">
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Feedback</a></li>
            <li className="dropdown"><a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">Account</a>
            <ul className="dropdown-menu bg-dark">
            <li><a href="#">SignIn</a></li>
            <li><a href="#">SignUp</a></li>
            </ul>
            </li>
            <li><a href="#">Contact</a></li>
         </ul>
         </div>
         </Nav>
        </>
    )
}

export default NavbarApp