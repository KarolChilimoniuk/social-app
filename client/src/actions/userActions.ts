import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import _ from "lodash";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_ERROR,
  UPDATE_USER_INFO_FAILURE,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_POSTS_FAILURE,
  UPDATE_USER_POSTS_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import { IThought, IUserInfo } from "../interfaces/interfaces";
import {
  LoginAction,
  SignupAction,
  ClearAuthAction,
  UpdateUserInfoAction,
  UpdateUserPostsAction,
  LogoutAction,
} from "../types/types";
import { RootState } from "../types/types";

export const loginSuccess = (userData: IUserInfo): LoginAction => {
  return {
    type: LOGIN_SUCCESS,
    payloads: userData,
  };
};

export const loginFailure = (error: string | unknown): LoginAction => {
  return {
    type: LOGIN_FAILURE,
    payloads: error,
  };
};

export const signupSuccess = (error: string): SignupAction => {
  return {
    type: SIGNUP_SUCCESS,
    payloads: error,
  };
};

export const signupFailure = (error: string | unknown): SignupAction => {
  return {
    type: SIGNUP_FAILURE,
    payloads: error,
  };
};

export const clearAuthError = (): ClearAuthAction => {
  return {
    type: CLEAR_AUTH_ERROR,
  };
};

export const userLogin = (
  userData: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(loginSuccess(userData));
    } catch (err) {
      console.log(typeof err);
      dispatch(loginFailure(err));
    }
  };
};

export const updateUserInfoSuccess = (
  userData: IUserInfo
): UpdateUserInfoAction => {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    payloads: userData,
  };
};

export const updateUserInfoFailure = (
  error: string | unknown
): UpdateUserInfoAction => {
  return {
    type: UPDATE_USER_INFO_FAILURE,
    payloads: error,
  };
};

export const updateUserPostsSuccess = (
  posts: Array<IThought>
): UpdateUserPostsAction => {
  return {
    type: UPDATE_USER_POSTS_SUCCESS,
    payloads: posts,
  };
};

export const updateUserPostsFailure = (
  error: string | unknown
): UpdateUserPostsAction => {
  return {
    type: UPDATE_USER_POSTS_FAILURE,
    payloads: error,
  };
};

export const logout = (): LogoutAction => {
  return {
    type: LOGOUT,
  };
};
