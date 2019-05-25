import { combineReducers } from "redux";
// import login from "./loginReducer";
// import signUp from "./signUpReducer";
import auth from "./asyncRequestReducer";

export default combineReducers({
  auth
});
