import { FETCH_ERR, FETCH_START, FETCH_USERS } from "../types";

const userReducer = (
  state = { users: [], loading: false, err: null },
  action
) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS:
      return {
        ...state,
        users: action.data,
        loading: false,
      };

    case FETCH_ERR:
      return {
        ...state,
        loading: false,
        err: true,
      };
    default:
      return state;
  }
};
export default userReducer;
