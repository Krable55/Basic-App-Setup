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
import BasicNavBar from "./layout/BasicNavBar";
import { appBasicStyle } from "../../public/CSS/themes";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Dashboard from "./profile/Dashboard";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
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
    const { classes } = this.props;
    console.log(classes);
    let loggedIn = this.props.user && this.props.user.isAuthenticated;
    return (
      <div>
        {loggedIn ? (
          <NavBar position="fixed" className={classes.appBar} />
        ) : (
          <BasicNavBar />
        )}

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/dashboard"
              component={loggedIn ? Dashboard : Home}
            />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  const { user, request, classes } = state;
  return {
    user: user,
    errors: request.errors,
    classes: classes
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
)(withStyles(appBasicStyle)(App));
