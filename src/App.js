import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar"
import About from "./Component/About"
import Home from "./Component/Home"
import Student from "./Component/Student";
import NoMatch from "./Component/NoMatch";
import Footer from "./Component/Footer"
import Preceptor from "./Component/Preceptor"
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/preceptor" component={Preceptor} />
            <Route exact path="/about" component={About} />
            <Route exact path="/student" component={Student} />
            {/* <Route exact path="/login" component={ValidatedLoginForm} /> */}
            <Route exact pathe="/404" component={NoMatch} />
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default App;
