import React from "react";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from 'react-bootstrap/Card';
import Table from "react-bootstrap/Table";

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


    {/* Bootstrap Table */}
        <div className="Table  d-flex justify-content-center">
          <div className="container row p-5 col-{breakpoint}-auto ">
            <div className="col-lg-9 text-left text-white-50">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th> <i class="fas fa-laptop-medical"></i></th>
                    <th className="text-center">How it works!</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Start the process by filling out an application on below,
                      free of cost or obligation.{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Our professional and experienced team will reach out to
                      confirm your details.
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      We work through our database of experienced preceptors to
                      find one that not only specializes in your desired field,
                      butmatches with your needs.{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      After the Deposit is placed we connect your information
                      with the qualified Preceptor(s).
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      After a mutual match is made, the remaining payment is
                      processed and the you are connected with your preceptor to
                      set the next steps.{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div> 

    {/* <div className="container">
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
    </div> */}

  </React.Fragment>
);

export default About;