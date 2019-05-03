import { createAction, handleActions } from "redux-actions";

export const loginAction = createAction("LOGIN");

// Reducer
const INITIAL_STATE = {
  password: "",
  email: ""
};

export default handleActions(
  {
    [loginAction]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  INITIAL_STATE
);
