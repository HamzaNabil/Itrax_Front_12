import React from "react";

function Product(props) {
  let { product } = props;
  return (
    <>
      <img
        src={product.imgUrl ? product.imgUrl : "/images/default.png"}
        alt={product.title}
      />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </>
  );
}

export default Product;
