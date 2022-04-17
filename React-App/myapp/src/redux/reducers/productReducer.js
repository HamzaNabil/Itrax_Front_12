import { products } from "../../data";
const productReducer = (
  state = {
    products: products,
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productReducer;
