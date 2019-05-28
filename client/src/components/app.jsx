import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAuthToken } from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setToken } from "../reducers/authReducer";

import Home from "./home/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import NavBar from "./layout/NavBar";
import BasicNavBar from "./layout/BasicNavBar";
import Profile from "./profile/Profile";
import { appBasicStyle } from "../../public/CSS/themes";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import DashboardMenu from "./layout/DashboardMenu";
import Dashboard from "./profile/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import history from "../../../server/history";
import { Router, Route, Switch, Link } from "react-router-dom";

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
    let loggedIn = this.props.user && this.props.user.isAuthenticated;
    return (
      <div>
        {loggedIn ? (
          <NavBar position="fixed" className={classes.appBar} />
        ) : (
          <BasicNavBar />
        )}

        <Router history={history}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </main>
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
