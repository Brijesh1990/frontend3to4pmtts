import React from 'react'
import banner from "../src/assets/images/banner-big-cone.png"
export default function Slider() {
  return (
   <>
    <section id="be-icecream-slider">
  <div className="row">
    <div className="col-md-6">
      <h1 className="">
        <span
          className="cafe-txt text-danger"
          data-aos="fade-right"
          data-aos-duration={3000}
        >
          ICREAM <br />
          MADE WITH{" "}
        </span>
      </h1>
      <p className="cafe-txt">PASSION</p>
      <p>
        <button type="button" className="btn btn-md btn-danger text-white">
          Products
        </button>
        <button type="button" className="btn btn-md btn-danger text-white ms-2">
          How It's Made ?
        </button>
      </p>
    </div>
    <div className="col-4 banner-img">
      <img src={banner} className="img-fluid w-75" />
    </div>
    <div className="col-2">
      <h1 className="text-danger">
        <span className="cafe-txt">16</span> <br />{" "}
        <span className="cafe-txt-reg">Cafes</span>
      </h1>
      <h1 className="text-danger">
        <span className="cafe-txt">23</span> <br />{" "}
        <span className="cafe-txt-reg">Food Trucks</span>
      </h1>
    </div>
  </div>
</section>

   </>
  )
}
