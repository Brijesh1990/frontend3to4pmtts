import React from "react";
import logo from "../src/assets/images/main-logo.png"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
   <>
    <section id="be-icecream-navbar">
  <nav className="nav navbar navbar-expand-md bg-white p-4 shadow">
    {/* logo */}
    <a href="" className="navbar-brand">
      <img src={logo} className="img-fluid" />
    </a>
    {/* button toggler */}
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#btn-clk"
    >
      <span className="bi bi-grid fs-2 text-danger" />
    </button>
    <div className="collapse navbar-collapse" id="btn-clk">
      <ul className="navbar-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <a href="howmade.html">How it made ?</a>
        </li>
        <li>
          <a href="products.html">Products</a>
        </li>
        <li>
        <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <a
            href="buynow.html"
            className="btn btn-md btn-danger text-white rounded-5"
          >
            Buy Now <span className="bi bi-caret-right" />{" "}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</section>

   </>
  );
}
