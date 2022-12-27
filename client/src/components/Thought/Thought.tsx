import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import { ThoughtProps } from "../../services/types/types";
import {
  ThoughtContainer,
  ImgNameContainer,
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
}: ThoughtProps): JSX.Element => {
  return (
    <ThoughtContainer>
      <ImgNameContainer>
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
        <ThoughtHeader>{`${authorFirstName} ${authorLastName}`}</ThoughtHeader>
        <ThoughtDate>{date}</ThoughtDate>
      </ImgNameContainer>
      <ThoughtContent>{content}</ThoughtContent>
    </ThoughtContainer>
  );
};

export default Thought;
