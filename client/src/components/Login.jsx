import React, { Component } from "react";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Login",
      password: "",
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
          <input type="checkbox" onChange={this.toggleHidden} />
          Show Password
          <br />
          Not a memeber? <a href="/signup">Sign up</a>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
