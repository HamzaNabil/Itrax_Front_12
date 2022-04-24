import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({ type: "ADD" });
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({ type: "DECRESE" });
  };
  return (
    <div>
      <button onClick={handleIncrement}>+1</button>
      <p> {count}</p>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
}

export default Counter;
