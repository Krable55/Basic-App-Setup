import { createAction, handleActions } from "redux-actions";
import { setAuthToken } from "../../../utils/setAuthToken";

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
