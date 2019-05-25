import { createAction, handleActions } from "redux-actions";
import login from "./loginReducer";
import signUp from "./signUpReducer";
import { combineReducers } from "redux";
import axios from "axios";

const submitRequest = createAction("SUBMIT_REQUEST");
const submitResponse = createAction("SUBMIT_RESPONSE");

export const fetchRequest = req => dispatch => {
  dispatch(submitRequest());
  req
    .then(response => dispatch(submitResponse(response.data)))
    .catch(error => {
      //Create a custom error for all returned errors
      // for (var key in error.response.data) {
      class CustomError extends Error {
        constructor(...params) {
          super(...params);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
          }
          this.name = "errors";
          this.message = error.response.data;
        }
      }
      dispatch(submitResponse(new CustomError()));
      // }
    });
};
const requested = handleActions(
  {
    [submitRequest]() {
      return true;
    },
    [submitResponse]() {
      return false;
    }
  },
  false
);

const response = handleActions(
  {
    [submitResponse]: {
      next(state, { payload }) {
        return payload;
      }
    }
  },
  null
);
const errors = handleActions(
  {
    [submitResponse]: {
      next() {
        return null;
      },
      throw(
        state,
        {
          payload: { message }
        }
      ) {
        return { ...message };
      }
    }
  },
  null
);

export default combineReducers({
  login,
  signUp,
  errors,
  requested,
  response
});
