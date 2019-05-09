import React, { Component, Fragment } from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import NavBar from "./layout/NavBar";
import Dashboard from "./profile/Dashboard";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "APP IS TEST RENDERING! Still!"
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Router>
        </div>
      </div>
    );
  }
}
