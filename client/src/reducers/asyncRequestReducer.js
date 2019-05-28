import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setAuthToken } from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./authReducer";
import axios from "axios";

const submitRequest = createAction("SUBMIT_REQUEST");
const submitResponse = createAction("SUBMIT_RESPONSE");

export const fetchRequest = info => dispatch => {
  dispatch(submitRequest());
  const { type, url, data, callback } = info;
  axios[type](url, data)
    .then(res => {
      //If an auth token is recieved, save and set it to headers
      if (res.data.token) {
        const { token } = res.data;
        //Set token to local storage
        localStorage.setItem("jwtToken", token);
        //Set Auth Header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoded));
      }
      if (callback) callback(res.data);
      dispatch(submitResponse(res.data));
    })
    .catch(error => {
      console.log(error);
      //Create a custom error for all returned errors
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
        //returns a single message for one error and an object for multiple errors
        return typeof message === "object" ? { ...message } : message;
      }
    }
  },
  null
);

export default combineReducers({
  errors,
  requested,
  response
});
