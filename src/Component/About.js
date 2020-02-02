import React from "react";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from 'react-bootstrap/Card';

const About = () => (
  <React.Fragment>
    <header className="page-header">
      <h1 className="About-Us-Title mx-auto text-white text-center col-lg-9 my-5">
        <i class="fas fa-laptop-medical"></i> About Preceptor Point
      </h1>
    </header>

    {/* Card List Practice */}
    <div className="container">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="../Images/typing.jpg"/>
          <Card.Body>
            <Card.Title  className="text-dark text-center">Deadline for Clinicals approaching?</Card.Title>
            <Card.Text>
            Deadline for clinical hours is coming up? We can help find a
              Preceptor. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="../Images/clock.jpg" />
          <Card.Body>
            <Card.Title className="text-dark text-center" >Short on time? </Card.Title>
            <Card.Text>
        Short on time and can’t hunt for your hours? We can help you find
              a Preceptor.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="../Images/wall2.jpg" />
          <Card.Body>
            <Card.Title>Issues finding clinicals?</Card.Title>
            <Card.Text>
              Had clinical hours prepared but unforeseen issues caused them to
              fall through? We can help you find a preceptor.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>

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

        </div>
      </div>
    </div>
  </React.Fragment>
);

export default About;