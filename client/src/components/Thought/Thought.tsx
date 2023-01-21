import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import LikesSection from "../LikesContent/LikesContent";
import { ThoughtProps } from "../../services/types/types";
import {
  ThoughtContainer,
  ImgNameDateContainer,
  NameDateContainer,
  ThoughtHeader,
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
          <NoImgAvatar />
        )}
        <NameDateContainer>
          <ThoughtHeader>{`${authorFirstName} ${authorLastName}`}</ThoughtHeader>
          <ThoughtDate>{`${date}`}</ThoughtDate>
        </NameDateContainer>
      </ImgNameDateContainer>
      <ThoughtContent>{content}</ThoughtContent>
      <LikesSection likeStatus={likeStatus} likes={likes} />
    </ThoughtContainer>
  );
};

export default Thought;
