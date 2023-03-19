import { useState } from "react";
import { useSelector } from "react-redux";
import like from "../../images/like.png";
import notLike from "../../images/notLike.png";
import { LikesSectionProps } from "../../types/types";
import { IRootState } from "../../interfaces/interfaces";
import { addLike, removeLike } from "../../services/api/likesContent";
import { LikesContent, Img, Span } from "./LikesContent.style";

const LikesSection = ({
  likes,
  likeStatus,
  postId,
}: LikesSectionProps): JSX.Element => {
  const loggedUserId = useSelector((state: IRootState) => state.userData._id);

  const [likeStat, setLikeStatus] = useState<boolean>(likeStatus);
  const [postLikes, setLike] = useState<number>(likes!);

  const likeHandler = async (): Promise<void> => {
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
        <Img src={like} onClick={likeHandler} />
      ) : (
        <Img src={notLike} onClick={likeHandler} />
      )}
      <Span>{postLikes}</Span>
    </LikesContent>
  );
};

export default LikesSection;
