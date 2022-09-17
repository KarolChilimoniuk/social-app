import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../types/types";

export const loginSuccess = (userData: any, error: any) => {
  return {
    type: "LOGIN_SUCCESS",
    payloads: userData,
    error,
  };
};

export const loginFailure = (error: any) => {
  return {
    type: "LOGIN_FAILURE",
    payloads: error,
  };
};

export const signupSuccess = (error: any) => {
  return {
    type: "SIGNUP_SUCCESS",
    payloads: error,
  };
};

export const signupFailure = (error: any) => {
  return {
    type: "SIGNUP_FAILURE",
    payloads: error,
  };
};

export const clearAuthError = () => {
  return {
    type: "CLEAR_AUTH_ERROR",
  };
};

export const userLogin = (
  userData: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(loginSuccess(userData, ""));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUserDataSuccess = (userData: any) => {
  return {
    type: "UPDATE_USER_DATA_SUCCESS",
    payloads: userData,
  };
};

export const updateUserDataFailure = (error: any) => {
  return {
    type: "UPDATE_USER_DATA_FAILURE",
    payloads: error,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
