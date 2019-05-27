import { createAction, handleActions } from "redux-actions";

export const signUpAction = createAction("SIGNUP");

const INITIAL_STATE = {
  password: "",
  rePassword: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  dob: null
};

export default handleActions(
  {
    [signUpAction]: (state, { payload }) => {
      if (payload === "delete") return {};
      return { ...state, ...payload };
    }
  },
  INITIAL_STATE
);
