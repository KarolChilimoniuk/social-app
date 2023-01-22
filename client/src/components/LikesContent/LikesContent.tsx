import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import like from "../../images/like.png";
import notLike from "../../images/notLike.png";
import { LikesSectionProps } from "../../services/types/types";
import { IRootState } from "../../services/interfaces/interfaces";
import { addLike, removeLike } from "../../services/api/userMainPage";
import { LikesContent, LikeImg, LikesSpan } from "./LikesContent.style";

const LikesSection = ({
  likes,
  likeStatus,
  postId,
}: LikesSectionProps): JSX.Element => {
  const userData = useSelector((state: IRootState) => state.userData);
  const [likeStat, setLikeStatus] = useState<boolean>(likeStatus);

  const dispatch: Dispatch = useDispatch();

  const likeHandler = async () => {
    try {
      if (likeStat) {
        const updatedThought = await removeLike(
          userData._id,
          postId,
          userData.allPostsToShow,
          userData.userPosts,
          dispatch
        );
        setLikeStatus(!likeStat);
      }
      if (!likeStat) {
        const updatedThought = await addLike(
          userData._id,
          postId,
          userData.allPostsToShow,
          userData.userPosts,
          dispatch
        );
        setLikeStatus(!likeStat);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LikesContent>
      {likeStat ? (
        <LikeImg src={like} onClick={likeHandler} />
      ) : (
        <LikeImg src={notLike} onClick={likeHandler} />
      )}
      <LikesSpan>{likes}</LikesSpan>
    </LikesContent>
  );
};

export default LikesSection;
