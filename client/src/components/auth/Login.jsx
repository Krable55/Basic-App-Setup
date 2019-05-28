import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../reducers/loginReducer";
import { fetchRequest } from "../../reducers/asyncRequestReducer";
import history from "../../../../server/history";
import PropTypes from "prop-types";
import { loginTheme } from "../../../public/CSS/themes";
import { setProfile } from "../../reducers/profileReducer";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
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
    this.setState({ hidden: !this.state.hidden });
  };
  saveAndUpdate = e => {
    const { name, value } = e.target;
    const { loginAction } = this.props;
    loginAction({ [name]: value });
  };

  componentWillReceiveProps(nextProps) {
    //Redirect and fetch profile data  on authentication
    if (nextProps.user && nextProps.user.isAuthenticated) {
      history.push("/dashboard");
      //Remove login details from store
      this.props.loginAction("delete");
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    let user = this.props.login;
    this.props.fetchRequest({
      type: "post",
      url: "/users/login",
      data: user
    });
  };

  render() {
    const { login, errors, classes } = this.props;
    const { test, hidden } = this.state;
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

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  fetchRequest: PropTypes.func.isRequired
  // setProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { login, request, user } = state;
  return {
    login: login,
    errors: request.errors,
    user: user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginAction: info => dispatch(loginAction(info)),
    fetchRequest: info => dispatch(fetchRequest(info)),
    setProfile: info => dispatch(setProfile(info))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(loginTheme)(Login));
