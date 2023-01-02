import { Dispatch } from "redux";
import { instance } from "./main";
import {
  updateUserDataSuccess,
  updateUserDataFailure,
} from "../actions/userActions";
import { IFormData } from "../interfaces/interfaces";
import { ImgToPreview } from "../types/types";

export const editData = async (
  newUserData: IFormData,
  userId: string,
  dispatch: Dispatch<any>,
  updateStatusHandler: any
): Promise<void> => {
  try {
    await instance
      .post(`/logged/editProfile`, {
        userId: userId,
        userName: newUserData.userName,
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        password: newUserData.password,
        repeatedPassword: newUserData.repeatedPassword,
        birthDate: newUserData.birthDate,
        email: newUserData.email,
      })
      .then((response) => {
        dispatch(updateUserDataSuccess(response.data.userData));
        updateStatusHandler(true);
        alert("Data updated");
      })
      .catch((err) => {
        dispatch(updateUserDataFailure(err.response.data));
        updateStatusHandler(false);
        alert(`${err.response.data}`);
      });
  } catch (error) {
    console.error(`Request can't be executed`);
  }
};

export const editUserPic = async (
  userPic: ImgToPreview,
  userId: string,
  dispatch: Dispatch
): Promise<string | void> => {
  try {
    let result: string = await instance
      .post("/logged/editUserPic", { userPic: userPic, userId: userId })
      .then((response) => {
        dispatch(updateUserDataSuccess(response.data.userData));
        alert("Data updated");
        return response.data.userData.pic;
      })
      .catch((err) => {
        alert(`${err.response.data.message}`);
      });
    return result;
  } catch (error) {
    console.error(`Request can't be executed`);
  }
};
