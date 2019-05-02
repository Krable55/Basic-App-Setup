import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Sign Up",
      password: "",
      rePassword: "",
      username: "",
      name: "",
      dob: "",
      hidden: true,
      email: ""
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  toggleHidden() {
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
          <input type="text" name="Email" value={this.state.name} /> <br />
          Date of Birth:
          <br />
          <input type="text" name="Email" value={this.state.dob} /> <br />
          User Name:
          <br />
          <input type="text" name="Email" value={this.state.username} /> <br />
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
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
