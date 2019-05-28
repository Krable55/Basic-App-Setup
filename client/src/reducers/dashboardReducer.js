import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";

export const toggleMenu = createAction("TOGGLE_MENU");
// export const toggleAlertMenu = createAction("TOGGLE_ALERT_MENU");
// export const toggleMessagesMenu = createAction("TOGGLE_MESSAGES_MENU");
// export const toggleProfileMenu = createAction("TOGGLE_PROFILE_MENU");

export const fetchRequest = info => dispatch => {};

const menu = handleActions(
  {
    [toggleMenu]: (state, { payload }) => !state
  },
  false
);

export default combineReducers({
  menu
});
