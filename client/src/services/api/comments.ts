import { instance } from ".";
import { Dispatch } from "redux";
import { AxiosError, AxiosResponse } from "axios";
import {
  commentsModalLoadingStatus,
  fetchCommentsModalContent,
} from "../../actions/appDataAction";

export const fetchComments = async (id: string, dispatch: Dispatch) => {
  await instance
    .get(`/${id}/comments`)
    .then((res: AxiosResponse) => {
      dispatch(commentsModalLoadingStatus(false));
      dispatch(fetchCommentsModalContent(res.data));
      console.log(res.data);
    })
    .catch((err: AxiosError) => {
      dispatch(commentsModalLoadingStatus(false));
      dispatch(fetchCommentsModalContent(null));
      console.log(err.message);
      alert(err.message);
    });
};

export const addComment = async (
  userId: string,
  commentContent: string,
  thoughtId: string
  // dispatch: Dispatch
): Promise<void> => {
  instance
    .post("/logged/newComment", {
      userId: userId,
      commentContent: commentContent,
      thoughtId: thoughtId,
    })
    .then((res: AxiosResponse) => {
      alert(res.data);
    })
    .catch((err: AxiosError) => {
      console.error("Nie działa :(");
      alert(`${err.response!.data}`);
    });
};
