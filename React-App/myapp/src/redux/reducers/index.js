import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export default combineReducers({
  counter: counterReducer,
  user: userReducer,
  product: productReducer,
});

// user

// useSelector(state => state) // {user: {} , counter: {}}
