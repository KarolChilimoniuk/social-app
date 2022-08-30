import { combineReducers } from "redux";
import appReducers from "./appReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  appData: appReducers,
  userData: userReducers,
});

export default rootReducer;
