import { createStore } from "redux";

function reducer(state = { count: 10 }, action) {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
    case "DECRESE":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
