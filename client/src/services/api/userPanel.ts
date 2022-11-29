import { Dispatch } from "redux";
import { instance, cloudUri } from "./main";
import {
  updateUserDataSuccess,
  updateUserDataFailure,
} from "../actions/userActions";
import { IFormData, IUserPic } from "../interfaces/interfaces";
import { ImgToPreview } from "../types/types";

export const editData = async (
  newUserData: IFormData,
  currentMail: string,
  dispatch: Dispatch<any>,
  updateStatusHandler: any
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
        // userPic: newUserData.userPic,
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
  userPic: ImgToPreview
): Promise<string | void> => {
  try {
    let result = await instance
      .post("/logged/editUserPic", { userPic: userPic })
      .then((res) => {
        return res.data.public_id;
      })
      .catch((err) => console.log(err));
    return result;
  } catch (error) {
    console.error(`Request can't be executed`);
  }
};
