import { Dispatch } from "redux";

export const followHandler = (
  userToShowFollowers: Array<string> | null,
  loggedUserId: string,
  listOfFollowersHandler: Function,
  followersNumberHandler: Function,
  follow: Function,
  userToShowId: string,
  dispatch: Dispatch
): void => {
  const newFollowersList = [...userToShowFollowers!];
  newFollowersList.push(loggedUserId);
  listOfFollowersHandler(newFollowersList);
  followersNumberHandler(newFollowersList.length);
  follow(loggedUserId, userToShowId, dispatch);
};

export const unfollowHandler = (
  userToShowFollowers: Array<string> | null,
  loggedUserId: string,
  listOfFollowersHandler: Function,
  followersNumberHandler: Function,
  unFollow: Function,
  userToShowId: string,
  dispatch: Dispatch
): void => {
  const newFollowersList = userToShowFollowers?.filter(
    (followerId) => followerId !== loggedUserId
  );
  listOfFollowersHandler(newFollowersList);
  followersNumberHandler(newFollowersList!.length);
  unFollow(loggedUserId, userToShowId, dispatch);
};
