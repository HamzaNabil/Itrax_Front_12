import React from "react";
import { NavLink } from "react-router-dom";
import Product from "../components/Product";

function ListProducts({ products }) {
  return (
    <div className="boxes">
      {products.map((product) => (
        <NavLink
          to={`/products/${product.id}`}
          className="box"
          key={product.id}
        >
          <Product product={product} />
        </NavLink>
      ))}
    </div>
  );
}

export default ListProducts;
