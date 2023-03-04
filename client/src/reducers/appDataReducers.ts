import { AnyAction } from "redux";
import { IAppMainDataState } from "../interfaces/interfaces";

const initialState: IAppMainDataState = {
  hasAccount: false,
  idToFilterUser: "",
  appUsers: [],
};

const appReducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "HAS_ACCOUNT_STATUS_TRUE":
      return { ...state, hasAccount: action.payloads };
    case "HAS_ACCOUNT_STATUS_FALSE":
      return { ...state, hasAccount: action.payloads };
    case "SET_ID_TO_FILTER_USER":
      return { ...state, idToFilterUser: action.payloads };
    case "FETCH_APP_USERS":
      return {
        ...state,
        appUsers: action.payloads,
      };
    default:
      return { ...state };
  }
};

export default appReducers;
