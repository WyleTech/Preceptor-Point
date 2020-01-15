import React from "react";
import Axios from "axios";
import URL from "./URL";

class StudentReviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactUs: [
        {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          streetAddress: "",
          streetAddress2: "",
          city: "",
          zip: "",
          state: "",
          zip: "",
          willingToTravel: "",
          specialtyNeeded: "",
          hoursNeeded: "",
          resume: "",
          howDidYouHearAboutUs: "",
          createdAt: ""
        }
      ]
    };
  }

  componentDidMount = () => {
    this.loadData();
  };

  loadData = () => {
    fetch(`${URL.base}/api/student`)
      .then(res => res.json())
      .then(data => {
        this.setState({ contactUs: data });
      });
  };

  handleClick = (id, index) => {
    Axios.delete(`${URL.base}/api/contactus/` + id);
    let temp = this.state.contactUs;
    temp.splice(index, 1);
    this.setState({ contactUs: temp });
  };

  render() {
    return (
      <div>
        <h1 className="bg-dark text-center text-white-50">Students</h1>
        <table className="table table-striped table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Address 2</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip</th>
              <th scope="col">Travel</th>
              <th scope="col">Specialty</th>
              <th scope="col">Hours</th>
              <th scope="col">Resume</th>
              <th scope="col">Referred</th>
              <th scope="col">Submitted</th>
              <th scope="col">Delete Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* The JSON object is created by using the map function to pull out each individual note as it's own JSON object. Here the map function creates a new array 
              of notes, iterating over it and dispaying it the td tag for each object in the array a new td element is created. The map funtion creates a new array instead 
              of changing the original array. The arrow function here replaces the bind function one of these functions is necessary to bind this of the parent, in this 
              case being note, becasue when the function is created it loses the memory of what this is from the state. Binding and Arrow Functions allow you to maintain 
              the state of the object when invoking the method */}
            {this.state.contactUs.map(contact => (
              // The key is an attribute the\at must be passed to components created dynamically from an Array in React. It allows React to determine if it is a different
              // component or the same one so that components are not recreated, and React can identify changes in the DOM
              <tr key={this.state.contactUs.indexOf(contact)}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.streetAddress}</td>
                <td>{contact.streetAddress2}</td>
                <td>{contact.city}</td>
                <td>{contact.state}</td>
                <td>{contact.zip}</td>
                <td>{contact.willingToTravel}</td>
                <td>{contact.specialtyNeeded}</td>
                <td>{contact.hoursNeeded}</td>
                <td>{contact.howDidYouHearAboutUs}</td>
                <td>{contact.resume}</td>
                <td>{contact.createdAt}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      this.handleClick(
                        contact.id,
                        this.state.contactUs.indexOf(contact)
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default StudentReviewer;
