import React, { Component } from "react";

class Product extends Component {
  render() {
    console.log(this.props);
    return <li> {this.props.x.title} </li>;
  }
}

export default Product;
