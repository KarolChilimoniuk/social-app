import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import {
  userLogin,
  loginFailure,
  signupSuccess,
  signupFailure,
  logout,
} from "../actions/userActions";
import { IFormData } from "../interfaces/interfaces";

const instance = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: true,
});

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
        console.log(response.data);
        dispatch(signupSuccess(""));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
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
        console.log(response.data.message);
        dispatch(userLogin(response.data.userData));
        navigate("/logged");
      })
      .catch((err) => {
        console.log(err.response.data);
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
        console.log(response.data.message);
        dispatch(userLogin(response.data.userData));
        navigate("/logged");
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(loginFailure(err.response.data));
      });
  } catch (err) {
    console.log(err);
  }
};

export const tokenChecking = async (dispatch: Dispatch<any>) => {
  await instance
    .get("/auth/tokenChecking")
    .then((response) => {
      console.log(response);
      dispatch(userLogin(response.data.userData));
    })
    .catch((err) => console.log("token not found"));
};

export const logoutUser = async (
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
) => {
  await instance
    .get("/auth/logout")
    .then((response) => {
      console.log(response);
      dispatch(logout());
      navigate("/");
    })
    .catch((err) => console.log(err.message));
};
