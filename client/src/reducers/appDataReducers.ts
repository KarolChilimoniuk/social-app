import { AnyAction } from "redux";
import {
  HAS_ACCOUNT_STATUS_TRUE,
  HAS_ACCOUNT_STATUS_FALSE,
  SET_ID_TO_FILTER_USER,
  FETCH_APP_USERS,
  HIDE_STATS_MODAL_HANDLER,
  FETCH_STATS_MODAL_CONTENT,
  STATS_MODAL_LOADIG_STATUS,
  HIDE_COMMENTS_MODAL_HANDLER,
  FETCH_COMMENTS_MODAL_CONTENT,
  COMMENTS_MODAL_LOADIG_STATUS,
} from "../actions/actionTypes";
import { IAppMainDataState } from "../interfaces/interfaces";

const initialState: IAppMainDataState = {
  hasAccount: false,
  idToFilterUser: "",
  appUsers: [],
  statsModalHideStatus: true,
  statsModalLoadingStatus: false,
  statsModalContent: null,
  commentsModalHideStatus: true,
  commentsModalLoadingStatus: false,
  commentsModalContent: null,
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
    case HIDE_STATS_MODAL_HANDLER:
      return {
        ...state,
        statsModalHideStatus: action.payloads,
      };
    case FETCH_STATS_MODAL_CONTENT: {
      return { ...state, statsModalContent: action.payloads };
    }
    case STATS_MODAL_LOADIG_STATUS: {
      return {
        ...state,
        statsModalLoadingStatus: action.payloads,
      };
    }
    case HIDE_COMMENTS_MODAL_HANDLER:
      return {
        ...state,
        commentsModalHideStatus: action.payloads,
      };
    case FETCH_COMMENTS_MODAL_CONTENT: {
      return { ...state, commentsModalContent: action.payloads };
    }
    case COMMENTS_MODAL_LOADIG_STATUS: {
      return {
        ...state,
        commentsModalLoadingStatus: action.payloads,
      };
    }
    default:
      return { ...state };
  }
};

export default appReducers;
