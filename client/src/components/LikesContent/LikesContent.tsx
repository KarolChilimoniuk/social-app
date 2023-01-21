import like from "../../images/like.png";
import notLike from "../../images/notLike.png";
import { LikesSectionProps } from "../../services/types/types";
import { LikesContent, LikeImg, LikesSpan } from "./LikesContent.style";

const LikesSection = ({
  likes,
  likeStatus,
}: LikesSectionProps): JSX.Element => {
  return (
    <LikesContent>
      {likeStatus ? <LikeImg src={like} /> : <LikeImg src={notLike} />}
      <LikesSpan>{likes}</LikesSpan>
    </LikesContent>
  );
};

export default LikesSection;
