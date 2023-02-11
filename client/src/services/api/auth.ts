import { NavigateFunction } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  clearAuthError,
  userLogin,
  loginFailure,
  signupSuccess,
  signupFailure,
  logout,
} from "../../actions/userActions";
import { instance } from ".";
import { IFormData } from "../../interfaces/interfaces";

export const signUp = async (
  userData: IFormData,
  dispatch: Dispatch,
  navigate: NavigateFunction
): Promise<void> => {
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
    .then((res: AxiosResponse) => {
      dispatch(signupSuccess(""));
      dispatch(clearAuthError());
      alert("User registered");
      navigate("/");
    })
    .catch((err: AxiosError) => {
      dispatch(signupFailure(err.response?.data));
    });
};

export const login = async (
  userData: IFormData,
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
): Promise<void> => {
  await instance
    .post(`/auth/login`, {
      email: userData.email,
      password: userData.password,
    })
    .then((res: AxiosResponse) => {
      dispatch(userLogin(res.data.userData));
      console.log(userData);
      navigate("/logged");
    })
    .catch((err: AxiosError) => {
      console.log(err);
      dispatch(loginFailure(err.response?.data));
    });
};

export const loginByGoogle = async (
  googleData: any,
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
): Promise<void> => {
  await instance
    .post(`/auth/login/google`, {
      clientId: googleData.clientId,
      credential: googleData.credential,
    })
    .then((res: AxiosResponse) => {
      dispatch(userLogin(res.data.userData));
      navigate("/logged");
    })
    .catch((err: AxiosError) => {
      dispatch(loginFailure(err.response?.data));
    });
};

export const tokenChecking = async (dispatch: Dispatch<any>): Promise<void> => {
  await instance
    .get("/auth/tokenChecking")
    .then((res: AxiosResponse) => {
      console.log(res.data.userData);
      dispatch(userLogin(res.data.userData));
    })
    .catch((err: AxiosError) => console.error("token is not found"));
};

export const logoutUser = async (
  dispatch: Dispatch,
  navigate: NavigateFunction
): Promise<void> => {
  await instance
    .get("/auth/logout")
    .then((res: AxiosResponse) => {
      dispatch(logout());
      navigate("/");
    })
    .catch((err: AxiosError) => console.error(err.message));
};
