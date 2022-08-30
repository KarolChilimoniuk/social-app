import { AnyAction } from "redux";
import { IMainInitState } from "../interfaces/interfaces";

const initialState: IMainInitState = {
  hasAccount: false,
};

const appReducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "HAS_ACCOUNT_STATUS_TRUE":
      return { ...state, hasAccount: action.payloads };
    case "HAS_ACCOUNT_STATUS_FALSE":
      return { ...state, hasAccount: action.payloads };
    default:
      return { ...state };
  }
};

export default appReducers;
