import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg border-bottom border-white">
        <nav className="container">
          <Link className="header-logo my-0 mr-md-auto font-weight-normal" to="/">
            <img src="../Images/PP_Favicon.png" style={{ height: 50}} alt="Preceptor Point Logo" className='img-fluid mt-0 mb-0 pt-0 pb-0'></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mr-1 text-white-50">Menu</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/preceptor">
                  Preceptor<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;