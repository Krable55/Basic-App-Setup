import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const toggleMenu = createAction("TOGGLE_MENU");

export const fetchRequest = info => dispatch => {};

const menu = handleActions(
  {
    [toggleMenu]: (state, { payload }) => !state
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
  menu
});
