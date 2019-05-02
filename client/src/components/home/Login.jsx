import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../reducers/loginReducer";

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
    return (
      <div>
        <div>{this.state.test}</div>
        <br />
        <form>
          Email:
          <br />
          <input
            type="text"
            name="Email"
            value={this.props.email}
            onChange={e =>
              this.props.dispatch(login({ email: e.target.value }))
            }
          />
          <br />
          Password:
          <br />
          <input
            type={this.state.hidden ? "password" : "text"}
            value={this.props.login.password}
            onChange={e =>
              this.props.dispatch(login({ password: e.target.value }))
            }
          />
          <br />
          <input type="checkbox" onChange={this.toggleHidden} />
          Show Password
          <br />
          Not a memeber? <a href="/signup">Sign up</a>
          <br />
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
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
export default connect(mapStateToProps)(Login);
