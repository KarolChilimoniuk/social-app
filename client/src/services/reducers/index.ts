import {combineReducers} from "redux";
import userReducers from "./userReducers";

const rootReducer = combineReducers({userData: userReducers});

export default rootReducer;