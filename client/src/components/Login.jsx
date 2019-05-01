import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Login"
    };
  }
  render() {
    return <div>{this.state.test}</div>;
  }
}
