import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "./redux/actions";
// dispatch
function Counter() {
  const { counter } = useSelector((state) => state); // {counter: {count: 0} , user: {users: []}}
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch(incrementAction());
    incrementAction(dispatch);
  };

  const handleDecrement = () => {
    // dispatch(decrementAction());
    decrementAction(dispatch);
  };
  return (
    <div>
      <button onClick={handleIncrement}> +1 </button>
      {counter.count}
      <button onClick={handleDecrement}> -1 </button>
    </div>
  );
}

export default Counter;
