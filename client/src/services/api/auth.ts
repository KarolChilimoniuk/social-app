import axios from "axios";
import {
  userLogin,
  loginFailure,
  signupSuccess,
  signupFailure,
} from "../actions/userActions";

const instance = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: true,
});

export const signUp = async (
  userData: any,
  dispatch: any,
  navigate: any
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
  userData: any,
  dispatch: any,
  navigate: any
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
        navigate("/");
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
  dispatch: any,
  navigate: any
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
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(loginFailure(err.response.data));
      });
  } catch (err) {
    console.log(err);
  }
};
