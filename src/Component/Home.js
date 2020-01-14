import React from "react";
import Table from "react-bootstrap/Table";

const Home = () => (
  <React.Fragment>
    <header className="page-header">
      <h1 className="text-white text-center col-lg-9 my-5">
        <i class="fas fa-file-medical"></i> Preceptor Point
      </h1>
    </header>
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-9 text-left text-white-50">
          <p>
            You work hard to learn and take steps toward graduation; you don’t
            need to work hard to find a Preceptor
          </p>
          <p>
            The difficulties for NP students don’t end in the classroom or even
            the clinical setting. It can be a headache trying to find a
            preceptor that is a willing match. Whether options are limited, time
            is short, or things fall short before completion…. NP students can
            feel helpless in this uphill battle.
          </p>
          <p>
            Get rid of the headaches, reclaim your hours, and avoid lost wages
            due to delayed graduation (too cheesy?)…. We are the one point stop
            to connect NP students with the Preceptors that are needed to get
            valuable clinical hours.
          </p>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>How it works!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Start the process by filling out an application on below, free
                  of cost or obligation.{" "}
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
                  We work through our database of experienced preceptors to find
                  one that not only specializes in your desired field,
                  butmatches with your needs.{" "}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  After the Deposit is placed we connect your information with
                  the qualified Preceptor(s).
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  After a mutual match is made, the remaining payment is
                  processed and the you are connected with your preceptor to set
                  the next steps.{" "}
                </td>
              </tr>
            </tbody>
          </Table>

          {/* Student inquiry Button on Home-page - Redirect to About US */}
          <a href="/student">
            <button
              type="button"
              className="btn btn-link btn-info btn-lg btn-block text-light ml-3 mr-3 mt-2 mb-5 "
              // onClick={this.handleClick}
            >
              Students - Click to get started!
            </button>
          </a>
        </div>
      </div>
    </div>
  </React.Fragment>
);

// class Home extends React.Component {
//   render() {
//     return (
//       <React.Fragment>

//         <div className="d-block">
//          <p>
//          You work hard to learn and take steps toward graduation; you don’t need to work hard to find a Preceptor (too cheesy?)
//          </p>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

export default Home;
