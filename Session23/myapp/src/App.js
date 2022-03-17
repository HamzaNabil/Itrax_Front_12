import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoApp from "./components/TodoApp";
import LoginUser from "./components/LoginUser";

import "./App.css";
import RegisterUser from "./components/RegisterUser";
import UserListing from "./components/UserListing";
class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          {/* <TodoApp /> */}
          <UserListing />
          {/* <LoginUser /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
