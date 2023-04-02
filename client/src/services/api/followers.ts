import { instance } from ".";
import { Dispatch } from "redux";
import { followUser, unfollowUser } from "../../actions/userActions";
import {
  fetchStatsModalContent,
  statsModalLoadingStatus,
} from "../../actions/appDataAction";
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
      dispatch(unfollowUser(res.data.listOfFollowed, res.data.thoughtsToShow));
    })
    .catch((err: AxiosError) => console.error(err.message));
};

export const fetchFollowed = async (
  userId: string,
  dispatch: Dispatch
): Promise<void> => {
  await instance
    .get(`/${userId}/followed`)
    .then((res: AxiosResponse) => {
      dispatch(fetchStatsModalContent(res.data.listOfFollowed));
      dispatch(statsModalLoadingStatus(false));
    })
    .catch((err: AxiosError) => {
      console.error(err.message);
    });
};

export const fetchFollowers = async (
  userId: string,
  dispatch: Dispatch
): Promise<void> => {
  await instance
    .get(`/${userId}/followers`)
    .then((res: AxiosResponse) => {
      dispatch(fetchStatsModalContent(res.data.listOfFollowers));
      dispatch(statsModalLoadingStatus(false));
    })
    .catch((err: AxiosError) => {
      console.error(err.message);
    });
};
