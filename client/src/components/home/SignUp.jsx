import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Sign Up",
      // password: "",
      // rePassword: "",
      // username: "",
      // name: "",
      // dob: "",
      hidden: true,
      // email: ""
    };
  }

  toggleHidden = () => {
    this.setState({ hidden: !this.state.hidden });
  }

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
          <input type="text" name="Date of Birth" value={this.state.dob} /> <br />
          Username:
          <br />
          <input type="text" name="Username" value={this.state.username} /> <br />
          Email:
          <br />
          <input type="text" name="Email" value={this.state.email} />
          <br />
          Password:
          <br />
          <input
            type={this.state.hidden ? "password" : "text"}
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          Re-Enter Password:
          <br />
          <input
            type={this.state.hidden ? "password" : "text"}
            value={this.state.rePassword}
            onChange={e => this.setState({ rePassword: e.target.value })}
          />
          <br />
          <input type="checkbox" onChange={this.toggleHidden} />
          Show Password
          <br />
          Already a memeber? <a href="/login">Log In</a>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // need to map state to props.....map dispatch??? and connect to store
  };
};