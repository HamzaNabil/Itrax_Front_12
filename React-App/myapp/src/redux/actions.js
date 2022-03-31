// Actions Creators  => function return action

export function incrementAction() {
  return {
    type: "increment",
  };
}

export function decrementAction() {
  return {
    type: "decrement",
  };
}

export function incrementByValueAction(vl) {
  return {
    type: "incrementByValue",
    x: vl,
  };
}
