import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { basicNavBarTheme } from "../../../public/CSS/themes";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

class BasicNavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BTT
            </Typography>
            <Button color="inherit" href={"/login"}>
              Login
            </Button>
            <Button color="inherit" href={"/signup"}>
              Sign Up
            </Button>
            <Button color="inherit" href={"/about"}>
              About
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
BasicNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { user, request } = state;
  return {
    user: user,
    errors: request.errors
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setToken: info => dispatch(setToken(info))
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(withStyles(basicNavBarTheme)(BasicNavBar));
