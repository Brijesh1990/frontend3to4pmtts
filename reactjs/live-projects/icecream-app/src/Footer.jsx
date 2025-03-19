import React from 'react'

export default function Footer() {
  return (
    <div>
      <section id="be-icecream-footer" data-aos="fade-up" data-aos-duration={3000}>
  <div className="row w-75 mx-auto mt-5">
    <div className="col-md-8">
      <h1 className="">
        Homemade Icecream <br />{" "}
        <span className="cafe-txt text-danger">With Passion</span>
      </h1>
    </div>
    <div className="col-md-4 mt-2">
      <p className="text-center fs-1">
        <span className="bi bi-facebook text-primary" />
        <span className="bi bi-instagram text-warning" />
        <span className="bi bi-whatsapp text-success" />
      </p>
      <p className="fs-5 text-center">
        <b>Feel free contact with us</b> (+91)-9173357217
      </p>
    </div>
  </div>
  <div className="copyright w-100 shadow p-5">
    <p className="text-center fs-4">
      Copyright@all right reserved | Certified company
    </p>
  </div>
</section>

    </div>
  )
}
