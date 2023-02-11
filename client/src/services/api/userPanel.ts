import { Dispatch } from "redux";
import { instance } from ".";
import { AxiosError, AxiosResponse } from "axios";
import {
  updateUserInfoSuccess,
  updateUserInfoFailure,
} from "../../actions/userActions";
import { IFormData } from "../../interfaces/interfaces";
import { ImgToPreview } from "../../types/types";

export const editData = async (
  newUserData: IFormData,
  userId: string,
  dispatch: Dispatch,
  updateStatusHandler: any
): Promise<void> => {
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
    .then((res: AxiosResponse) => {
      dispatch(updateUserInfoSuccess(res.data.userData));
      updateStatusHandler(true);
      alert("Data updated");
    })
    .catch((err: AxiosError) => {
      dispatch(updateUserInfoFailure(err.response!.data));
      updateStatusHandler(false);
      alert(`${err.response!.data}`);
    });
};

export const editUserPic = async (
  userPic: ImgToPreview,
  userId: string,
  dispatch: Dispatch
): Promise<string | void> => {
  let result: string = await instance
    .post("/logged/editUserPic", { userPic: userPic, userId: userId })
    .then((res: AxiosResponse) => {
      dispatch(updateUserInfoSuccess(res.data.userData));
      alert("Data updated");
      return res.data.userData.pic;
    })
    .catch((err) => {
      alert(`${err.response.data.message}`);
    });
  return result;
};
