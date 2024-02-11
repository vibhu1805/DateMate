import React,{useState} from "react";
import coupleimg from "../images/coupleimg.png";
import "../App.css";



const Herosection = () => {
  
      
       
   
  return (
    <>
    <div className="herosection  container-fluid ">
      <div className="hero d-flex justify-content-between mt-5">
        <div className="leftarea  ms-5 mt-5">
          <h1 className="  display-3 family1   ">This Valentine No More Singleness! </h1>
          <p className="fw-light family">
            Start meeting the singles who are ready to commit today
          </p>
           <button type="button" className=" button">
                Get started
            </button>
            </div>

          <div className="rightarea">
            <div className="style">
          <img className="" src={coupleimg} alt="" />
          </div>
        </div>
        </div>
        </div>
    
</>
  );
};

export default Herosection;