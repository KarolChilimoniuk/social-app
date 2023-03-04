import { instance } from ".";
import { Dispatch } from "redux";
import { followUser, unfollowUser } from "../../actions/userActions";
import { AxiosError, AxiosResponse } from "axios";

export const follow = async (
  followerId: string,
  followedId: string,
  dispatch: Dispatch
): Promise<void> => {
  await instance
    .patch("/logged/follow", { followerId, followedId })
    .then((res) => {
      dispatch(followUser(res.data.listOfFollowed, res.data.thoughtsToShow));
    })
    .catch((err) => console.error(err.message));
};

export const unFollow = async (
  followerId: string,
  followedId: string,
  dispatch: Dispatch
): Promise<void> => {
  await instance
    .patch("/logged/unfollow", { followerId, followedId })
    .then((res: AxiosResponse) => {
      dispatch(followUser(res.data.listOfFollowed, res.data.thoughtsToShow));
    })
    .catch((err: AxiosError) => console.error(err.message));
};
