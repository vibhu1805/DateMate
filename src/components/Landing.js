import React from "react";
import brain from "../images/brain.png";

const Landing = () => {
  return (
    <div id="providerslider" className=" carousel carousel slide mt-5 w-100">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#providerslider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          
        ></button>
        <button
          type="button"
          data-bs-target="#providerslider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#providerslider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#providerslider"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="container carousel-inner carol-provid th ">
        <div className="carousel-item mb-5 active th" data-bs-interval="10000">
          <img src={brain} className="card-img-top" alt="..." />
          <h1 className="mt-4 my-auto">Edutrack</h1>
          <h2 className="mt-5">Welcome!</h2>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="carousel-item mb-5 th1" data-bs-interval="2000">
          <div className="container">
            
            <div class="cont">
                <img src={brain} className="card-img-top" alt="..." />
                <h1 className="mx-4 mt-3 ti1">Edutrack</h1>
                </div>
              

            <div className="contain-card  mt-3">
              <div className="card-body mx-3 i1 ">
                <img src={brain} className="card-img-top " alt="..." />
              </div>
            </div>
          </div>
          <h2 className="mt-4 my-auto t1">Feature 1</h2>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      
              <div className="carousel-item mb-5 th1" data-bs-interval="2000">
          <div className="container">
            
            <div class="cont">
                <img src={brain} className="card-img-top" alt="..." />
                <h1 className="mx-4 mt-3 ti2">Edutrack</h1>
                </div>
              

            <div className="contain-card  mt-3">
              <div className="card-body mx-3 i1 ">
                <img src={brain} className="card-img-top  " alt="..." />
              </div>
            </div>
          </div>
          <h2 className="mt-4 my-auto t2">Feature 2</h2>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        
      
              <div className="carousel-item mb-5 th1" data-bs-interval="3000">
          <div className="container">
            
            <div class="cont">
                <img src={brain} className="card-img-top" alt="..." />
                <h1 className="mx-4 mt-3 ti3">Edutrack</h1>
                </div>
              

            <div className="contain-card  mt-3">
              <div className="card-body mx-3 i1 ">
                <img src={brain} className="card-img-top " alt="..." />
              </div>
            </div>
          </div>
          <h2 className="mt-4 my-auto t3">Feature 3</h2>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      
      
      
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#providerslider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#providerslider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Landing;
