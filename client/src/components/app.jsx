import React, { Component } from "react";
import Home from "./home/Home";
import Login from "./home/Login";
import SignUp from "./home/SignUp";

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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
