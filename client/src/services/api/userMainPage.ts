import { Dispatch } from "redux";
import { instance } from ".";
import { AxiosError, AxiosResponse } from "axios";
import {
  updateUserPostsSuccess,
  updateUserPostsFailure,
} from "../../actions/userActions";

export const addThought = async (
  email: string,
  thoughtContent: string,
  dispatch: Dispatch
): Promise<void> => {
  instance
    .post("/logged/newThought", {
      email: email,
      thoughtContent: thoughtContent,
    })
    .then((res: AxiosResponse) => {
      dispatch(updateUserPostsSuccess(res.data.userData));
    })
    .catch((err: AxiosError) => {
      dispatch(updateUserPostsFailure(err.response!.data));
      alert(`${err.response!.data}`);
    });
};
