import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import ProductContext from "../context/ProductContext";

function ViewProductDetails(props) {
  const { product } = useSelector((state) => state);
  let params = useParams();

  let selectedProduct = product.products.find(
    (product) => product.id == params.id
  );
  return (
    <div>
      ViewProductDetails
      <div className="box">
        <Product product={selectedProduct} />
      </div>
    </div>
  );
}

export default ViewProductDetails;
