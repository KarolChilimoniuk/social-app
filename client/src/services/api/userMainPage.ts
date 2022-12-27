import { Dispatch } from "redux";
import { instance } from "./main";
import {
  updateUserPostsSuccess,
  updateUserPostsFailure,
} from "../actions/userActions";

export const addThought = async (
  email: string,
  thoughtContent: string,
  dispatch: Dispatch
): Promise<void> => {
  try {
    instance
      .post("/logged/newThought", {
        email: email,
        thoughtContent: thoughtContent,
      })
      .then((response) => {
        dispatch(updateUserPostsSuccess(response.data.userData));
      })
      .catch((err) => {
        dispatch(updateUserPostsFailure(err.response.data));
        alert(`${err.response.data}`);
      });
  } catch (error) {
    console.log("Request can't be executed");
  }
};
