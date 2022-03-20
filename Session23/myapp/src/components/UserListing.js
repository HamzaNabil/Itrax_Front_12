import React, { Component } from "react";
import UserLogin from "../UserLogin";
import UserRegister from "../UserRegister";
import List from "./List";

class UserListing extends Component {
  state = {
    reigsterUser: "",
    loginUser: "",
    isRegistered: false,
    logged: false,
    users: [
      { id: 1, name: "ahmed", age: 25, price: 1000 },
      { id: 2, name: "sayed", age: 27, price: 2000 },
      { id: 3, name: "mohamed", age: 28, price: 3000 },
    ],
    user: null,
  };

  // AddUser

  // Edit User

  // Change in Register Input
  handleRegisterUser = (e) => {
    this.setState({
      reigsterUser: e.target.value,
    });
  };

  // Change in Login Input
  handleLoginUser = (e) => {
    this.setState({
      loginUser: e.target.value,
    });
  };

  // Register User Submit
  handleRegisterSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", this.state.reigsterUser);
    this.setState({
      isRegistered: true,
    });
  };

  // Login User Submit
  handleLoginSubmit = (e) => {
    e.preventDefault();
    let loginUser = this.state.loginUser;
    let savedUser = localStorage.getItem("user");
    if (loginUser == savedUser) {
      this.setState({ logged: true });
    } else {
      console.log("Error in Username");
      this.setState({ logged: false });
    }
  };

  // Delete User
  handleDeleteUser = (id) => {
    let users = this.state.users.filter((user) => user.id != id);
    this.setState({
      users: users,
    });
  };

  // View User
  handleViewUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div>
        {this.state.logged ? (
          <List
            users={this.state.users}
            viewUser={this.handleViewUser}
            deleteUser={this.handleDeleteUser}
            user={this.state.user}
          />
        ) : this.state.isRegistered ? (
          <UserLogin
            handleLoginSubmit={this.handleLoginSubmit}
            handleLoginUser={this.handleLoginUser}
            loginUser={this.state.loginUser}
          />
        ) : (
          <UserRegister
            handleRegisterSubmit={this.handleRegisterSubmit}
            reigsterUser={this.state.reigsterUser}
            handleRegisterUser={this.handleRegisterUser}
          />
        )}
      </div>
    );
  }
}

export default UserListing;
