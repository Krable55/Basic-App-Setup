import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const toggleMenu = createAction("TOGGLE_MENU");
export const toggleAlertMenu = createAction("TOGGLE_ALERT_MENU");
export const toggleMessagesMenu = createAction("TOGGLE_MESSAGES_MENU");
export const toggleProfileMenu = createAction("TOGGLE_PROFILE_MENU");

export const fetchRequest = info => dispatch => {};

const menu = handleActions(
  {
    [toggleMenu]: (state, { payload }) => !state
  },
  false
);

const alerts = handleActions(
  {
    [toggleAlertMenu]: (state, { payload }) => !state
  },
  false
);
const messages = handleActions(
  {
    [toggleMessagesMenu]: (state, { payload }) => !state
  },
  false
);
const profile = handleActions(
  {
    [toggleProfileMenu]: (state, { payload }) => !state
  },
  false
);

// const requested = handleActions(
//   {
//     [submitRequest]() {
//       return true;
//     },
//     [submitResponse]() {
//       return false;
//     }
//   },
//   false
// );
// const errors = handleActions(
//   {
//     [submitResponse]: {
//       next() {
//         return null;
//       },
//       throw(
//         state,
//         {
//           payload: { message }
//         }
//       ) {
//         return { ...message };
//       }
//     }
//   },
//   null
// );

export default combineReducers({
  menu,
  alerts,
  profile,
  messages
});
