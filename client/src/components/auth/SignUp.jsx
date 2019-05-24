import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpAction } from "../../reducers/signUpReducer";
import axios from "axios";

import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "@material-ui/core/Link";
import { signUpTheme } from "../../../public/CSS/themes";
import TextField from "@material-ui/core/TextField";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Sign Up",
      hiddenPassword1: true,
      hiddenPassword2: true,
      hidePicker: true
    };
  }

  toggleHiddenPassword1 = () => {
    this.setState({ hiddenPassword1: !this.state.hiddenPassword1 });
    console.log(this.props);
  };
  toggleHiddenPassword2 = () => {
    this.setState({ hiddenPassword2: !this.state.hiddenPassword2 });
    console.log(this.props);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.signUp);
    let newUser = this.props.signUp; //Post to database
    axios
      .post("/users/register", newUser)
      .then(response => console.log(response.data))
      .catch(error => this.setState({ errors: error.response.data }));
  };
  onDateFocus = () => {
    this.setState({ hidePicker: false });
  };
  onDateBlur = () => {
    this.setState({ hidePicker: true });
  };
  saveAndUpdate = e => {
    const { name, value } = e.target;
    const { signUpAction } = this.props;
    //Fix the date Changeing
    // if (name === "dob") {
    //   let edited = value.split("-");
    //   edited = edited.concat(edited.shift()).join("/");
    //   console.log(edited);

    // }
    signUpAction({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    const { hiddenPassword1, hiddenPassword2, hidePicker, errors } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h6">
            Sign Up
          </Typography>
          <Typography variant="subtitle1" className={classes.login}>
            Already a memeber?
            <Link className={classes.link} href="/login">
              Log In
            </Link>
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="first-name">First Name</InputLabel>
              <Input
                error={!!errors && !!errors.firstName}
                id="first-name"
                name="firstName"
                autoComplete="first-name"
                autoFocus
                onChange={e => this.saveAndUpdate(e)}
              />
              {!!errors && !!errors.firstName && (
                <Typography variant="subtitle2" color="error">
                  {errors.firstName}
                </Typography>
              )}
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <Input
                error={!!errors && !!errors.lastName}
                id="last-name"
                name="lastName"
                autoComplete="last-name"
                onChange={e => this.saveAndUpdate(e)}
              />
              {!!errors && !!errors.lastName && (
                <Typography variant="subtitle2" color="error">
                  {errors.lastName}
                </Typography>
              )}
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                error={!!errors && !!errors.dob}
                name="dob"
                label="Date of birth"
                id="date"
                type={hidePicker ? "text" : "date"}
                onFocus={this.onDateFocus}
                onBlur={this.onDateBlur}
                defaultValue=""
                className={classes.dob}
                onChange={e => this.saveAndUpdate(e)}
              />
              {!!errors && !!errors.dob && (
                <Typography variant="subtitle2" color="error">
                  {errors.dob}
                </Typography>
              )}
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                error={!!errors && !!errors.username}
                id="username"
                name="username"
                autoComplete="username"
                onChange={e => this.saveAndUpdate(e)}
              />
              {!!errors && !!errors.username && (
                <Typography variant="subtitle2" color="error">
                  {errors.username}
                </Typography>
              )}
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                error={!!errors && !!errors.email}
                id="email"
                name="email"
                autoComplete="email"
                onChange={e => this.saveAndUpdate(e)}
              />
              {!!errors && !!errors.email && (
                <Typography variant="subtitle2" color="error">
                  {errors.email}
                </Typography>
              )}
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                error={!!errors && !!errors.password}
                name="password"
                type={hiddenPassword1 ? "password" : "text"}
                id="password"
                autoComplete="current-password"
                onChange={e => this.saveAndUpdate(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.toggleHiddenPassword1}
                    >
                      {hiddenPassword1 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {!!errors && !!errors.password && (
                <Typography variant="subtitle2" color="error">
                  {errors.password}
                </Typography>
              )}
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="Re-Enter Password">
                Re-Enter Password
              </InputLabel>
              <Input
                error={!!errors && !!errors.rePassword}
                name="rePassword"
                type={hiddenPassword2 ? "Password" : "text"}
                id="Re-Enter Password"
                autoComplete="current-password"
                onChange={e => this.saveAndUpdate(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.toggleHiddenPassword2}
                    >
                      {hiddenPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {!!errors && !!errors.rePassword && (
                <Typography variant="subtitle2" color="error">
                  {errors.rePassword}
                </Typography>
              )}
            </FormControl>

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={false}
              onClick={this.handleSubmit}
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

  return {
    signUp: signUp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUpAction: info => dispatch(signUpAction(info))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(signUpTheme)(SignUp));
