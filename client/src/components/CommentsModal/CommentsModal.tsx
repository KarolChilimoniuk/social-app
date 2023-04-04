import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import closeImg from "../../images/cross-mark.png";
import Comment from "../Comment/Comment";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import TextArea from "../TextArea/TextArea";
import Thought from "../Thought/Thought";
import SubInput from "../SubmitInput/SubmitInput";
import Pagination from "../Pagination/Pagination";
import {
  fetchCommentsModalContent,
  hideCommentsModalHandler,
} from "../../actions/appDataAction";
import {
  IPostWithCommentsContent,
  IRootState,
} from "../../interfaces/interfaces";
import { changeCommentValue, publishComment } from "./Service";
import {
  Img,
  ImgContainer,
  ImgContainer2,
  ModalBackground,
  ModalContainer,
  Content,
  Paragraph,
  Form,
  InputContainer,
  SubmitContainer,
} from "./CommentsModal.style";

const CommentsModal = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const appData = useSelector((state: IRootState) => state.appData);
  const loggedUserData = useSelector((state: IRootState) => state.userData);

  const [modalContent, setModalContent] =
    useState<IPostWithCommentsContent | null>(null);
  const [commentContent, newCommentContent] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [commentsPerPage] = useState<number>(10);

  const indexOfLastPost: number = currentPage * commentsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - commentsPerPage;

  useEffect(() => {
    setModalContent(appData.commentsModalContent);
  }, [appData.commentsModalContent]);

  return (
    <ModalBackground hidden={appData.commentsModalHideStatus}>
      <ModalContainer>
        <ImgContainer>
          <Img
            src={closeImg}
            onClick={() => {
              dispatch(hideCommentsModalHandler(true));
              dispatch(fetchCommentsModalContent(null));
              newCommentContent("");
            }}
          />
        </ImgContainer>
        {appData.commentsModalLoadingStatus && (
          <ImgContainer2>
            <LoadingIcon />
          </ImgContainer2>
        )}
        {modalContent !== null &&
          appData.commentsModalLoadingStatus === false && (
            <Content>
              <Thought
                authorFirstName={modalContent.author.firstName}
                authorLastName={modalContent.author.lastName}
                authorPic={modalContent.author.pic}
                date={new Date(modalContent.created).toDateString()}
                content={modalContent.textContent}
                likes={modalContent.likes.length}
                likeStatus={
                  modalContent.likes.includes(loggedUserData._id) ? true : false
                }
                authorId={modalContent.author._id}
                postId={modalContent._id}
              />
              <Form
                onSubmit={(e: React.SyntheticEvent) => {
                  publishComment(
                    e,
                    commentContent,
                    loggedUserData,
                    modalContent!._id,
                    setModalContent,
                    modalContent
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
              {modalContent.comments!.length !== 0 ? (
                modalContent
                  .comments!.filter(
                    (el, i) => i < indexOfLastPost && i >= indexOfFirstPost
                  )
                  .map((comment) => (
                    <Comment
                      comment={comment}
                      thoughtId={modalContent._id}
                      key={comment._id}
                    />
                  ))
              ) : (
                <Paragraph>No comments</Paragraph>
              )}
              <Pagination
                itemsPerPage={commentsPerPage}
                totalItems={modalContent!.comments!.length}
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
