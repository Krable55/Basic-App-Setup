import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../reducers/signUpReducer";

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
    return (
      <div>
        <div>{this.state.test}</div>
        <br />
        <form>
          Name:
          <br />
          <input type="text" name="Name" value={this.state.name} /> <br />
          Date of Birth:
          <br />
          <input
            type="text"
            name="Date of Birth"
            value={this.props.signUp.dob}
            onChange={e => this.props.dispatch(signUp({ dob: e.target.value }))}
          />
          <br />
          Username:
          <br />
          <input
            type="text"
            name="Username"
            value={this.props.signUp.username}
            onChange={e =>
              this.props.dispatch(signUp({ username: e.target.value }))
            }
          />
          <br />
          Email:
          <br />
          <input
            type="text"
            value={this.props.signUp.email}
            name="Email"
            onChange={e =>
              this.props.dispatch(signUp({ email: e.target.value }))
            }
          />
          <br />
          Password:
          <br />
          <input
            type={this.state.hidden ? "password" : "text"}
            value={this.props.signUp.password}
            onChange={e =>
              this.props.dispatch(signUp({ password: e.target.value }))
            }
          />
          <br />
          Re-Enter Password:
          <br />
          <input
            type={this.state.hidden ? "password" : "text"}
            value={this.props.signUp.rePassword}
            onChange={e =>
              this.props.dispatch(signUp({ rePassword: e.target.value }))
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
