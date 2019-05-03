import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpAction } from "../../reducers/signUpReducer";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Sign Up",
      hidden: true
    };
  }

  toggleHidden = () => {
    console.log(this.props.signUp);
    this.setState({ hidden: !this.state.hidden });
  };

  handleSubmit = e => {
    e.preventDefault();
    //Post to database
  };

  render() {
    const { signUp, dispatch } = this.props;
    const { test, hidden } = this.state;
    return (
      <div>
        <div>{test}</div>
        <br />
        <form>
          Name:
          <br />
          <input
            type="text"
            name="Name"
            value={signUp.name}
            onChange={e => dispatch(signUpAction({ name: e.target.value }))}
          />
          <br />
          Date of Birth:
          <br />
          <input
            type="text"
            name="Date of Birth"
            value={signUp.dob}
            onChange={e => dispatch(signUpAction({ dob: e.target.value }))}
          />
          <br />
          Username:
          <br />
          <input
            type="text"
            name="Username"
            value={signUp.username}
            onChange={e => dispatch(signUpAction({ username: e.target.value }))}
          />
          <br />
          Email:
          <br />
          <input
            type="text"
            value={signUp.email}
            name="Email"
            onChange={e => dispatch(signUpAction({ email: e.target.value }))}
          />
          <br />
          Password:
          <br />
          <input
            type={hidden ? "password" : "text"}
            value={signUp.password}
            onChange={e => dispatch(signUpAction({ password: e.target.value }))}
          />
          <br />
          Re-Enter Password:
          <br />
          <input
            type={hidden ? "password" : "text"}
            value={signUp.rePassword}
            onChange={e =>
              dispatch(signUpAction({ rePassword: e.target.value }))
            }
          />
          <br />
          <input type="checkbox" onChange={this.toggleHidden} />
          Show Password
          <br />
          Already a memeber? <a href="/login">Log In</a>
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { signUp } = state;
  return {
    signUp: signUp
    // need to map state to props.....map dispatch??? and connect to store
  };
};
export default connect(mapStateToProps)(SignUp);
