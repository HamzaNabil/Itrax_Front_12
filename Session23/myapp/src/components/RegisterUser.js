import React, { Component } from "react";

class RegisterUser extends Component {
  state = {
    user: "",
  };

  handleRegisterUser = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", this.state.user);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="register User"
          onChange={this.handleRegisterUser}
        />
        <input type="submit" value="register" />
      </form>
    );
  }
}

export default RegisterUser;
