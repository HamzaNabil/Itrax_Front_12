import React, { Component } from "react";

class UserLogin extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleLoginSubmit}>
        <input
          type="text"
          placeholder="login User"
          value={this.props.loginUser}
          onChange={this.props.handleLoginUser}
        />
        <input type="submit" value="login" />
      </form>
    );
  }
}

export default UserLogin;
