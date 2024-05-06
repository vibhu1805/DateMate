import React from "react";
const Attend = () => {
  return (
    <div className="container-lg ">
      <div className="mt-5 pt-3 me">
        <span className="txt3  ">Attendance</span>
      </div>
      <div className="con">
        <div className="container-l ms-5 me-5 mt-5">
          <div className="accordion fw-light" id="accordionFAQ">
            <div className="accordion-item  mb-4 acordhead rounded-3">
              <h2 className="accordion-header ">
                <button
                  className="accordion-button rounded-2 border-none  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Computational Method
                  <div className="text-center">(1/8)</div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body">
                  <div className="card mt-5">
                    <div className="content1">
                      <li>24 April - PRESENT</li>
                      <li> 25 April -ABSENT</li>
                      <li> 26 April -ABSENT</li>
                      <li> 27 April -ABSENT</li>
                      <li> 28 April -ABSENT</li>
                      <li> 29 April -ABSENT</li>
                      <li> 30 April -ABSENT</li>
                      <li> 21 April -ABSENT</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item  mb-4 mt-4 acordhead rounded-3">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button rounded-2 border-none "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Applied Chemistry
                    <div className="text-center">(3/25)</div>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse hide"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    <div className="card mt-5">
                      <div className="content1">
                        <li>24 April - PRESENT</li>
                        <li> 25 April -ABSENT</li>
                        <li> 26 April -ABSENT</li>
                        <li> 27 April -ABSENT</li>
                        <li> 28 April -ABSENT</li>
                        <li> 29 April -PRESENT</li>
                        <li> 30 April -PRESENT</li>
                        <li> 21 April -ABSENT</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item  mb-4 acordhead rounded-3">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button rounded-2 border-none "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Engineering Mechanics 
                    <div className='text-center'>(2/8)</div>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse hide"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    <div className="card mt-5">
                      <div className="content1">
                        <li>24 April - PRESENT</li>
                        <li> 25 April -ABSENT</li>
                        <li> 26 April -ABSENT</li>
                        <li> 27 April -PRESENT</li>
                        <li> 28 April -ABSENT</li>
                        <li> 29 April -PRESENT</li>
                        <li> 30 April -PRESENT</li>
                        <li> 21 April -PRESENT</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item  mb-4 acordhead rounded-3">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button rounded-2 border-none "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Indian Constitution
                    <div className='text-center'>(2/8)</div>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse hide"
                  data-bs-parent="#accordionFAQ"
                >
                  <div className="accordion-body">
                    <div className="card mt-5"  >
        <div className='content1'>
        
            <li >24 April - PRESENT</li>
            <li> 25 April -ABSENT</li>
            <li> 26 April -ABSENT</li>
            <li> 27 April -ABSENT</li>
            <li> 28 April -ABSENT</li>
            <li> 29 April -PRESENT</li>
            <li> 30 April -ABSENT</li>
            <li> 21 April -ABSENT</li>
            
        </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Attend;
