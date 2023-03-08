import {
  HAS_ACCOUNT_STATUS_FALSE,
  HAS_ACCOUNT_STATUS_TRUE,
  SET_ID_TO_FILTER_USER,
  FETCH_APP_USERS,
  HIDE_MODAL_HANDLER,
  FETCH_MODAL_CONTENT,
  MODAL_LOADIG_STATUS,
} from "./actionTypes";
import {
  FetchAppUsersAction,
  HasAccountAction,
  ModalAction,
  SetIdToFilterUserAction,
} from "../types/types";
import { IAppUsers } from "../interfaces/interfaces";

export const hasAccountTrue = (): HasAccountAction => {
  return {
    type: HAS_ACCOUNT_STATUS_TRUE,
    payloads: true,
  };
};

export const hasAccountFalse = (): HasAccountAction => {
  return {
    type: HAS_ACCOUNT_STATUS_FALSE,
    payloads: false,
  };
};

export const setIdToFilterUser = (id: string): SetIdToFilterUserAction => {
  return {
    type: SET_ID_TO_FILTER_USER,
    payloads: id,
  };
};

export const fetchAppUsers = (users: Array<IAppUsers>): FetchAppUsersAction => {
  return {
    type: FETCH_APP_USERS,
    payloads: users,
  };
};

export const hideModalHandler = (status: boolean): ModalAction => {
  return {
    type: HIDE_MODAL_HANDLER,
    payloads: status,
  };
};

export const modalLoadingStatus = (status: boolean): ModalAction => {
  return {
    type: MODAL_LOADIG_STATUS,
    payloads: status,
  };
};

export const fetchModalContent = (content: Array<IAppUsers>): ModalAction => {
  return {
    type: FETCH_MODAL_CONTENT,
    payloads: content,
  };
};
