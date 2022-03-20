import React, { Component } from "react";

class UserRegister extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleRegisterSubmit}>
        <input
          type="text"
          value={this.props.reigsterUser}
          placeholder="register User"
          onChange={this.props.handleRegisterUser}
        />
        <input type="submit" value="register" />
      </form>
    );
  }
}

export default UserRegister;
