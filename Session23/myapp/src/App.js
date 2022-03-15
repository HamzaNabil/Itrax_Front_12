import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Parent from "./components/Parent";
import Products from "./components/Products";
import Login from "./components/Login";

import myImage from "./assets/download.png";

// when update State => render method run
class App extends Component {
  // Parent
  state = {
    name: "App Comp",
    version: "1.0",
    products: [
      { id: 1, title: "Lab", price: 1000 },
      { id: 2, title: "pc", price: 2000 },
      { id: 3, title: "Mouse", price: 3000 },
    ],
  };

  // Arrow Function
  handleClick = () => {
    this.setState({
      name: "App Comp",
      version: "2.0",
    });
  };
  // re-render
  render() {
    return (
      <div>
        {/* {this.state.name} */}
        {/* <button onClick={this.handleClick}> Click </button> */}
        {/* List All Products: */}
        {/* [ {} , {} , {} ] */}
        {/* {this.state.products.map(function (item) {
          return <div key={item.id}> {item.title} </div>; */}
        {/* })} */}
        <Login />

        <img src={myImage} />
        {/* <Products /> */}

        {/* div => 1 */}
        {/* div => 2 */}
        {/* div => 3 */}
        {/* <br />
        <br />
        <hr />
        <Header x="1" y="2" test={this.state.name} /> // Child
        <h1> {this.state.name} </h1>
        <p>This is App Comp</p>
        <p> {this.state.version} </p>
        <hr />
        all props
        <p>test: {this.props.test}</p>
        <p>name: {this.props.name}</p>
        <p>hamada: {this.props.hamada}</p>
        <Footer foot="f" v={this.state.version} /> */}
      </div>
    );
  }
}

export default App;
