import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import LikesSection from "../LikesContent/LikesContent";
import UserHeader from "../UserHeader/UserHeader";
import { commentsHandler } from "./Service";
import { ThoughtProps } from "../../types/types";
import {
  ThoughtContainer,
  ImgNameDateContainer,
  Paragraph,
  NameDateContainer,
  ThoughtContent,
  ThoughtDate,
} from "./Thought.style";
import { IRootState } from "../../interfaces/interfaces";

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
  const dispatch: Dispatch = useDispatch();
  const commentsModalHideStatus = useSelector(
    (state: IRootState) => state.appData.commentsModalHideStatus
  );

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
      {commentsModalHideStatus ? (
        <>
          <LikesSection
            type={"thoughts"}
            likeStatus={likeStatus}
            likes={likes}
            postId={postId}
          />
          <Paragraph
            onClick={() => {
              commentsHandler(dispatch, postId);
            }}
          >
            See comments
          </Paragraph>
        </>
      ) : null}
    </ThoughtContainer>
  );
};

export default Thought;
