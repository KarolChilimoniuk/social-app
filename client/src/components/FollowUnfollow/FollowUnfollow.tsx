import { FollowUnfollowProps } from "../../types/types";
import { follow, unFollow } from "../../services/api/followers";
import { FollowUnfollowButton } from "./FollowUnfollow.style";

const FollowUnfollow = ({
  loggedUserId,
  listOfFollowed,
  userToShowId,
}: FollowUnfollowProps): JSX.Element => {
  return (
    <>
      {listOfFollowed.filter((el) => el._id === loggedUserId).length > 0 ? (
        <FollowUnfollowButton
          onClick={() => unFollow(loggedUserId, userToShowId)}
        >
          Unfollow
        </FollowUnfollowButton>
      ) : (
        <FollowUnfollowButton
          onClick={() => follow(loggedUserId, userToShowId)}
        >
          Follow
        </FollowUnfollowButton>
      )}
    </>
  );
};

export default FollowUnfollow;
