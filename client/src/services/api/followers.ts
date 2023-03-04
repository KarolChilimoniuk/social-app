import { instance } from ".";
import { Dispatch } from "redux";
import { followUser, unfollowUser } from "../../actions/userActions";

export const follow = async (
  followerId: string,
  followedId: string,
  dispatch: Dispatch
) => {
  await instance
    .patch("/logged/follow", { followerId, followedId })
    .then((res) => {
      // dispatch(followUser(res.data.listOfFollowed, res.data.allPostsToShow));
      dispatch(followUser(res.data.listOfFollowed));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

export const unFollow = async (
  followerId: string,
  followedId: string,
  dispatch: Dispatch
) => {
  await instance
    .patch("/logged/unfollow", { followerId, followedId })
    .then((res) => {
      // dispatch(followUser(res.data.listOfFollowed, res.data.allPostsToShow));
      dispatch(followUser(res.data.listOfFollowed));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
