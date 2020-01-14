import React from "react";
import axios from "axios";
import "../App.css";

export default class Student extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    street_address: "",
    street_address2: "",
    city: "",
    zip: "",
    state: "",
    zip: "",
    description_of_request: "",
    willing_to_travel: "",
    hours_needed: "",
    resume: "",
    how_did_you_hear_about_us: ""
  };

  handleAlert = () => {
    alert(
      "Your informtaion has been submitted. Please allow up to 24 hours for response"
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    console.log(event.target.elements[2].value);
    console.log(event.target.elements[3].value);
    console.log(event.target.elements[4].value);
    console.log(event.target.elements[5].value);
    console.log(event.target.elements[6].value);
    console.log(event.target.elements[7].value);
    console.log(event.target.elements[8].value);
    console.log(event.target.elements[9].value);
    console.log(event.target.elements[10].value);
    console.log(event.target.elements[11].value);
    console.log(event.target.elements[12].value);
    axios.post(`http://localhost:8080/api/student`, {
      first_name: event.target.elements[0].value,
      last_name: event.target.elements[1].value,
      email: event.target.elements[2].value,
      phone_number: event.target.elements[3].value,
      street_address: event.target.elements[4].value,
      street_address2: event.target.elements[5].value,
      city: event.target.elements[6].value,
      state: event.target.elements[7].value,
      zip: event.target.elements[8].value,
      willing_to_travel: event.target.elements[9].value,
      hours_needed: event.target.elements[10].value,
      resume: event.target.elements[11].value,
      how_did_you_hear_about_us: event.target.elements[12].value
    });
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <p class="h1 text-secondary display-2 font-weight-bold">
              Student Inquiry Form
            </p>

            {/* First Name Form - IN LINE with Last name */}
            <div className="form-row text-white-50">
              <div class="col">
                <label htmlFor="exampleInputFirstName">First Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputFirstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>

              {/* Last Name Form IN LINE with First Name */}
              <div class="col">
                <label htmlFor="exampleInputLastName">Last Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputLastName"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email Form IN LINE with Phone Form */}
            <div className="form-row text-white-50">
              <div class="col">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="You@example.com"
                />
              </div>
              <div class="col">
                {/* Phone Number Form  IN LINE with Email Form*/}
                <label htmlFor="exampleInputPhoneNumber">Phone Number</label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleInputPhoneNumber"
                  aria-describedby="phone"
                  placeholder="(480) 123-4567"
                />
              </div>
            </div>

            {/* Address Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputstreet_address">Address</label>
              <input
                type="address"
                className="form-control"
                id="InputAddress"
                placeholder="123 Market St"
              />
            </div>
            {/* Address 2 (optional) Form */}
            <div className="form-group text-white-50">
              <label htmlFor="exampleInputstreet_address">
                Address 2 (optional)
              </label>
              <input
                type="address"
                className="form-control"
                id="InputAddress2"
                placeholder="Apartment or suite"
              />
            </div>
            {/* City Form IN LINE with state, zip*/}
            <div className="form-row text-white-50">
              <div className="form-group col">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              {/* State Selection Form */}
              <div className="form-group col-md-3 text-white-50">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose State</option>
                  <option value="">N/A</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              {/* Zip Code Form */}
              <div className="form-group col-md-3 text-white-50">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="Zip code"
                />
              </div>
            </div>

            {/* Specialty Needed Form */}
            <div className="form-row col-md-13 text-white-50">
              <div class="col">
                <label htmlFor="inputSpecialtyNeeded">Specialty Needed?</label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose</option>
                  <option value="">Pediatrics</option>
                  <option value="">Primary Care</option>
                  <option value="">Women's Health</option>
                  <option value="">Family Medicine</option>
                  <option value="">Psych</option>
                  <option value="">Other (type description below)</option>
                </select>
              </div>

              {/* Willing to travel Selection Form */}
              <div class="form-group col-md-3 text-white-50">
                <label htmlFor="inputWillingToTravel">Travel?</label>
                <select id="inputWillingToTravel" className="form-control">
                  <option defaultValue>Choose</option>
                  <option value="">YES</option>
                  <option value="">NO</option>
                </select>
              </div>

              {/* Number of Hours Needed? */}
              <div class="form-group col-md-3 text-white-50">
                <label htmlFor="hoursneeded">Hours?</label>
                <input
                  type="hours"
                  className="form-control"
                  id="InputHoursNeeded"
                  placeholder="hours needed?"
                />
              </div>
            </div>

            {/* Additional Comments Form */}
            <div className="form-row col-md-20 text-white-50">
              <div class="col">
                <label htmlFor="HowDidYouHearAboutUs">
                  Additional Comments
                </label>
                <textarea
                  className="form-control"
                  id="InputHowDidYouHearAboutUs"
                  rows="3"
                  placeholder="if other chosen above, place specialty here"
                ></textarea>
              </div>

              <div class="col-md-4 text-white-25">
                <label for="resume">Attach Resume</label>
                <input
                  type="file"
                  class="form-control-file form-control-sm"
                  id="resume"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-lg btn-success"
                onClick={this.handleAlert}
              >
                Submit!
              </button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
