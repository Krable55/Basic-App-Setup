import { createAction, handleActions } from "redux-actions";
//Helper function
const isEmpty = value => {
  value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);
};

export const setCurrentUser = createAction("SET_CURRENT_USER");

export const setToken = token => (dispatch, getState) => {
  console.log(token);
  console.log(getState());
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
  null
);
