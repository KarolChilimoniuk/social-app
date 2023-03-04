import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { FollowUnfollowProps } from "../../types/types";
import { follow, unFollow } from "../../services/api/followers";
import { IRootState } from "../../interfaces/interfaces";
import { FollowUnfollowButton } from "./FollowUnfollow.style";

const FollowUnfollow = ({
  userToShowId,
  userToShowFollowers,
  followersNumberHandler,
}: FollowUnfollowProps): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  const loggedUserData = useSelector((state: IRootState) => state.userData);

  const [followers, setFollowers] = useState<null | Array<string>>(
    userToShowFollowers
  );

  const [followStatus, setFollowStatus] = useState<boolean>(false);

  const followHandler = () => {
    const newFollowersList = [...followers!];
    newFollowersList.push(loggedUserData._id);
    setFollowers(newFollowersList);
    setFollowStatus(true);
    followersNumberHandler(newFollowersList.length);
    follow(loggedUserData._id, userToShowId, dispatch);
  };

  const unfollowHandler = () => {
    const newFollowersList = followers?.filter(
      (followerId) => followerId !== loggedUserData._id
    );
    setFollowers(newFollowersList!);
    setFollowStatus(false);
    followersNumberHandler(newFollowersList!.length);
    unFollow(loggedUserData._id, userToShowId, dispatch);
  };

  useEffect(
    () =>
      followers?.includes(loggedUserData._id)
        ? setFollowStatus(true)
        : setFollowStatus(false),
    []
  );

  return (
    <>
      {followStatus ? (
        <FollowUnfollowButton onClick={unfollowHandler}>
          Unfollow
        </FollowUnfollowButton>
      ) : (
        <FollowUnfollowButton onClick={followHandler}>
          Follow
        </FollowUnfollowButton>
      )}
    </>
  );
};

export default FollowUnfollow;
