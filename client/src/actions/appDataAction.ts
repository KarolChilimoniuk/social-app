import {
  HAS_ACCOUNT_STATUS_FALSE,
  HAS_ACCOUNT_STATUS_TRUE,
  SET_ID_TO_FILTER_USER,
  FETCH_APP_USERS,
} from "./actionTypes";
import { HasAccountAction, SetIdToFilterUserAction } from "../types/types";
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

export const fetchAppUsers = (users: Array<IAppUsers>) => {
  return {
    type: FETCH_APP_USERS,
    payloads: users,
  };
};
