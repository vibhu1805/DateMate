import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Bestpart() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const handleSignIn = () => {
    navigate("/SignIn");
  };
  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="co">
      <button type="button " onClick={handleSignIn}>
        <span className="txt">Continue as a  </span>
        <span className="txt1 "> Student</span>
        
      </button>
      </div>
      
      <div className="co1">
      <button type="button" className=" fi mt-5 mb-5" >
        <span className="txt">Continue as a </span>
        <span className="txt1">Teacher</span>
      </button>
      </div>
      </div>
    
  );
}
export default Bestpart;
