import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import ProductContext from "../context/ProductContext";

function ViewProductDetails() {
  let products = useContext(ProductContext);
  let params = useParams();

  let product = products.find((product) => product.id == params.id);
  return (
    <div>
      ViewProductDetails
      <div className="box">
        <Product product={product} />
      </div>
    </div>
  );
}

export default ViewProductDetails;
