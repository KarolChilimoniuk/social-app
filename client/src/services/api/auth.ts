import axios from "axios";
import { isAwaitExpression } from "typescript";

const instance = axios.create({ baseURL: `http://localhost:4000` });

export const signUp = async (userData: any) => {
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
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.response.data));
  } catch (err) {
    console.error(`Request can't be executed`);
  }
};

export const login = async (userData: any) => {
  try {
    await instance
      .post(`/auth/login`, {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => console.log(response.data.userData))
      .catch((err) => console.log(err.response.data));
  } catch (err) {
    console.error(`Request can't be executed`);
  }
};
