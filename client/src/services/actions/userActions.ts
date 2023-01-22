import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import _ from "lodash";
import { RootState } from "../types/types";

export const loginSuccess = (userData: any, error: any) => {
  return {
    type: "LOGIN_SUCCESS",
    payloads: userData,
    error,
  };
};

export const loginFailure = (error: any) => {
  return {
    type: "LOGIN_FAILURE",
    payloads: error,
  };
};

export const signupSuccess = (error: any) => {
  return {
    type: "SIGNUP_SUCCESS",
    payloads: error,
  };
};

export const signupFailure = (error: any) => {
  return {
    type: "SIGNUP_FAILURE",
    payloads: error,
  };
};

export const clearAuthError = () => {
  return {
    type: "CLEAR_AUTH_ERROR",
  };
};

export const userLogin = (
  userData: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(loginSuccess(userData, ""));
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(err));
    }
  };
};

export const updateUserDataSuccess = (userData: any) => {
  return {
    type: "UPDATE_USER_DATA_SUCCESS",
    payloads: userData,
  };
};

export const updateUserDataFailure = (error: any) => {
  return {
    type: "UPDATE_USER_DATA_FAILURE",
    payloads: error,
  };
};

export const updateUserPostsSuccess = (posts: any) => {
  return {
    type: "UPDATE_USER_POSTS_SUCCESS",
    payloads: posts,
  };
};

export const updateUserPostsFailure = (error: any) => {
  return {
    type: "UPDATE_USER_POSTS_FAILURE",
    payloads: error,
  };
};

export const updateUserPostLikesSuccess = (
  allPostsToShow: any,
  userPosts: any
) => {
  return {
    type: "UPDATE_USER_POST_LIKES_SUCCESS",
    payloads: { allPostsToShow: allPostsToShow, userPosts: userPosts },
  };
};

export const updateUserPostLikesFailure = (error: any) => {
  return {
    type: "UPDATE_USER_POST_LIKES_FAILURE",
    payloads: error,
  };
};

export const updateUserPostLikes = (
  updatedPost: any,
  postsToShow: any,
  userPosts: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    try {
      const allPosts = _.cloneDeep(postsToShow);
      const onlyUserPosts = _.cloneDeep(userPosts);
      allPosts.forEach((post: any) => {
        if (post._id === updatedPost._id) {
          post.likes = updatedPost.likes;
        }
      });
      onlyUserPosts.forEach((post: any) => {
        if (post._id === updatedPost._id) {
          post.likes = updatedPost.likes;
        }
      });
      dispatch(updateUserPostLikesSuccess(allPosts, onlyUserPosts));
    } catch (err) {
      dispatch(updateUserPostLikesFailure(err));
      console.error(err);
    }
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
