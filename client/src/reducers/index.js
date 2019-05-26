import { combineReducers } from "redux";
import login from "./loginReducer";
import signUp from "./signUpReducer";
import request from "./asyncRequestReducer";
import user from "./authReducer";

export default combineReducers({
  request,
  login,
  user,
  signUp
});
