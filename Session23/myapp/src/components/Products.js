import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, title: "Lab", price: 1000 },
      { id: 2, title: "pc", price: 2000 },
      { id: 3, title: "Mouse", price: 3000 },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.products.map(function (product) {
            return <Product key={product.id} x={product} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
