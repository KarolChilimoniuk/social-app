import { Dispatch } from "redux";
import { instance } from "./main";
import {
  updateUserDataSuccess,
  updateUserDataFailure,
} from "../actions/userActions";
import { IFormData } from "../interfaces/interfaces";

export const editData = async (
  newUserData: IFormData,
  currentMail: string,
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    await instance
      .post(`/logged/editProfile`, {
        currentMail: currentMail,
        userName: newUserData.userName,
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        password: newUserData.password,
        repeatedPassword: newUserData.repeatedPassword,
        birthDate: newUserData.birthDate,
        email: newUserData.email,
        userPic: newUserData.userPic,
      })
      .then((response) => {
        dispatch(updateUserDataSuccess(response.data.userData));
      })
      .catch((err) => {
        dispatch(updateUserDataFailure(err.response.data));
      });
  } catch (error) {
    console.error(`Request can't be executed`);
  }
};
