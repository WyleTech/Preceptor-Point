import React, { Component } from "react";
import Tabs from "./Tabs";
import Auth from "./Auth";
import StudentReviewer from "./StudentReviewer";
import PreceptorReviwer from "./PreceptorReviewer";

class TabComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container bg-dark text-white-50 border-bottom border-white">
          <div className="bg-dark text-white-50 row">
            <h1 className=" col-6 text-left">Admin Menu</h1>
            <h1 className=" col-6 text-center bg-dark text-danger mx-auto">
              <button
                className="btn btn-danger btn-sm text-dark "
                onClick={() => {
                  Auth.logout(() => {
                    this.props.history.push("/login");
                  });
                }}
              >
                Log Out
              </button>
            </h1>
          </div>
        </div>
        <div className="bg-dark text-white-50">
          <Tabs className="bg-dark text-white-50">
            <div label="Student Reviewer">
              <StudentReviewer></StudentReviewer>
            </div>
            <div label="Preceptor Reviewer">
              <PreceptorReviwer></PreceptorReviwer>
            </div>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default TabComponent;
