import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoApp from "./components/TodoApp";
import LoginUser from "./components/LoginUser";

import "./App.css";
import RegisterUser from "./components/RegisterUser";
import UserListing from "./components/UserListing";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Test from "./components/Test";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/user-list">User Listing</NavLink>
            </li>
          </ul>
        </header>
        {/* /about  <Route path="/about" element= about */}
        {/* /about/test */}

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="test" element={<Test />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-list" element={<UserListing />} />
          </Routes>
          {/* <TodoApp /> */}
          {/* <UserListing /> */}
          {/* <LoginUser /> */}
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
