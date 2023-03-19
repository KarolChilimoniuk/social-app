import {
  HAS_ACCOUNT_STATUS_FALSE,
  HAS_ACCOUNT_STATUS_TRUE,
  SET_ID_TO_FILTER_USER,
  FETCH_APP_USERS,
  HIDE_STATS_MODAL_HANDLER,
  FETCH_STATS_MODAL_CONTENT,
  STATS_MODAL_LOADIG_STATUS,
  HIDE_COMMENTS_MODAL_HANDLER,
  COMMENTS_MODAL_LOADIG_STATUS,
  FETCH_COMMENTS_MODAL_CONTENT,
} from "./actionTypes";
import {
  FetchAppUsersAction,
  HasAccountAction,
  StatsModalAction,
  SetIdToFilterUserAction,
  CommentsModalAction,
} from "../types/types";
import { IAppUsers, IPostWithCommentsContent } from "../interfaces/interfaces";

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

export const hideStatsModalHandler = (status: boolean): StatsModalAction => {
  return {
    type: HIDE_STATS_MODAL_HANDLER,
    payloads: status,
  };
};

export const statsModalLoadingStatus = (status: boolean): StatsModalAction => {
  return {
    type: STATS_MODAL_LOADIG_STATUS,
    payloads: status,
  };
};

export const fetchStatsModalContent = (
  content: Array<IAppUsers>
): StatsModalAction => {
  return {
    type: FETCH_STATS_MODAL_CONTENT,
    payloads: content,
  };
};

export const hideCommentsModalHandler = (
  status: boolean
): CommentsModalAction => {
  return {
    type: HIDE_COMMENTS_MODAL_HANDLER,
    payloads: status,
  };
};

export const fetchCommentsModalContent = (
  content: IPostWithCommentsContent | null
): CommentsModalAction => {
  return {
    type: FETCH_COMMENTS_MODAL_CONTENT,
    payloads: content,
  };
};

export const commentsModalLoadingStatus = (
  status: boolean
): CommentsModalAction => {
  return {
    type: COMMENTS_MODAL_LOADIG_STATUS,
    payloads: status,
  };
};
