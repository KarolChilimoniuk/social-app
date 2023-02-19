import { useState } from "react";
import { useSelector } from "react-redux";
import like from "../../images/like.png";
import notLike from "../../images/notLike.png";
import { LikesSectionProps } from "../../types/types";
import { IRootState } from "../../interfaces/interfaces";
import { addLike, removeLike } from "../../services/api/likesContent";
import { LikesContent, LikeImg, LikesSpan } from "./LikesContent.style";

const LikesSection = ({
  likes,
  likeStatus,
  postId,
}: LikesSectionProps): JSX.Element => {
  const loggedUserId = useSelector((state: IRootState) => state.userData._id);

  const [likeStat, setLikeStatus] = useState<boolean>(likeStatus);
  const [postLikes, setLike] = useState<number>(likes!);

  const likeHandler = async () => {
    try {
      if (likeStat) {
        await removeLike(loggedUserId, postId);
        setLikeStatus(!likeStat);
        setLike(postLikes! - 1);
      }
      if (!likeStat) {
        await addLike(loggedUserId, postId);
        setLikeStatus(!likeStat);
        setLike(postLikes! + 1);
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
      <LikesSpan>{postLikes}</LikesSpan>
    </LikesContent>
  );
};

export default LikesSection;
