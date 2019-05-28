import { createAction, handleActions } from "redux-actions";
import { setAuthToken } from "../../../utils/setAuthToken";
//Helper function
const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};
export const setCurrentUser = createAction("SET_CURRENT_USER");

export const setToken = token => dispatch => {
  if (isEmpty(token)) {
    //Remove token from local storage
    localStorage.removeItem("jwtToken");
    //Remove auth token from local storage
    setAuthToken(false);
  }
  //Set current user
  dispatch(setCurrentUser(token));
};
export default handleActions(
  {
    [setCurrentUser]: {
      next(state, { payload }) {
        return { ...payload, isAuthenticated: !isEmpty(payload) };
      }
    }
  },
  {}
);
