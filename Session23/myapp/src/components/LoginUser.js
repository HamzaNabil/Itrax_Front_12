import React, { Component } from "react";

class LoginUser extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Login User" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginUser;
