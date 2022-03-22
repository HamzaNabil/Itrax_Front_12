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

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Test from "./components/Test";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import axios from "axios";
import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super(); // inherit
    console.log("Construtor");
    this.state = {
      loading: null,
      posts: [],
      err: null,
    };
  }

  // LifeCycle Methods
  componentDidMount() {
    // requests
    this.setState({ loading: true });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ posts: res.data, loading: null });
      })
      .catch(() => {
        this.setState({ err: "Something went wrong!", loading: null });
      });
  }

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
              <NavLink to="/posts">Posts</NavLink>
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
            <Route
              path="/posts"
              element={
                <Posts
                  loading={this.state.loading}
                  posts={this.state.posts}
                  err={this.state.err}
                />
              }
            />
            <Route
              path="/posts/:id"
              element={<PostDetails posts={this.state.posts} />}
            />
            <Route path="/counter" element={<CounterHook />} />
            <Route path="/user-list" element={<UserListing />} />
            <Route path="/login" element={<Login />} />
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
