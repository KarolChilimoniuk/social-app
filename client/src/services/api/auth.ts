import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import {
  clearAuthError,
  userLogin,
  loginFailure,
  signupSuccess,
  signupFailure,
  logout,
} from "../actions/userActions";
import { instance } from "./main";
import { IFormData } from "../interfaces/interfaces";

export const signUp = async (
  userData: IFormData,
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    await instance
      .post(`/auth/signUp`, {
        userName: userData.userName,
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthDate: userData.birthDate,
        password: userData.password,
        email: userData.email,
        repeatedPassword: userData.repeatedPassword,
      })
      .then((response) => {
        dispatch(signupSuccess(""));
        dispatch(clearAuthError());
        alert("User registered");
        navigate("/");
      })
      .catch((err) => {
        dispatch(signupFailure(err.response.data));
      });
  } catch (err) {
    console.error(`Request can't be executed`);
  }
};

export const login = async (
  userData: IFormData,
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    await instance
      .post(`/auth/login`, {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        dispatch(userLogin(response.data.userData));
        navigate("/logged");
      })
      .catch((err) => {
        dispatch(loginFailure(err.response.data));
      });
  } catch (err) {
    console.error(`Request can't be executed`);
  }
};

export const loginByGoogle = async (
  googleData: any,
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
): Promise<void> => {
  try {
    await instance
      .post(`/auth/login/google`, {
        clientId: googleData.clientId,
        credential: googleData.credential,
      })
      .then((response) => {
        dispatch(userLogin(response.data.userData));
        navigate("/logged");
      })
      .catch((err) => {
        dispatch(loginFailure(err.response.data));
      });
  } catch (err) {
    console.error(`Request can't be executed`);
  }
};

export const tokenChecking = async (dispatch: Dispatch<any>): Promise<void> => {
  await instance
    .get("/auth/tokenChecking")
    .then((response) => {
      console.log(response.data.userData);
      dispatch(userLogin(response.data.userData));
    })
    .catch((err) => console.log("token not found"));
};

export const logoutUser = async (
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
): Promise<void> => {
  await instance
    .get("/auth/logout")
    .then((response) => {
      dispatch(logout());
      navigate("/");
    })
    .catch((err) => console.log(err.message));
};
