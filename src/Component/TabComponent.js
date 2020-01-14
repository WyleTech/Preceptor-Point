import React, { Component } from "react";
import Tabs from "./Tabs";
import MenuAdmin from "./MenuAdmin";
import FoodMap1Admin from "./FoodMap1Admin";
import ContactUsReviewer from "./ContactUsReviewer";
import Auth from "./Auth";

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
            <div label="Map Admin">
              <FoodMap1Admin></FoodMap1Admin>
            </div>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default TabComponent;
