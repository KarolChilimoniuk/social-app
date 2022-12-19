import { Dispatch } from "redux";
import { instance, cloudUri } from "./main";
import {
  updateUserDataSuccess,
  updateUserDataFailure,
} from "../actions/userActions";
import { IFormData, IUserPic } from "../interfaces/interfaces";
import { ImgToPreview } from "../types/types";

export const addThought = async (
  email: string,
  thoughtContent: string
): Promise<void> => {
  try {
    instance.post("/logged/newThought", {
      email: email,
      textContent: thoughtContent,
    });
  } catch (error) {
    console.log("Request can't be executed");
  }
};
