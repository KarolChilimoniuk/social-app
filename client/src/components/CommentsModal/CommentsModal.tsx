import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import closeImg from "../../images/cross-mark.png";
import UserProfileImg from "../UserProfileImg/UserProfileImg";
import NoImgAvatar from "../NoImgAvatar/NoImgAvatar";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import TextArea from "../TextArea/TextArea";
import Thought from "../Thought/Thought";
import SubInput from "../SubmitInput/SubmitInput";
import LikesSection from "../LikesContent/LikesContent";
import Pagination from "../Pagination/Pagination";
import { hideCommentsModalHandler } from "../../actions/appDataAction";
import { IRootState } from "../../interfaces/interfaces";
import { changeCommentValue, publishComment } from "./Service";
import {
  Img,
  ImgContainer,
  ImgContainer2,
  ModalBackground,
  ModalContainer,
  Comment,
  Content,
  Paragraph,
  Form,
  InputContainer,
  SubmitContainer,
  UserContainer,
  HeaderDateContainer,
  DateParagraph,
  CommentContentParagraph,
} from "./CommentsModal.style";
import UserHeader from "../UserHeader/UserHeader";

const CommentsModal = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const appData = useSelector((state: IRootState) => state.appData);
  const loggedUserId = useSelector((state: IRootState) => state.userData._id);

  const [commentContent, newCommentContent] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [commentsPerPage] = useState<number>(10);

  const indexOfLastPost: number = currentPage * commentsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - commentsPerPage;

  return (
    <ModalBackground hidden={appData.commentsModalHideStatus}>
      <ModalContainer>
        <ImgContainer>
          <Img
            src={closeImg}
            onClick={() => {
              dispatch(hideCommentsModalHandler(true));
              newCommentContent("");
            }}
          />
        </ImgContainer>
        {appData.commentsModalLoadingStatus && (
          <ImgContainer2>
            <LoadingIcon />
          </ImgContainer2>
        )}
        {appData.commentsModalContent !== null &&
          appData.commentsModalLoadingStatus === false && (
            <Content>
              <Thought
                authorFirstName={appData.commentsModalContent.author.firstName}
                authorLastName={appData.commentsModalContent.author.lastName}
                authorPic={appData.commentsModalContent.author.pic}
                date={new Date(
                  appData.commentsModalContent.created
                ).toDateString()}
                content={appData.commentsModalContent.textContent}
                likes={appData.commentsModalContent.likes.length}
                likeStatus={
                  appData.commentsModalContent.likes.includes(loggedUserId)
                    ? true
                    : false
                }
                authorId={appData.commentsModalContent.author._id}
                postId={appData.commentsModalContent._id}
              />
              <Form
                onSubmit={(e: React.SyntheticEvent) => {
                  publishComment(
                    e,
                    commentContent,
                    appData.commentsModalContent!.author._id,
                    appData.commentsModalContent!._id
                  );
                  newCommentContent("");
                }}
              >
                <InputContainer>
                  <TextArea
                    placeholder="Write comment..."
                    name="comments"
                    width={"100%"}
                    rows={5}
                    cols={5}
                    value={commentContent}
                    onChangeHandler={(e: React.SyntheticEvent) => {
                      changeCommentValue(e, newCommentContent);
                      console.log(commentContent);
                    }}
                  />
                </InputContainer>
                <SubmitContainer>
                  <SubInput value={`Publish comment`} />
                </SubmitContainer>
              </Form>
              {appData.commentsModalContent.comments.length !== 0 ? (
                appData.commentsModalContent.comments
                  .filter(
                    (el, i) => i < indexOfLastPost && i >= indexOfFirstPost
                  )
                  .map((comment) => (
                    <Comment key={comment._id}>
                      <UserContainer>
                        {appData.commentsModalContent?.author.pic !== "" ? (
                          <UserProfileImg
                            imgId={appData.commentsModalContent?.author.pic}
                            width={30}
                            height={30}
                            radius={30}
                          ></UserProfileImg>
                        ) : (
                          <NoImgAvatar height={30} width={30} />
                        )}
                        <HeaderDateContainer>
                          <UserHeader
                            name={comment.author.firstName!}
                            lastName={comment.author.lastName!}
                            userId={comment.author._id!}
                          />
                          <DateParagraph>
                            <span>
                              {new Date(comment.created).toDateString()}{" "}
                            </span>
                            <span>{new Date(comment.created).getHours()}:</span>
                            <span>
                              {new Date(comment.created).getMinutes() < 10
                                ? `0${new Date(comment.created).getMinutes()}`
                                : new Date(comment.created).getMinutes()}
                            </span>
                          </DateParagraph>
                        </HeaderDateContainer>
                      </UserContainer>
                      <CommentContentParagraph>
                        {comment.content}
                      </CommentContentParagraph>
                      <LikesSection
                        likeStatus={
                          comment.likes.includes(loggedUserId) ? true : false
                        }
                        likes={comment.likes.length}
                        postId={comment._id}
                      />
                    </Comment>
                  ))
              ) : (
                <Paragraph>No comments</Paragraph>
              )}
              <Pagination
                itemsPerPage={commentsPerPage}
                totalItems={appData.commentsModalContent!.comments!.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Content>
          )}
      </ModalContainer>
    </ModalBackground>
  );
};

export default CommentsModal;
