import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import LikesSection from "../LikesContent/LikesContent";
import UserHeader from "../UserHeader/UserHeader";
import { ThoughtProps } from "../../types/types";
import {
  ThoughtContainer,
  ImgNameDateContainer,
  NameDateContainer,
  ThoughtContent,
  ThoughtDate,
} from "./Thought.style";

const Thought = ({
  authorFirstName,
  authorLastName,
  authorPic,
  date,
  content,
  comments,
  likes,
  likeStatus,
  authorId,
  postId,
}: ThoughtProps): JSX.Element => {
  return (
    <ThoughtContainer>
      <ImgNameDateContainer>
        {authorPic !== "" ? (
          <UserProfileImg
            imgId={authorPic}
            width={40}
            height={40}
            radius={30}
          ></UserProfileImg>
        ) : (
          <NoImgAvatar height={40} width={40} />
        )}
        <NameDateContainer>
          <UserHeader
            name={authorFirstName}
            lastName={authorLastName}
            userId={authorId}
          ></UserHeader>
          <ThoughtDate>{`${date}`}</ThoughtDate>
        </NameDateContainer>
      </ImgNameDateContainer>
      <ThoughtContent>{content}</ThoughtContent>
      <LikesSection likeStatus={likeStatus} likes={likes} postId={postId} />
    </ThoughtContainer>
  );
};

export default Thought;
