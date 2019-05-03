import { createAction, handleActions } from "redux-actions";

export const signUpAction = createAction("SIGNUP");

const INITIAL_STATE = {
  password: "",
  rePassword: "",
  username: "",
  name: "",
  dob: "",
  email: ""
};

export default handleActions(
  {
    [signUpAction]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  INITIAL_STATE
);
