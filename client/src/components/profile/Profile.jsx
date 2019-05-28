import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      age: "",
      bmi: "",
      height: "",
      weight: "",
      targetWeight: "",
      gender: "",
      goal: "",
      bio: "",
      handle: "",
      completed: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{
              backgroundColor: "#cfe8fc",
              height: "100vh"
            }}
          />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { profile } = state;
  return {
    profile: profile
  };
};
export default connect(mapStateToProps)(Profile);
