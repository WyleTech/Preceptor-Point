import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className='container' >
      <footer className=" footer bg-dark text-white-50 text-center p-4" style= {{height: 130}}>
        <div className="row text-center">
          <div className="col-4">
            <strong>Accepted Payments</strong>
            <br></br>
            <span>
              <img
              // src="Images/cashapp.png"
              // alt="Cash App"
              // className="paymentOptions"
              ></img>
            </span>
            <span>
              <img
              // src="Images/zelle.png"
              // alt="Zelle"
              // className="paymentOptions"
              ></img>
            </span>
          </div>

          <div className="col-4 order-2">
            <Link className="navbar-brand" to="/">
              <img
               src="../Images/PP_Favicon.png"
              alt="PP Logo Responsive image"
               className="img-fluid mt-0 mb-0"
               style={{height: 80}}
              ></img>
            </Link>
          </div>
          <div className="Contact-Us col-4 order-3 ">
            <strong>Contact Us</strong>
            <p className="mb-0 pb-0">
              Mesa, Arizona
              <br></br>
              (480) 669-8366
            </p>
            <span>
              <a
                href="https://www.facebook.com/Preceptor-Point-111282440401803/"
                className="socialicons mt-0 pt-o"
              >
                <i className="fab fa-facebook m-2 pt-0 text-danger"></i>
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/preceptor_point?igshid=abikswm4qgj2"
                className="socialicons mt-0 pt-0"
              >
                <i className="fab fa-instagram m-2 pt-0 text-danger"></i>
              </a>
            </span>
            <span>
              <a
                href="https://mobile.twitter.com/PreceptorPoint"
                className="socialicons mt-0 pt-0"
              >
                <i className="fab fa-twitter m-2 pt-0 text-danger"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}
export default Footer;