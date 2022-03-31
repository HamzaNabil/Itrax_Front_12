import { createStore } from "redux";

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "incrementByValue":
      return { count: state.count + action.x };

    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
