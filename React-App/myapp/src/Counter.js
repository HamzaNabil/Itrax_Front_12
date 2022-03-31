import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incrementByValueAction,
} from "./redux/actions";

function Counter() {
  let { count } = useSelector((state) => state); // {count: 0}
  let dispatch = useDispatch();
  // Action Creator => function return action
  let handleIncrement = () => {
    dispatch(incrementAction());
  };

  let handleDecrement = () => {
    dispatch(decrementAction());
  };

  let handleIncrementByValue = (value) => {
    dispatch(incrementByValueAction(value));
  };

  return (
    <div>
      <button onClick={handleIncrement}> +1 </button>
      {count}
      <button onClick={handleDecrement}> -1 </button>

      <button onClick={() => handleIncrementByValue(5)}> +5</button>
    </div>
  );
}

export default Counter;
