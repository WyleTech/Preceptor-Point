import React from "react";
// import axios from "axios";
import "../App.css";
 

export default class Student extends React.Component {
 
  render() {
    return (
      <div>
      <h6 className="S-Title text-secondary font-weight-bold text-center">
        <i class="fas fa-file-medical"></i> Apply for a Preceptor!
        <div class="iframe-container">
          <iframe
            src="https://crm.zoho.com/crm/WebFormServeServlet?rid=60d121c51cacc962704ff069b0b9539a8fe76b93f6bff0908263076f4b04f80bgidf6e24382884e6cb4c322a0c92257eeacb429e0a27149a5d8e29db619b5b70b33"
            allowfullscreen
          ></iframe>
        </div>
      </h6>
    </div>  
    );
  }
}
