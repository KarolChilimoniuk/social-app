import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { FollowUnfollowProps } from "../../types/types";
import { follow, unFollow } from "../../services/api/followers";
import { followHandler, unfollowHandler } from "./Service";
import { IRootState } from "../../interfaces/interfaces";
import { Button } from "./FollowUnfollow.style";

const FollowUnfollow = ({
  userToShowId,
  userToShowFollowers,
  listOfFollowersHandler,
  followersNumberHandler,
}: FollowUnfollowProps): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  const loggedUserData = useSelector((state: IRootState) => state.userData);

  return (
    <>
      {userToShowFollowers?.includes(loggedUserData._id) ? (
        <Button
          onClick={() =>
            unfollowHandler(
              userToShowFollowers,
              loggedUserData._id,
              listOfFollowersHandler,
              followersNumberHandler,
              unFollow,
              userToShowId,
              dispatch
            )
          }
        >
          Unfollow
        </Button>
      ) : (
        <Button
          onClick={() =>
            followHandler(
              userToShowFollowers,
              loggedUserData._id,
              listOfFollowersHandler,
              followersNumberHandler,
              follow,
              userToShowId,
              dispatch
            )
          }
        >
          Follow
        </Button>
      )}
    </>
  );
};

export default FollowUnfollow;
