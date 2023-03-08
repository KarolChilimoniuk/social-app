import { AnyAction } from "redux";
import {
  HAS_ACCOUNT_STATUS_TRUE,
  HAS_ACCOUNT_STATUS_FALSE,
  SET_ID_TO_FILTER_USER,
  FETCH_APP_USERS,
  HIDE_MODAL_HANDLER,
  FETCH_MODAL_CONTENT,
} from "../actions/actionTypes";
import { IAppMainDataState } from "../interfaces/interfaces";

const initialState: IAppMainDataState = {
  hasAccount: false,
  idToFilterUser: "",
  appUsers: [],
  modalHideStatus: true,
  modalLoadingStatus: false,
  modalContent: [],
};

const appReducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HAS_ACCOUNT_STATUS_TRUE:
      return { ...state, hasAccount: action.payloads };
    case HAS_ACCOUNT_STATUS_FALSE:
      return { ...state, hasAccount: action.payloads };
    case SET_ID_TO_FILTER_USER:
      return { ...state, idToFilterUser: action.payloads };
    case FETCH_APP_USERS:
      return {
        ...state,
        appUsers: action.payloads,
      };
    case HIDE_MODAL_HANDLER:
      return {
        ...state,
        modalHideStatus: action.payloads,
      };
    case FETCH_MODAL_CONTENT: {
      return { ...state, modalContent: action.payloads };
    }
    default:
      return { ...state };
  }
};

export default appReducers;
