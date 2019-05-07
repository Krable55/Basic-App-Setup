import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpAction } from "../../reducers/signUpReducer";

import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "@material-ui/core/Link";
import { signUpTheme } from "../../../public/CSS/themes";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Sign Up",
      hidden: true
    };
  }

  toggleHidden = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  handleSubmit = e => {
    e.preventDefault();
    //Post to database
  };

  sayHi = () => {
    console.log("HEY!");
  };

  render() {
    const { classes, dispatch } = this.props;
    console.log(this.props, "props??");
    console.log(this.props.dispatch, "Dispatch on props??");

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h6">
            Sign Up
          </Typography>
          <Typography variant="subtitle1" className={classes.login}>
            Already a memeber?
            <Link className={classes.link} onClick={this.sayHi} href="/login">
              Log In
            </Link>
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="first-name">First Name</InputLabel>
              <Input
                id="first-name"
                name="first-name"
                autoComplete="first-name"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <Input id="last-name" name="last-name" autoComplete="last-name" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username" autoComplete="username" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="Re-Enter Password">
                Re-Enter Password
              </InputLabel>
              <Input
                name="Re-Enter Password"
                type="Re-Enter Password"
                id="Re-Enter Password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              className={classes.controlArea}
              onChange={e =>
                this.props.dispatch(signUp({ rePassword: e.target.value }))
              }
              control={<Checkbox value="showPassword" color="primary" />}
              label="Show Password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { signUp } = state;
  console.log(state, "Is this actually working?");
  console.log(state.signUp, "???????????");
  // console.log( { signUpReducer }, 'bet this doesnt do what ya think');

  return {
    signUp: state.signUp
    // need to map state to props.....map dispatch??? and connect to store
  };
};
// export default connect(mapStateToProps)(SignUp);
// export default withStyles(styles)(
//   connect(
//     mapStateToProps,
//     { signUp }
//   )(SignUp)
// );
export default connect(mapStateToProps)(withStyles(signUpTheme)(SignUp));
