import { combineReducers } from "redux";
import login from "./loginReducer";
import signUp from "./signUpReducer";
import request from "./asyncRequestReducer";
import user from "./authReducer";
import dashboard from "./dashboardReducer";
import profile from "./profileReducer";

export default combineReducers({
  request,
  login,
  user,
  profile,
  dashboard,
  signUp
});
