import { products } from "../../data";

const initState = {
  products: products,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.product],
      };
    case "DELETE_PRODUCT":
      let allProducts = state.products.filter((p) => p.id != action.id);
      return {
        products: allProducts,
      };
    default:
      return state;
  }
};
export default productReducer;
