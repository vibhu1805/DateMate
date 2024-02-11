
import { Link, useLocation } from "react-router-dom";
import "../App.css";




const Navbar = () => {
  
  

  let location = useLocation();
 
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
     
      <div className="container-fluid text-center">
        <Link className="navbar-brand" href="/">
          DateMate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
          
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Form
              </Link>
            </li>
            </ul>
        </div>
      </div>
    
    </nav>
    


    
    
    </>
  );
};

export default Navbar;