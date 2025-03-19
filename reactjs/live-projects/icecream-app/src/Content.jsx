import React from 'react'

export default function Content() {
  return (
    <section id="be-icecream-content">
  {/* naturals products */}
  <div className="natural-products mt-5 p-5">
    <h1 className="text-center" data-aos="fade-right" data-aos-duration={3000}>
      100% NATURAL <br /> <span className="cafe-txt text-danger">PRODUCTS</span>
    </h1>
    <div className="row">
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={3000}>
        <div className="card">
          <div className="card-body">
            <img src="images/banner-pink-cone.png" className="img-fluid" />
            <h1 className="text-center mt-3">ICE CREAM</h1>
            <h1 className="text-center">
              <span className="bi bi-three-dots" />
            </h1>
            <p className="text-center w-75 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae dolore, nemo aut reprehenderit labore consequuntur
              repellendus animi explicabo
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-md-4 mt-2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="card">
          <div className="card-body">
            <img src="images/card-seven-img.png" className="img-fluid" />
            <h1 className="text-center mt-3">ICE CREAM</h1>
            <h1 className="text-center">
              <span className="bi bi-three-dots" />
            </h1>
            <p className="text-center w-75 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae dolore, nemo aut reprehenderit labore consequuntur
              repellendus animi explicabo
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-md-4 mt-2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="card">
          <div className="card-body">
            <img src="images/card-six.png" className="img-fluid" />
            <h1 className="text-center mt-3">ICE CREAM</h1>
            <h1 className="text-center">
              <span className="bi bi-three-dots" />
            </h1>
            <p className="text-center w-75 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae dolore, nemo aut reprehenderit labore consequuntur
              repellendus animi explicabo
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Traditions & Love section */}
  <div className="traditions-products mt-5 p-5">
    <h1 className="text-center" data-aos="fade-right" data-aos-duration={3000}>
      Traditions &amp; Love <br />{" "}
      <span className="cafe-txt text-danger">How It Made ?</span>
    </h1>
    <div className="row w-75 mx-auto">
      <div
        className="col-md-5 p-5 mt-2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <img src="images/milkshake.png" className="img-fluid" />
      </div>
      <div
        className="col-md-7 p-5 mt-2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <p>
          {" "}
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur excepturi voluptatem sapiente quos tenetur vitae culpa
            provident quae, debitis totam.
          </b>
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi porro
          aliquid ipsam nulla error, maiores quas dolores est voluptas nesciunt
          enim non nisi corporis sapiente distinctio qui nihil, quos sit.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi porro
          aliquid
        </p>
        <p>
          <a href="" className="btn btn-md btn-danger text-white rounded-5">
            Read More <span className="bi bi-caret-right" />{" "}
          </a>
        </p>
      </div>
    </div>
  </div>
  {/* load galleries sections */}
  <div
    className="traditions-gallery mt-5 p-5"
    data-aos="fade-up"
    data-aos-duration={3000}
  >
    <div className="row">
      <div className="col-md-4 p-3">
        <p className="text-center">
          <img
            src="images/sagittis-felis-sec-two-three.png"
            className="img-fluid w-25"
          />
        </p>
        <p className="text-center cafe-txt text-danger">721</p>
        <p className="text-center w-50 mx-auto">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          dignissimos.
        </p>
      </div>
      <div className="col-md-4 p-3 mt-2">
        <p className="text-center">
          <img
            src="images/sagittis-felis-sec-two-two.png"
            className="img-fluid w-25"
          />
        </p>
        <p className="text-center cafe-txt text-danger">721</p>
        <p className="text-center w-50 mx-auto">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          dignissimos.
        </p>
      </div>
      <div className="col-md-4 p-3 mt-2">
        <p className="text-center">
          <img
            src="images/sagittis-felis-sec-two-img-one.png"
            className="img-fluid w-25"
          />
        </p>
        <p className="text-center cafe-txt text-danger">721</p>
        <p className="text-center w-50 mx-auto">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          dignissimos.
        </p>
      </div>
    </div>
    <img
      src="images/icecream2-home.png"
      className="img-fluid"
      data-aos="fade-right"
      data-aos-duration={3000}
    />
  </div>
  {/* client say about us */}
  <div
    className="w-75 mt-5 p-2 mx-auto client-say shadow"
    data-aos="fade-up"
    data-aos-duration={3000}
  >
    <p className="text-center">
      <img
        src="images/person-img.png"
        className="img-fluid w-25 rounded-circle"
      />
    </p>
    <p className="w-75 mx-auto p-2">
      <q>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        minima, fuga quis iusto beatae obcaecati saepe eligendi dolor maiores
        blanditiis nihil id vel fugiat ratione tempora quia ipsa enim quidem?
      </q>
    </p>
    <p className="text-center">
      <span className="bi bi-three-dots fs-1 text-danger" />
    </p>
  </div>
  {/* cafe cards start from here */}
  <div
    className="w-75 mt-5 p-1 mx-auto cafe-card"
    data-aos="fade-up"
    data-aos-duration={3000}
  >
    <div className="row">
      <div className="col-md-4 mt-2">
        <div className="card  bg-secondary rounded-3">
          <div className="card-header fs-3 text-center bg-danger text-white w-75 mx-auto">
            Cafe
          </div>
          <div className="card-body p-5 text-white">
            <h1>Cikago</h1>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.
            </p>
            <hr />
            <p>Monday - Friday</p>
            <p>06:00 Am - 10:00 pm</p>
            <p>Saturday - Sunday</p>
            <p>08:00 Am - 08:00 pm</p>
          </div>
        </div>
      </div>
      <div
        className="col-md-4 mt-2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="card  bg-secondary rounded-3">
          <div className="card-header fs-3 text-center bg-danger text-white w-75 mx-auto">
            Cafe
          </div>
          <div className="card-body p-5 text-white">
            <h1>Cikago</h1>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.
            </p>
            <hr />
            <p>Monday - Friday</p>
            <p>06:00 Am - 10:00 pm</p>
            <p>Saturday - Sunday</p>
            <p>08:00 Am - 08:00 pm</p>
          </div>
        </div>
      </div>
      <div
        className="col-md-4 mt-2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="card  bg-secondary rounded-3">
          <div className="card-header fs-3 text-center bg-danger text-white w-75 mx-auto">
            Cafe
          </div>
          <div className="card-body p-5 text-white">
            <h1>Cikago</h1>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum.
            </p>
            <hr />
            <p>Monday - Friday</p>
            <p>06:00 Am - 10:00 pm</p>
            <p>Saturday - Sunday</p>
            <p>08:00 Am - 08:00 pm</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        <a href="" className="btn btn-md btn-danger text-white rounded-5">
          Our Locations <span className="bi bi-caret-right" />{" "}
        </a>
        <a href="" className="btn btn-md btn-danger text-white rounded-5 ms-5">
          Franchise <span className="bi bi-caret-right" />{" "}
        </a>
      </p>
    </div>
  </div>
</section>

  )
}
