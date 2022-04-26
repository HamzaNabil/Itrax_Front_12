// Action Creator => function return action(object)

import {
  DECREMENT,
  FETCH_ERR,
  FETCH_START,
  FETCH_USERS,
  INCREMENT,
} from "./types";

export function incrementAction(dispatch) {
  return dispatch({
    type: INCREMENT,
  });
}

export function decrementAction(dispatch) {
  return dispatch({
    type: DECREMENT,
  });
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_USERS,
          data: data,
        });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERR });
      });
  };
}

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    id: id,
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    product: product,
  };
};

// redux thunk
