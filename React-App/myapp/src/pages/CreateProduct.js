import React from "react";

function CreateProduct(props) {
  return (
    <div>
      <form onSubmit={props.handleAddProduct}>
        <input
          type="text"
          placeholder="title"
          onChange={props.handleTitleChange}
        />
        <input
          type="number"
          placeholder="price"
          onChange={props.handlePriceChange}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}

export default CreateProduct;
