import { instance } from ".";
import { AxiosError, AxiosResponse } from "axios";

export const likeThought = async (
  id: string,
  thoughtId: string
): Promise<void> => {
  await instance
    .patch("/logged/likeThought", { userId: id, thoughtId: thoughtId })
    .then((res: AxiosResponse) => {
      console.log("Like added");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be added :(");
    });
};

export const unlikeThought = async (
  id: string,
  thoughtId: string
): Promise<void> => {
  await instance
    .patch("/logged/unlikeThought", { userId: id, thoughtId: thoughtId })
    .then((res: AxiosResponse) => {
      console.log("Like removed");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be removed :(");
    });
};

export const likeComment = async (
  userId: string,
  commentId: string
): Promise<void> => {
  await instance
    .patch("/logged/likeComment", { userId: userId, commentId: commentId })
    .then((res: AxiosResponse) => {
      console.log("Like added");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be added :(");
    });
};

export const unlikeComment = async (
  userId: string,
  commentId: string
): Promise<void> => {
  await instance
    .patch("/logged/unlikeComment", { userId: userId, commentId: commentId })
    .then((res: AxiosResponse) => {
      console.log("Like removed");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be removed :(");
    });
};

export const likeCommentResponse = async (
  userId: string,
  responseId: string
): Promise<void> => {
  await instance
    .patch("/logged/likeCommentResponse", {
      userId: userId,
      responseId: responseId,
    })
    .then((res: AxiosResponse) => {
      console.log("Like added");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be added :(");
    });
};

export const unlikeCommentResponse = async (
  userId: string,
  responseId: string
): Promise<void> => {
  await instance
    .patch("/logged/unlikeCommentResponse", {
      userId: userId,
      responseId: responseId,
    })
    .then((res: AxiosResponse) => {
      console.log("Like removed");
    })
    .catch((err: AxiosError) => {
      console.error("Like can't be removed :(");
    });
};
