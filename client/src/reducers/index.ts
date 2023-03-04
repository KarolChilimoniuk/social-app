import { combineReducers } from "redux";
import appReducers from "./appDataReducers";
import userReducers from "./userDataReducers";

const rootReducer = combineReducers({
  appData: appReducers,
  userData: userReducers,
});

export default rootReducer;
