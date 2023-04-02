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
    })
    .catch((err: AxiosError) => {
      dispatch(commentsModalLoadingStatus(false));
      dispatch(fetchCommentsModalContent(null));
      alert(err.message);
    });
};

export const addComment = async (
  userId: string,
  commentContent: string,
  thoughtId: string
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
      console.error(`${err.response!.data}`);
      alert(`${err.response!.data}`);
    });
};

export const fetchCommentResponses = async (
  thoughtId: string,
  commentId: string,
  setNewResponses: Function,
  setLoading: Function
) => {
  await instance
    .get(`/${thoughtId}/comments/${commentId}/responses`)
    .then((res: AxiosResponse) => {
      console.log(res);
      setNewResponses(res.data.responses);
      setLoading(false);
    })
    .catch((err: AxiosError) => {
      alert(err.message);
      setLoading(false);
    });
};

export const addCommentResponse = async (
  userId: string,
  responseContent: string,
  commentId: string
): Promise<void> => {
  instance
    .post("/logged/newCommentResponse", {
      userId: userId,
      responseContent: responseContent,
      commentId: commentId,
    })
    .then((res: AxiosResponse) => {
      console.log(res.data);
    })
    .catch((err: AxiosError) => {
      alert(`${err.response!.data}`);
    });
};
