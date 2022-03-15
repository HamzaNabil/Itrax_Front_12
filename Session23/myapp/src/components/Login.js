import React, { Component } from "react";

class Login extends Component {
  state = {
    user: "",
    pass: "",
  };

  handleUserChange = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      pass: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleUserChange}
            placeholder="Enter Username"
          />
          <input
            type="password"
            placeholder="Enter Pass"
            onChange={this.handlePasswordChange}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
