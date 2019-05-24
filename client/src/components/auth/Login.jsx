import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../reducers/loginReducer";
import axios from "axios";

import PropTypes from "prop-types";
import { loginTheme } from "../../../public/CSS/themes";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Login",
      hidden: true
    };
  }
  toggleHidden = () => {
    console.log(this.props);
    this.setState({ hidden: !this.state.hidden });
  };
  saveAndUpdate = e => {
    const { name, value } = e.target;
    const { loginAction } = this.props;
    this.setState({ disabled: { [value]: value.length > 0 } });
    loginAction({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = this.props.login;
    axios
      .post("/users/login", user)
      .then(response => console.log("response data", response.data))
      .catch(error => {
        console.log(error.response.data);
        this.setState({ errors: error.response.data });
      });
    //Post to database
  };

  render() {
    const { classes, login } = this.props;
    const { test, hidden, errors } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {test}
          </Typography>

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Email</InputLabel>

              <Input
                id="email"
                error={!!errors && !!errors.email}
                type="text"
                name="email"
                value={login.email}
                onChange={e => this.saveAndUpdate(e)}
              />
            </FormControl>
            {!!errors && !!errors.email && (
              <Typography variant="subtitle2" color="error">
                {errors.email}
              </Typography>
            )}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                error={!!errors && !!errors.password}
                id="password"
                type={hidden ? "password" : "text"}
                value={login.password}
                onChange={e => this.saveAndUpdate(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.toggleHidden}
                    >
                      {hidden ? <Visibility /> : <VisibilityOff />}
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
            <Button
              id="submitButton"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              value="Submit"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
            <Typography variant="subtitle1" className={classes.signUp}>
              Not a memeber?
              <Link className={classes.link} href="/signup">
                Sign up
              </Link>
            </Typography>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { login } = state;
  return {
    login: login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginAction: info => dispatch(loginAction(info))
  };
};
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(loginTheme)(Login));
