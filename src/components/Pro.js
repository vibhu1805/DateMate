import React from "react";
import { Link } from "react-router-dom";
const Send = () => {
  return (
    <div className="container-lg ">
      <div className="mt-5 pt-3 me">
        <span className="txt3  ">   Profile</span>
      </div>
      <div className="heading ">Name:
        <div className="input mt-2 mb-2 ">
            <input type="text" id="name" className="form-control"/>
        </div>
      </div>

      <div className="heading">E-mail:
        <div className="input mt-2 mb-2">
            <input type="text" id="email" className="form-control"/>
        </div>
      </div>
      <div className="heading">Class:
        <div className="input mt-2 mb-2">
            <input type="text" id="email" className="form-control"/>
        </div>
      </div>
      <div className="heading">Enrollment Number:
        <div className="input mt-2 mb-2">
            <input type="text" id="email" className="form-control"/>
        </div>
      </div>
      <Link 
      to="../Timetable"><button type="button" className="bt">Edit Timetable</button></Link>
      
      </div>
  )
}
export default Send;