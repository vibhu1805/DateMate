import React from "react";
import "../App.css";
import {useState} from "react";
import back from "../images/back.png"

function Find() {
  

    return (
        
        <div className='  w-100 h-100 p-0 overflow-hidden'>
      <div className="imgcontainer">
        <div className="position-relative text-center x-3">
            <h1 className=" text-center  "> Find Your True Love</h1>
        </div>
        <div className="parent ">
            
        < form className="child ">
   <label>
       I am a
       <select className="input">
           <option value="1">Male</option >
           <option value="2 ">Female</option>
       </select>
   </label>
   
</form>
<form className="child">
   <label>
       Looking for
       <select className="input">
           <option value="1">Female</option>
           <option value="2">Male</option>
       </select>
   </label>
</form>

</div>
<div className="parent">
        < form className="child">
   <label>
       Branch
       <select className="input">
           <option value="1" >CSE</option >
           <option value="2 ">CST</option>
           <option value="2 ">IT</option>
           <option value="2 ">AI</option>
           <option value="2 ">ECE</option>
           <option value="2 ">EEE</option>
           <option value="2 ">ITE</option>
           <option value="2 ">ME</option>
           <option value="2 ">MAE</option>
           <option value="2 ">CE</option>


       </select>
   </label>
</form>
<form className="child">
  <label>insta-id
   <input type="text" placeholder="username" className="input"/>
   </label>
</form>
<div className="parent">
    <div className="child1">
        <button type="button" className="btn-1">
            Find Your Partner
        </button>
    </div>
</div>


</div>
</div>
</div>







    
    
  );
}

export default Find;