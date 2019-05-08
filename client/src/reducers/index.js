import { combineReducers } from "redux";
import login from "./loginReducer";
import signUp from "./signUpReducer";

export default combineReducers({
  login,
  signUp
});
