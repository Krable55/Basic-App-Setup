import { createAction, handleActions } from "redux-actions";

export const submitAction = createAction("SUBMIT");

const INITIAL_STATE = {};

export default handleAction(
  {
    [submitAction]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  INITIAL_STATE
);
