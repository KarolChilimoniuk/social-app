import { Dispatch } from "redux";
import { instance } from "./main";
import {
  updateUserPostsSuccess,
  updateUserPostsFailure,
  updateUserPostLikes,
} from "../actions/userActions";
import { IThought } from "../interfaces/interfaces";

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

export const addLike = async (
  userId: string,
  thoughtId: string,
  postsToShow: Array<IThought>,
  userPosts: Array<IThought>,
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    instance
      .patch("/logged/addLike", { userId: userId, thoughtId: thoughtId })
      .then((response) => {
        dispatch(
          updateUserPostLikes(response.data.thoughtData, postsToShow, userPosts)
        );
        console.log("add");
      })
      .catch((err) => {
        alert(`${err.response.data.message}`);
      });
  } catch (error) {
    console.error("Request cant't be executed");
  }
};

export const removeLike = async (
  userId: string,
  thoughtId: string,
  postsToShow: Array<IThought>,
  userPosts: Array<IThought>,
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    instance
      .patch("/logged/removeLike", { userId: userId, thoughtId: thoughtId })
      .then((response) => {
        dispatch(
          updateUserPostLikes(response.data.thoughtData, postsToShow, userPosts)
        );
        console.log("remove");
      })
      .catch((err) => {
        alert(`${err.response.data.message}`);
      });
  } catch (error) {
    console.error("Request cant't be executed");
  }
};
