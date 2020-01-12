import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <React.Fragment>
    <header className="page-header">
      <h1 className="text-white col-lg-9 my-5">
        <i class="fas fa-laptop-medical"></i> Preceptor Point
      </h1>
    </header>
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-9 text-left text-white-50">
          <p>
            The Nurse Practiioner field is growing. This growth is fueled by
            qualified students who gained valuable clinical experience, guided
            by Incredible Preceptors. Unfortunately, this is not always an easy
            or smooth process.
          </p>
          <p>
            NP students are spending a large amount of hours each week hunting
            for a qualified and available Preceptor that can help them. If they
            can’t find one? Graduation can be delayed. If there is an issue that
            withdraws the student or Preceptor? Graduation can be delayed. If
            graduation is delayed, so is the income that comes with it.
          </p>
          <p>
            That is where we step in. It’s important that NP students can
            successfully find the clinical hours that are needed for graduation,
            but it’s equally important they find those hours with a properly
            matched Preceptor.
          </p>

          {/* List of Bullet Points - what we can do for you */}
          <ul class="list-group">
            <li class="list-group-item text-dark font-weight-bold">
              What Preceptor Point can do for you!
            </li>

            <li class="list-group-item list-group-item-primary">
              Short on time and can’t hunt for your hours? We can help you find
              a Preceptor.
            </li>
            <li class="list-group-item list-group-item-secondary">
              Deadline for clinical hours is coming up? We can help find a
              Preceptor.
            </li>
            <li class="list-group-item list-group-item-success">
              Had clinical hours prepared but unforeseen issues caused them to
              fall through? We can help you find a preceptor.{" "}
            </li>
            <li class="list-group-item list-group-item-danger">
              insert issue that caused you to stress about finding a Preceptor:
              We can help you find a Preceptor.
            </li>
            <li class="list-group-item list-group-item-warning">
              Fill out your information below and find out what we can do to
              help you now!
            </li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default About;
