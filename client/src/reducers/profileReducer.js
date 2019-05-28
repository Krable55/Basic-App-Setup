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
export const setProfile = createAction("SET_PROFILE");

export default handleActions(
  {
    [setProfile]: {
      next(state, { payload }) {
        return { ...payload };
      }
    }
  },
  null
);
