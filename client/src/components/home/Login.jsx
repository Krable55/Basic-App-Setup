import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../reducers/loginReducer";

import { loginTheme } from "../../../public/CSS/themes";

import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Login",
      hidden: true
    };
  }

  toggleHidden = () => {
    console.log(this.props.login);
    this.setState({ hidden: !this.state.hidden });
  };
  handleSubmit = e => {
    e.preventDefault();
    //Post to database
  };

  render() {
    const { classes, login, dispatch } = this.props;
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
                type="text"
                name="Email"
                value={login.email}
                onChange={e => dispatch(loginAction({ email: e.target.value }))}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                id="password"
                type={hidden ? "password" : "text"}
                value={login.password}
                onChange={e =>
                  dispatch(loginAction({ password: e.target.value }))
                }
              />
            </FormControl>
            <Typography className={classes.showPassword}>
              <Checkbox
                color="primary"
                type="checkbox"
                onChange={this.toggleHidden}
              />
              Show Password
            </Typography>
            <Button
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
              <Link className={classes.link} href="/login">
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
    // need to map state to props.....map dispatch??? and connect to store
  };
};
export default connect(mapStateToProps)(withStyles(loginTheme)(Login));
