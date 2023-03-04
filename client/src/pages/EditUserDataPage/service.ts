import { Dispatch } from "redux";
import { ImgToPreview, UserPic } from "../../types/types";
import { IFormData } from "../../interfaces/interfaces";

export const onChangeTextHandler = (
  e: React.ChangeEvent,
  formData: IFormData,
  newFormData: Function
): void => {
  const target = e.target as HTMLInputElement;
  newFormData({ ...formData, [target.name]: target.value });
};

export const textSubmitHandler = async (
  e: React.SyntheticEvent,
  editData: Function,
  formData: IFormData,
  loggedUserId: string,
  dispatch: Dispatch,
  setUpdateStatus: Function
): Promise<void> => {
  e.preventDefault();
  await editData(formData, loggedUserId, dispatch, setUpdateStatus);
};

export const setPreviewFromFileInput = (
  userPic: UserPic,
  setImagePreview: Function
) => {
  const reader = new FileReader();
  reader.readAsDataURL(userPic!);
  reader.onloadend = () => {
    setImagePreview(reader.result);
  };
};

export const onChangePic = (
  e: React.ChangeEvent,
  setImagePreview: Function
): void => {
  const target = e.currentTarget as HTMLInputElement;
  const file: UserPic = target.files![0];
  setPreviewFromFileInput(file, setImagePreview);
};

export const imgSubmitHandler = async (
  e: React.SyntheticEvent,
  editUserPic: Function,
  imgToPreview: ImgToPreview,
  loggedUserId: string,
  dispatch: Dispatch,
  setUploadedImg: Function
): Promise<void> => {
  e.preventDefault();
  const uploadedImageData = await editUserPic(
    imgToPreview,
    loggedUserId,
    dispatch
  );
};
