import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthToken } from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import Home from "./home/Home";
import { setToken } from "../reducers/authReducer";
import PropTypes from "prop-types";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import NavBar from "./layout/NavBar";
import Dashboard from "./profile/Dashboard";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "APP IS TEST RENDERING! Still!"
    };
  }
  componentDidMount() {
    console.log(this.props);
    //Check for token
    if (localStorage.jwtToken) {
      //set auth token
      setAuthToken(localStorage.jwtToken);
      //Decode token and get user info
      const decoded = jwt_decode(localStorage.jwtToken);
      //Set user and isAuthenticated
      this.props.setToken(decoded);
    }
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

App.propTypes = {
  fetchRequest: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  const { user, request } = state;
  return {
    user: user,
    errors: request.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: info => dispatch(setToken(info))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
