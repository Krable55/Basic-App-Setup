import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Home"
    };
  }
  render() {
    return <div>{this.state.test}</div>;
  }
}
