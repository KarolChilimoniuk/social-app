import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../types/types";

export const loginSuccess = (userData: any) => {
  return {
    type: "LOGIN_SUCCESS",
    payloads: userData,
  };
};

export const login = (
  userData: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(loginSuccess(userData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
