import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "APP RENDERING"
    };
  }
  render() {
    return <div>{this.state.test}</div>;
  }
}
