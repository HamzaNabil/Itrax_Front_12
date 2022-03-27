import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Product from "../components/Product";
import ProductContext from "../context/ProductContext";

function ListProducts(props) {
  let products = useContext(ProductContext);
  return (
    <div className="boxes">
      {products.map((product) => (
        <div className="box">
          <NavLink to={`/products/${product.id}`} className="" key={product.id}>
            <Product product={product} />
          </NavLink>
          <button onClick={() => props.handleDeleteProduct(product.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListProducts;
