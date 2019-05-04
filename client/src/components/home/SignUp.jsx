import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../reducers/signUpReducer";

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  controlArea: {
    marginTop: 8,
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
  },
  link: {
    marginTop: 8,
    variant: "body1",
    flexDirection: 'row',
    flex: 2,
    display: 'flex',
  },
});


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
    console.log('HEY!')
  }

  render() {
    const { classes, dispatch } = this.props;
    console.log(this.props, 'props??');
    console.log(this.props.dispatch, 'Dispatch on props??');


    return (
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h6">
              Sign Up
            </Typography>
            {/* <Link
              className={classes.link}
              onClick={this.sayHi}
              href="/login"
              >
              Already A User?
            </Link> */}
            <a href="/login">Already a memeber? Log In</a>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="first-name">First Name</InputLabel>
                <Input id="first-name" name="first-name" autoComplete="first-name" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="last-name">Last Name</InputLabel>
                <Input id="last-name" name="last-name" autoComplete="last-name"  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" name="username" autoComplete="username"  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email"  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Re-Enter Password">Re-Enter Password</InputLabel>
                <Input name="Re-Enter Password" type="Re-Enter Password" id="Re-Enter Password" autoComplete="current-password" />
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
};

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { signUp } = state;
  console.log(state, 'Is this actually working?');
  console.log(state.signUp, '???????????');
  // console.log( { signUpReducer }, 'bet this doesnt do what ya think');

  return {
    signUp: state.signUp
    // need to map state to props.....map dispatch??? and connect to store
  };
};
// export default connect(mapStateToProps)(SignUp);
export default withStyles(styles)(connect(mapStateToProps, { signUp })(SignUp));
// export default connect(mapStateToProps)(withStyles(styles)(App));


// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { signUp } from "../../reducers/signUpReducer";

// class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: "Sign Up",
//       hidden: true
//     };
//   }

//   toggleHidden = () => {
//     console.log(this.props.signUp);
//     this.setState({ hidden: !this.state.hidden });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     //Post to database
//   };

//   render() {
//     return (
//       <div>
//         <div>{this.state.test}</div>
//         <br />
//         <form>
//           Name:
//           <br />
//           <input type="text" name="Name" value={this.state.name} /> <br />
//           Date of Birth:
//           <br />
//           <input
//             type="text"
//             name="Date of Birth"
//             value={this.props.signUp.dob}
//             onChange={e => this.props.dispatch(signUp({ dob: e.target.value }))}
//           />
//           <br />
//           Username:
//           <br />
//           <input
//             type="text"
//             name="Username"
//             value={this.props.signUp.username}
//             onChange={e =>
//               this.props.dispatch(signUp({ username: e.target.value }))
//             }
//           />
//           <br />
//           Email:
//           <br />
//           <input
//             type="text"
//             value={this.props.signUp.email}
//             name="Email"
//             onChange={e =>
//               this.props.dispatch(signUp({ email: e.target.value }))
//             }
//           />
//           <br />
//           Password:
//           <br />
//           <input
//             type={this.state.hidden ? "password" : "text"}
//             value={this.props.signUp.password}
//             onChange={e =>
//               this.props.dispatch(signUp({ password: e.target.value }))
//             }
//           />
//           <br />
//           Re-Enter Password:
//           <br />
//           <input
//             type={this.state.hidden ? "password" : "text"}
//             value={this.props.signUp.rePassword}
            // onChange={e =>
            //   this.props.dispatch(signUp({ rePassword: e.target.value }))
            // }
//           />
//           <br />
//           <input type="checkbox" onChange={this.toggleHidden} />
//           Show Password
//           <br />
//           Already a memeber? <a href="/login">Log In</a>
//           <br />
//           <input type="submit" value="Submit" onClick={this.handleSubmit} />
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   const { signUp } = state;
//   return {
//     signUp: signUp
//     // need to map state to props.....map dispatch??? and connect to store
//   };
// };
// export default connect(mapStateToProps)(SignUp);
