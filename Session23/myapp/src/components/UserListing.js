import React, { Component } from "react";

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

  handleRegisterUser = (e) => {
    this.setState({
      reigsterUser: e.target.value,
    });
  };

  handleLoginUser = (e) => {
    this.setState({
      loginUser: e.target.value,
    });
  };

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", this.state.reigsterUser);
    this.setState({
      isRegistered: true,
    });
  };

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

  renderLoginForm = () => {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <input
          type="text"
          placeholder="login User"
          value={this.state.loginUser}
          onChange={this.handleLoginUser}
        />
        <input type="submit" value="login" />
      </form>
    );
  };

  renderRegisterForm = () => {
    return (
      <form onSubmit={this.handleRegisterSubmit}>
        <input
          type="text"
          value={this.state.reigsterUser}
          placeholder="register User"
          onChange={this.handleRegisterUser}
        />
        <input type="submit" value="register" />
      </form>
    );
  };

  handleDeleteUser = (id) => {
    let users = this.state.users.filter((user) => user.id != id);
    this.setState({
      users: users,
    });
  };

  handleViewUser = (user) => {
    this.setState({
      user: user,
    });
  };

  renderUsersList = () => {
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <p key={user.id}>
              <span onClick={() => this.handleViewUser(user)}>{user.name}</span>
              <button onClick={() => this.handleDeleteUser(user.id)}>
                delete
              </button>
            </p>
          );
        })}
        {this.state.user ? (
          <p>
            {this.state.user.name} - {this.state.user.age} -
            {this.state.user.price} -
          </p>
        ) : (
          ""
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.logged
          ? this.renderUsersList()
          : this.state.isRegistered
          ? this.renderLoginForm()
          : this.renderRegisterForm()}
      </div>
    );
  }
}

export default UserListing;
