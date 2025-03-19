import React from 'react'
import Navbar from './navbar'
import PageBanner from './PageBanner'
import Footer from './Footer'
export default function Contact() {
  return (
    <>
    <Navbar />
    <PageBanner />
    <section id="be-icecream-content">
  {/* naturals products */}
  <div className="natural-products mt-5 p-5">
    <h1 className="text-center">
      Contact with Us <br />{" "}
      <span className="cafe-txt text-danger">Contact Form</span>
    </h1>
  </div>
  <div className="row container w-75 mx-auto">
    <div className="col-md-5">
      <p>
        <b className="text-dark fs-3">Office Address : </b> 101, Aditya Complex,
        Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram
        Nagar, Rajkot, Gujarat 360005
      </p>
      <p>
        <b className="text-dark fs-3">Office Open : </b> 7:30 am - 8:00 pm
      </p>
      <p>
        <b className="text-dark fs-3">Call us : </b> (+)-9173357217
      </p>
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1741849189950!6m8!1m7!1s9XSohBvGFOlIvHln5sVknw!2m2!1d22.2902495076072!2d70.7747893158034!3f69.43049484865617!4f2.8100081660619196!5f0.7820865974627469"
          width="100%"
          height={250}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </p>
    </div>
    <div className="col-md-6 ms-5">
      <form className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="fname"
              placeholder="FirstName *"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="fname"
              placeholder="FirstName *"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="email"
            placeholder="Email  *"
            className="form-control"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="phone"
            placeholder="Phone  *"
            className="form-control"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="subject"
            placeholder="Subject  *"
            className="form-control"
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            name="message"
            placeholder="Message  *"
            className="form-control"
            cols={9}
            rows={5}
            defaultValue={""}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="submit"
            defaultValue="Send"
            className="btn btn-lg btn-danger"
          />
        </div>
      </form>
    </div>
  </div>
</section>
<Footer />
</>
  )
}
